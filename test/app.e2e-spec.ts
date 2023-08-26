import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from 'src/prisma/prisma.service';

describe('App e2e', () => {
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

    await app.init()

    prisma = app.get(PrismaService);
    await prisma.cleaDb();
  });

  afterAll(() => {
    app.close()
  });
  
  describe('Auth', () => {
    describe('Sign Up', () => {
      it('should sign up doctor', () => {
      
      });

      it('should sign up nurse', () => {
      
      });
    });

    describe('Sign In', () => {
      it('should sign in', () => {
      
      });
    });

    describe('Get My Info', () => {
      
    });
  });

  describe('Patient', () => {
    it('should get no patients with "getAllPatients', () => {
      
    });


    describe('Add Patient', () => {
      
    });

    describe('Edit Patient Data', () => {
      
    });

    it('should get no patients with "getAllPatients', () => {
      
    });

    it('should get patients with "getPatientById', () => {
      
    });
  });

  describe('Employee', () => {
    it('Get All Doctors', () => {
      
    });
  });

  describe('Appointment', () => {
    it('should get no appointments with "getAllAppointments', () => {
      
    });

    describe('Add Appointment', () => {
      
    });

    describe('Edit Appointment Data', () => {
      
    });

    describe('Delete Appointment', () => {
      
    });

    it('should get appointments with "getAllAppointments', () => {
      
    });

    it('should get appointments with "getAppointmentsByPatientId"', () => {
      
    });

    it('should get appointments with "getAppointmentsByEmployeeId"', () => {
      
    });
  });

  describe('Diagnosis', () => {
    it('should get no diagnoses with "getAllDiagnoses', () => {
      
    });

    it('should get appointments with "getDiagnosesByPatientId"', () => {
      
    });

    describe('Add Diagnosis', () => {
      
    });

    describe('Edit Diagnosis Data', () => {
      
    });

    describe('Delete Diagnosis', () => {
      
    });

    it('should get diagnoses with "getAllDiagnoses', () => {
      
    });
  });

})
