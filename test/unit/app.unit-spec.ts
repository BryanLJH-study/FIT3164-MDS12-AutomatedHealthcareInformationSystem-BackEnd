import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../../src/app.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthSignInDto, AuthSignUpDto } from 'src/auth/dto';
import * as pactum from 'pactum';

describe('App unit', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      })
    )

    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();

    pactum.request.setBaseUrl('http://localhost:3333');
  });

  afterAll(() => {
    app.close();
  });
  
  describe('Auth', () => {
    const dto = {
      email: "JohnDoe@gmail.com",
      password: "johndoe",
      ic: "0123456789",
      firstName: "John",
      lastName: "Doe",
      dob: "1889-04-20",
      gender: "Male",
      nationality: "Malaysian",
      phoneNo: "0327806803",
      emergencyNo: "5552368",
      emergencyRemarks: "Tell my wife I love her very much",
      title: "Doctor",
      specialty: "Pediatric Care",
      adminCode: "admin",
    }

    const dto2 = {
      email: "willsmith@gmail.com",
      password: "wsm1th",
      ic: "880808088887",
      firstName: "Will",
      lastName: "Smith",
      dob: "1988-08-08",
      gender: "Male",
      nationality: "Malaysian",
      phoneNo: "+60123456789",
      title: "Nurse",
      adminCode: "admin",
    }

    describe('Sign Up', () => {
      it('should sign up doctor John', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(201);
      });

      it('should sign up nurse Will without emergency contact or specialty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto2)
          .expectStatus(201);
      });

      it('should not sign up given invalid email', () => {
        const dto3 = { ...dto2 };
        dto3.email = "willsmith gmail com"
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto3)
          .expectStatus(400);
      });

      it('should not sign up given invalid phone', () => {
        const dto3 = { ...dto2 };
        dto3.phoneNo = "a1234"
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto3)
          .expectStatus(400);
      });

      it('should not sign up again given existing email', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(403);
      });

      it('should not sign up again given existing ic', () => {
        const dto3 = { ...dto2 };
        dto3.email = "nonduplicateemail@gmail.com"
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto3)
          .expectStatus(403);
      });
    });

    describe('Sign In', () => {
      it('should sign in as John', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            email: dto.email,
            password: dto.password,
          })
          .expectStatus(200)
          .stores('token', 'access_token');
      });

      it('should not sign in given invalid email', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            email: "johndoegmail.com",       // invalid email
            password: dto.password,
          })
          .expectStatus(400)
      });

      it('should not sign in given nonexistent email', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            email: "janedoe@gmail.com",      // nonexistent email
            password: "1234",
          })
          .expectStatus(403)
      });
    });

  });

  describe('Employee', () => {
    it('should get John employee info', () => {
      return pactum
        .spec()
        .get('/employees/myinfo')
        .withHeaders({
          Authorization: 'Bearer $S{token}',
        })
        .expectStatus(200)
        .expectBodyContains('John') // John is currently signed in
        .stores('employeeId', 'employeeId');
    });
    
    it('should get all doctors', () => {
      return pactum
        .spec()
        .get('/employees/doctors')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .expectStatus(200)
        .expectJsonLength(1); // Only 1 doctor
    });
  });

  describe('Patient', () => {
    const dto = {
      ic: "123123123",
      firstName: "Jane",
      lastName: "Doe",
      dob: "2000-01-01",
      gender: "Female",
      nationality: "British",
      phoneNo: "34234346756",
      email: "JaneDoe@gmail.com",
      emergencyNo: "5552368",
      emergencyRemarks: "Delete my browser history",
    }

    const dto2 = {
      ic: "990909099998",
      firstName: "Jack",
      lastName: "Reaper",
      dob: "2000-02-02",
      gender: "Male",
      nationality: "Malaysian",
      phoneNo: "+60101010101",
      email: "jackthereaper@gmail.com",
    }

    describe('Add Patient', () => {
      it('should add patient Jane', () => {
        return pactum
          .spec()
          .post('/patients/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody(dto)
          .expectStatus(201)
          .expectBodyContains(dto.firstName)
          .stores('patientId', 'patientId'); // save Jane's patientId
      })
      
      it('should add patient Jack without emergency contact or remarks', () => {
        return pactum
          .spec()
          .post('/patients/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody(dto2)
          .expectStatus(201)
          .expectBodyContains(dto2.firstName)
      })

      it('should not add patient given invalid ic', () => {
        const dto3 = { ...dto2 } 
        dto3.ic = "abcdef"
        return pactum
          .spec()
          .post('/patients/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody(dto3)
          .expectStatus(400)
      })

      it('should not be able to add patient again using existing email', () => {
        return pactum
          .spec()
          .post('/patients/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody(dto)
          .expectStatus(403)
      })

      it('should not be able to add patient again using existing ic', () => {
        const dto3 = { ...dto2 } 
        dto3.email = "nonduplicateemail@gmail.com"
        return pactum
          .spec()
          .post('/patients/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody(dto3)
          .expectStatus(403)
      })
    });

    describe('Edit Patient Data', () => {
      it('should edit patient Jane data', () => {
        return pactum
          .spec()
          .patch('/patients/{patientId}')
          .withPathParams('patientId', '$S{patientId}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            dob: '1999-09-09',
            nationality: 'Malaysian',
          })
          .expectStatus(200)
          .expectBodyContains('1999-09-09')
          .expectBodyContains('Malaysian');
      })

      it('every argument of edit patient should be optional', () => {
        return pactum
          .spec()
          .patch('/patients/{patientId}')
          .withPathParams('patientId', '$S{patientId}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({})   // empty dictionary
          .expectStatus(200);
      })

      it('should not be able to edit if given invalid ic', () => {
        return pactum
          .spec()
          .patch('/patients/{patientId}')
          .withPathParams('patientId', '$S{patientId}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            ic: "abcdefghijklmn"
          })
          .expectStatus(400);
      })      
      
      // Prisma exception
      it('should not be able to edit if given another existing email', () => {
        return pactum
          .spec()
          .patch('/patients/{patientId}')
          .withPathParams('patientId', '$S{patientId}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            email: "jackthereaper@gmail.com"
          })
          .expectStatus(500);
      })

      // Prisma Exception
      it('should not be able to edit if given another existing ic', () => {
        return pactum
          .spec()
          .patch('/patients/{patientId}')
          .withPathParams('patientId', '$S{patientId}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            ic: "990909099998"
          })
          .expectStatus(500);
      })
    });

    describe('Get Patient Data', () => {
      it('should get all patients', () => {
        return pactum
        .spec()
        .get('/patients/all')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .expectStatus(200)
        // .expectJsonLength(1); // Only 1 patient
        .expectJsonLength(2); // Only 2 patients
      });
  
      it('should get Jane patient data by patientId', () => {
        return pactum
          .spec()
          .get('/patients/{patientId}') // Apply Jane's patientId
          .withPathParams('patientId', '$S{patientId}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .expectStatus(200)
          .expectBodyContains('Jane');
      });

      it('should not get any patient\'s data given type-invalid patientId', () => {
        return pactum
          .spec()
          .get('/patients/{patientId}') // Apply invalid patientId
          .withPathParams('patientId', 'a')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .expectStatus(400)
      });

      it('should not get any patient\'s data given nonexistent patientId', () => {
        return pactum
          .spec()
          .get('/patients/{patientId}') // Apply nonexistent patientId
          .withPathParams('patientId', '999')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .expectStatus(404);  // getting 200 instead
      });
    });
  });

  describe('Appointment', () => {
    const date1: String = '2023-10-01' // only initialize date since id variables stored
    const date2: String = '2023-10-02' // alternative date for 2nd appointment
    const date3: String = '2023-10-03' // alternative date for edit
    const date4: String = '2023-10-04' // alternative date for 3rd appointment
    const date5: String = '2023-10-05' // placeholder date; not added
 
    describe('Add Appointment', () => {

      it('should add appointment', () => {
        return pactum
          .spec()
          .post('/appointments/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            patientId: '$S{patientId}',   // Patient Jane
            employeeId: '$S{employeeId}', // Doctor John
            appointmentDateTime: date1,
            reason: 'constantly sleepy',
            remarks: 'likely narcolepsy',
            completed: true,
          })
          .expectStatus(201)
          .expectBodyContains(date1)
          .stores('appointmentId1', 'appointmentId');
      });

      it('should add non-conflicting appointment with same patient and doctor', () => {
        return pactum
          .spec()
          .post('/appointments/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            patientId: '$S{patientId}',   // Patient Jane
            employeeId: '$S{employeeId}', // Doctor John
            appointmentDateTime: date2,   // non-conflicting date
            reason: 'headache and nausea',
            remarks: 'exposure to swine flu 2 days ago',
          })
          .expectStatus(201)
          .expectBodyContains(date2)
          .stores('appointmentId2', 'appointmentId');
      });

      it('reason and remarks should be optional', () => {
        return pactum
          .spec()
          .post('/appointments/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            patientId: '$S{patientId}',   // Patient Jane
            employeeId: '$S{employeeId}', // Doctor John
            appointmentDateTime: date3,   // non-conflicting date
          })
          .expectStatus(201)
          .expectBodyContains(date3)
          .stores('appointmentId3', 'appointmentId');
      });

      it('should not add appointment given type-invalid patientId', () => {
        return pactum
        .spec()
        .post('/appointments/')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .withBody({
          patientId: 'abcd',            // invalid patientId
          employeeId: '$S{employeeId}', // Doctor John
          appointmentDateTime: date5,   // non-conflicting date
        })
        .expectStatus(400);
      });

      it('should not add appointment given type-invalid employeeId', () => {
        return pactum
        .spec()
        .post('/appointments/')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .withBody({
          patientId: '$S{patientId}',   // Patient Jane
          employeeId: 'abcd',           // invalid employeeId
          appointmentDateTime: date5,   // non-conflicting date
        })
        .expectStatus(400);
      });

      it('should not add appointment given type-invalid completed status', () => {
        return pactum
        .spec()
        .post('/appointments/')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .withBody({
          patientId: '$S{patientId}',   // Patient Jane
          employeeId: '$S{employeeId}', // Doctor John
          appointmentDateTime: date5,   // non-conflicting date
          completed: 'abcd',            // non-boolean completed status (invalid)
        })
        .expectStatus(400);
      });

      it('should not add appointment given nonexistent patientId', () => {
        return pactum
        .spec()
        .post('/appointments/')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .withBody({
          patientId: '999',             // nonexistent patientId
          employeeId: '$S{employeeId}', // Doctor John
          appointmentDateTime: date5,   // non-conflicting date
        })
        .expectStatus(400);
      });

      it('should not add appointment given nonexistent employeeId', () => {
        return pactum
        .spec()
        .post('/appointments/')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .withBody({
          patientId: '$S{patientId}',   // Patient Jane
          employeeId: '999',            // nonexistent employeeId
          appointmentDateTime: date5,   // non-conflicting date
        })
        .expectStatus(400);
      });

      it('should not add conflicting appointment', () => {
        return pactum
        .spec()
        .post('/appointments/')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .withBody({
          patientId: '$S{patientId}',   // Patient Jane
          employeeId: '$S{employeeId}', // Doctor John
          appointmentDateTime: date1,   // conflicting date
        })
        .expectStatus(403); // Should receive forbidden exception
      });
    });

    describe('Edit Appointment Data', () => {
      it('should edit appointment', () => {
        return pactum
          .spec()
          .patch('/appointments/{appointmentId}')
          .withPathParams('appointmentId', '$S{appointmentId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            appointmentDateTime: date4, // edit date
          })
          .expectStatus(200)
          .expectBodyContains(date4);
      });

      it('should edit even if no other argument is given', () => {
        return pactum
          .spec()
          .patch('/appointments/{appointmentId}')
          .withPathParams('appointmentId', '$S{appointmentId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({})
          .expectStatus(200);
      });

      it('should not edit any appointment given type-invalid appointmentId', () => {
        return pactum
          .spec()
          .patch('/appointments/{appointmentId}')
          .withPathParams('appointmentId', 'abcd')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            appointmentDateTime: date3, // edit date
          })
          .expectStatus(400);
      });

      it('should not edit any appointment given type-invalid patientId', () => {
        return pactum
          .spec()
          .patch('/appointments/{appointmentId}')
          .withPathParams('appointmentId', '$S{appointmentId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            patientId: 'abcd',
          })
          .expectStatus(400);
      });

      it('should not edit any appointment given type-invalid employeeId', () => {
        return pactum
          .spec()
          .patch('/appointments/{appointmentId}')
          .withPathParams('appointmentId', '$S{appointmentId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            employeeId: 'abcd',
          })
          .expectStatus(400);
      });

      it('should not edit any appointment given type-invalid completed status', () => {
        return pactum
          .spec()
          .patch('/appointments/{appointmentId}')
          .withPathParams('appointmentId', '$S{appointmentId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            completed: 'abcd',
          })
          .expectStatus(400);
      });
      
      it('should not edit any appointment given nonexistent appointmentId', () => {
        return pactum
          .spec()
          .patch('/appointments/{appointmentId}')
          .withPathParams('appointmentId', '999')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            appointmentDateTime: date3, // edit date
          })
          .expectStatus(404);
      });
      
      it('should not edit any appointment given nonexistent patientId', () => {
        return pactum
          .spec()
          .patch('/appointments/{appointmentId}')
          .withPathParams('appointmentId', '$S{appointmentId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            patientId: '999',     // nonexistent patientId
          })
          .expectStatus(400);
      });
      
      it('should not edit any appointment given nonexistent employeeId', () => {
        return pactum
          .spec()
          .patch('/appointments/{appointmentId}')
          .withPathParams('appointmentId', '$S{appointmentId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            employeeId: '999',     // nonexistent patientId
          })
          .expectStatus(400);
      });
      
      // Interesting Error mentioned in Test Report
      it('should not allow editing appointment to be in conflict with another appointment', () => {
        return pactum
          .spec()
          .patch('/appointments/{appointmentId}')
          .withPathParams('appointmentId', '$S{appointmentId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            appointmentDateTime: date3,   // conflicting date          
          })
          .expectStatus(403);             // getting 200 instead
      });
    });

    describe('Delete Appointment', () => {
      it('should delete existing appointment', () => {
        return pactum
          .spec()
          .delete('/appointments/{appointmentId}')
          .withPathParams('appointmentId', '$S{appointmentId2}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .expectStatus(200);
      });

      it('should not delete any appointment given type-invalid appointmentId', () => {
        return pactum
          .spec()
          .delete('/appointments/{appointmentId}')
          .withPathParams('appointmentId', 'abcd')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .expectStatus(400);
      });
      
      it('should not delete any appointment given nonexistent appointmentId', () => {
        return pactum
          .spec()
          .delete('/appointments/{appointmentId}')
          .withPathParams('appointmentId', '999')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .expectStatus(404);
      });    
    });

    describe('Get Appointment Data', () => {
      it('should get all appointments', () => {
        return pactum
        .spec()
        .get('/appointments/all')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .expectStatus(200)
        // .expectJsonLength(1); // Only 1 appointment left
        .expectJsonLength(2); // Only 1 appointment left
      });
  
      describe('Get Appointments of Employee', () => {
        it('should get all appointments of employee with employeeId', () => {
          return pactum
            .spec()
            .get('/appointments/employee/{employeeId}') // Apply John's employeeId
            .withPathParams('employeeId', '$S{employeeId}')
            .withHeaders({
              Authorization: 'Bearer $S{token}'
            })
            .expectStatus(200);
        });
  
        it('should not get any appointment given type-invalid employeeId', () => {
          return pactum
            .spec()
            .get('/appointments/employee/{employeeId}') // Apply invalid employeeId
            .withPathParams('employeeId', 'abcd')
            .withHeaders({
              Authorization: 'Bearer $S{token}'
            })
            .expectStatus(400);
        });      
  
        it('should not get any appointment given nonexisting employeeId', () => {
          return pactum
            .spec()
            .get('/appointments/employee/{employeeId}') // Apply nonexistent employeeId
            .withPathParams('employeeId', '999')
            .withHeaders({
              Authorization: 'Bearer $S{token}'
            })
            .expectStatus(404);
        });

      });

      describe('Get Appointments of Patient', () => {
        it('should get all appointmets of patient with patientId', () => {
          return pactum
            .spec()
            .get('/appointments/patient/{patientId}') // Apply Jane's patientId
            .withPathParams('patientId', '$S{patientId}')
            .withHeaders({
              Authorization: 'Bearer $S{token}'
            })
            .expectStatus(200);
        });
  
        it('should not get any appointment given type-invalid patientId', () => {
          return pactum
            .spec()
            .get('/appointments/patient/{patientId}') // Apply invalid patientId
            .withPathParams('patientId', 'abcd')
            .withHeaders({
              Authorization: 'Bearer $S{token}'
            })
            .expectStatus(400);
        });        

        it('should not get any appointment given nonexistent patientId', () => {
          return pactum
            .spec()
            .get('/appointments/patient/{patientId}') // Apply nonexistent patientId
            .withPathParams('patientId', '999')
            .withHeaders({
              Authorization: 'Bearer $S{token}'
            })
            .expectStatus(404);
        });        
      });
    });
  });

  describe('Diagnosis', () => {
    const icd1 = 'F10'; // only need icd, already stored appointmentId1
    const icd2 = 'F11'; // icd for 2nd diagnosis
    const icd3 = 'F12'; // alternate icd for edit
    const icd4 = 'F14'; // icd for 3rd diagnosis
    const icd5 = 'F72'; // another alternate icd for edit

    describe('Add Diagnosis', () => {
      it('should add diagnosis', () => {
        return pactum
          .spec()
          .post('/diagnoses/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            appointmentId: '$S{appointmentId1}', 
            icd: icd1,
            symptoms: 'withdrawal symptoms and antisocial tendencies',
            remarks: 'mental/behavioural disorders due to alcohol use',
          })
          .expectStatus(201)
          .expectBodyContains(icd1)
          .stores('diagnosisId1', 'diagnosisId');
      })

      it('should add diagnosis to same appointment', () => {
        return pactum
          .spec()
          .post('/diagnoses/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            appointmentId: '$S{appointmentId1}', 
            icd: icd2,
            symptoms: 'withdrawal symptoms, drug tolerance',
            remarks: 'mental/behavioural disorders due to opioid use',
          })
          .expectStatus(201)
          .expectBodyContains(icd2)
          .stores('diagnosisId2', 'diagnosisId');
      })

      it('symptoms and remarks should be optional', () => {
        return pactum
          .spec()
          .post('/diagnoses/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            appointmentId: '$S{appointmentId1}', 
            icd: icd4,
          })
          .expectStatus(201)
          .expectBodyContains(icd4);
      })

      it('should not add any diagnosis given type-invalid appointmentId', () => {
        return pactum
          .spec()
          .post('/diagnoses/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            appointmentId: 'abcd',    // invalid appointmentId
            icd: icd3,
          })
          .expectStatus(400);
      })      

      it('should not add any diagnosis given nonexistent appointmentId', () => {
        return pactum
          .spec()
          .post('/diagnoses/')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            appointmentId: '999',    // invalid appointmentId
            icd: icd3,
          })
          .expectStatus(400);
      }) 
    });

    describe('Edit Diagnosis Data', () => {
      it('should edit diagnosis', () => {
        return pactum
          .spec()
          .patch('/diagnoses/{diagnosisId}')
          .withPathParams('diagnosisId', '$S{diagnosisId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            icd: icd5
          })
          .expectStatus(200)
          .expectBodyContains(icd5);
      });

      it('every edit argument should be optional', () => {
        return pactum
          .spec()
          .patch('/diagnoses/{diagnosisId}')
          .withPathParams('diagnosisId', '$S{diagnosisId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({})
          .expectStatus(200);
      });

      it('should not edit any diagnosis given type-invalid diagnosisId', () => {
        return pactum
          .spec()
          .patch('/diagnoses/{diagnosisId}')
          .withPathParams('diagnosisId', 'abcd')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({})
          .expectStatus(400);
      });
      
      it('should not edit any diagnosis given type-invalid appointmentId', () => {
        return pactum
          .spec()
          .patch('/diagnoses/{diagnosisId}')
          .withPathParams('diagnosisId', '$S{diagnosisId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            appointmentId: 'abcd',
          })
          .expectStatus(400);
      });

      // Prisma exception
      it('should not edit any diagnosis given nonexistent diagnosisId', () => {
        return pactum
          .spec()
          .patch('/diagnoses/{diagnosisId}')
          .withPathParams('diagnosisId', '999')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({})
          .expectStatus(500);
      });
      
      it('should not edit any diagnosis given nonexistent appointmentId', () => {
        return pactum
          .spec()
          .patch('/diagnoses/{diagnosisId}')
          .withPathParams('diagnosisId', '$S{diagnosisId1}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .withBody({
            appointmentId: '999',
          })
          .expectStatus(400);
      });
     
    });

    describe('Delete Diagnosis', () => {
      it('should delete diagnosis', () => {
        return pactum
          .spec()
          .delete('/diagnoses/{diagnosisId}')
          .withPathParams('diagnosisId', '$S{diagnosisId2}')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .expectStatus(200);
      });

      it('should not delete any diagnosis given type-invalid diagnosisId', () => {
        return pactum
          .spec()
          .delete('/diagnoses/{diagnosisId}')
          .withPathParams('diagnosisId', 'abcd')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .expectStatus(400);
      });      

      it('should not delete any diagnosis given nonexistent diagnosisId', () => {
        return pactum
          .spec()
          .delete('/diagnoses/{diagnosisId}')
          .withPathParams('diagnosisId', '999')
          .withHeaders({
            Authorization: 'Bearer $S{token}'
          })
          .expectStatus(404);
      });    
    });

    describe('Get Diagnosis Data', () => {
      it('should get all diagnoses', () => {
        return pactum
        .spec()
        .get('/diagnoses/all')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .expectStatus(200)
        // .expectJsonLength(1); // Only 1 diagnosis left
        .expectJsonLength(2); // Only 2 diagnoses left
      });

      it ('should get all diagnoses of patient with patientId', () => {
        return pactum
        .spec()
        .get('/diagnoses/patient/{patientId}') // Apply Jane's patientId
        .withPathParams('patientId', '$S{patientId}')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .expectStatus(200);
      });

      it ('should not get any diagnosis data given type-invalid patientId', () => {
        return pactum
        .spec()
        .get('/diagnoses/patient/{patientId}') // Apply invalid patientId
        .withPathParams('patientId', 'abcd')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .expectStatus(400);
      });

      it ('should not get any diagnosis data given nonexistent patientId', () => {
        return pactum
        .spec()
        .get('/diagnoses/patient/{patientId}') // Apply nonexistent patientId
        .withPathParams('patientId', '999')
        .withHeaders({
          Authorization: 'Bearer $S{token}'
        })
        .expectStatus(404);
      });
    });
  });
});
