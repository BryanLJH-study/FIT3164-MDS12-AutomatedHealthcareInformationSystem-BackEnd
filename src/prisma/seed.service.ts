import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2';
import { Injectable } from "@nestjs/common";

@Injectable()
export class SeedService {
    constructor(private prisma: PrismaService) {}

    // Initializes Database Entries for Development
    async seedInitialData() {
        await this.prisma.cleanDb();

        // // Add Doctor 1
        // await this.prisma.employee.create({
        //     data: {
        //         email: "JohnDoe@gmail.com",
        //         hash: await argon.hash("johndoe"),
        //         ic: "0123456789",
        //         firstName: "John",
        //         lastName: "Doe",
        //         dob: new Date("1889-04-20").toISOString(),
        //         gender: "Male",
        //         nationality: "Malaysian",
        //         phoneNo: "0327806803",
        //         emergencyNo: "5552368",
        //         emergencyRemarks: "Tell my wife I love her very much",
        //         title: "Doctor",
        //         specialty: "Pediatric Care",
        //     }
        // })

        // // Add Doctor 2
        // await this.prisma.employee.create({
        //     data: {
        //         email: "JaneDoe@gmail.com",
        //         hash: await argon.hash("janedoe"),
        //         ic: "9876543210",
        //         firstName: "Jane",
        //         lastName: "Doe",
        //         dob: new Date("1960-04-20").toISOString(),
        //         gender: "Female",
        //         nationality: "Malaysian",
        //         phoneNo: "0376272929",
        //         emergencyNo: "5552368",
        //         emergencyRemarks: "She knows...",
        //         title: "Doctor",
        //         specialty: "Gynaecology",
        //     }
        // })

        // // Add Doctor 3
        // await this.prisma.employee.create({
        //     data: {
        //         email: "YuHan@gmail.com",
        //         hash: await argon.hash("yuhan"),
        //         ic: "6969696969",
        //         firstName: "Yu",
        //         lastName: "Han",
        //         dob: new Date("1921-01-27").toISOString(),
        //         gender: "Male",
        //         nationality: "Malaysian",
        //         phoneNo: "888888888888",
        //         emergencyNo: "5552368",
        //         emergencyRemarks: "Pai se",
        //         title: "Doctor",
        //         specialty: "Prostate",
        //     }
        // })

        // // Add Doctor 4
        // await this.prisma.employee.create({
        //     data: {
        //         email: "JulianThong@gmail.com",
        //         hash: await argon.hash("julianthong"),
        //         ic: "420420420",
        //         firstName: "Julian",
        //         lastName: "Thong",
        //         dob: new Date("1969-05-04").toISOString(),
        //         gender: "Male",
        //         nationality: "Malaysian",
        //         phoneNo: "22413123123",
        //         emergencyNo: "5552368",
        //         emergencyRemarks: "Pai se",
        //         title: "Doctor",
        //         specialty: "Urology",
        //     }
        // })

        // // Add Nurse 1
        // await this.prisma.employee.create({
        //     data: {
        //         email: "FlorenceNightingale@gmail.com",
        //         hash: await argon.hash("florencenightingale"),
        //         ic: "6969420",
        //         firstName: "Florence",
        //         lastName: "Nightingale",
        //         dob: new Date("1820-05-12").toISOString(),
        //         gender: "Female",
        //         nationality: "Italian",
        //         phoneNo: "1300888333",
        //         emergencyNo: "5552368",
        //         emergencyRemarks: "Cocaine is a hellava drug",
        //         title: "Nurse",
        //         specialty: "Oncology",
        //     }
        // })

        // // Add Patient
        // await this.prisma.patient.create({
        //     data: {
        //         ic: "123123123",
        //         firstName: "Mary",
        //         lastName: "Sue",
        //         dob: new Date("2000-01-01").toISOString(),
        //         gender: "Female",
        //         nationality: "British",
        //         phoneNo: "34234346756",
        //         email: "MarySue@gmail.com",
        //         emergencyNo: "5552368",
        //         emergencyRemarks: "Delete my browser history",
        //     }
        // })

        //  // Add Patient
        //  await this.prisma.patient.create({
        //     data: {
        //         ic: "20092011",
        //         firstName: "Muammar",
        //         lastName: "Gaddafi",
        //         dob: new Date("1942-06-07").toISOString(),
        //         gender: "Male",
        //         nationality: "Libyian",
        //         phoneNo: "0326939366",
        //         email: "MuammarGaddafi@gmail.com",
        //         emergencyNo: "5552368",
        //         emergencyRemarks: "The Preamble of the Charter states that armed force shall not be used, save in the common interest",
        //     }
        // })

        // // Add Patient
        // await this.prisma.patient.create({
        //     data: {
        //         ic: "13091996",
        //         firstName: "Tupac",
        //         lastName: "Shakur",
        //         dob: new Date("1971-06-16").toISOString(),
        //         gender: "Male",
        //         nationality: "American",
        //         phoneNo: "3239603500",
        //         email: "TupacShakur@gmail.com",
        //         emergencyNo: "5552368",
        //         emergencyRemarks: "YOLO",
        //     }
        // })

        // // Add Patient
        // await this.prisma.patient.create({
        //     data: {
        //         ic: "0327876005",
        //         firstName: "Bryan",
        //         lastName: "Lean",
        //         dob: new Date("1954-04-11").toISOString(),
        //         gender: "Male",
        //         nationality: "Sentinalese",
        //         phoneNo: "1800180066",
        //         email: "BryanLean@gmail.com",
        //         emergencyNo: "2484345508",
        //         emergencyRemarks: "Call an ambulance, call an ambulance...",
        //     }
        // })

        // // Add Patient
        // await this.prisma.patient.create({
        //     data: {
        //         ic: "8589240180",
        //         firstName: "Ian",
        //         lastName: "Oong",
        //         dob: new Date("1945-05-08").toISOString(),
        //         gender: "Male",
        //         nationality: "Zimbabwean",
        //         phoneNo: "5055034455",
        //         email: "IanOong@gmail.com",
        //         emergencyNo: "5552368",
        //         emergencyRemarks: "According to all known laws of aviation, a bee should not be able to fly...",
        //         remarks: "I'm allergic to bees",
        //     }
        // })

        // // Add Appointment
        // await this.prisma.appointment.create({
        //     data: {
        //         patient: { connect: { patientId: 2 } },                  // Connect the patient
        //         employee: { connect: { employeeId: 2 } },                // Connect the employee
        //         appointmentDateTime: new Date('2023-10-05').toISOString(),
        //         reason: "Nothing in particular",
        //         remarks: "Ya'll got summa dat?",
        //     }
        // })

        // // Add Appointment
        // await this.prisma.appointment.create({
        //     data: {
        //         patient: { connect: { patientId: 4 } },                  // Connect the patient
        //         employee: { connect: { employeeId: 3 } },                // Connect the employee
        //         appointmentDateTime: new Date('2023-11-06').toISOString(),
        //         reason: "It's a bit itchy",
        //         remarks: "Is it bad doc?",
        //     }
        // })

        // // Add Appointment
        // await this.prisma.appointment.create({
        //     data: {
        //         patient: { connect: { patientId: 5 } },                  // Connect the patient
        //         employee: { connect: { employeeId: 4 } },                // Connect the employee
        //         appointmentDateTime: new Date('2024-01-05').toISOString(),
        //         reason: "Oh the pain, the pain, so pain...",
        //         remarks: "Need oxycontin, for pain...",
        //     }
        // })

        // // Add Appointment
        // await this.prisma.appointment.create({
        //     data: {
        //         patient: { connect: { patientId: 4 } },                  // Connect the patient
        //         employee: { connect: { employeeId: 4 } },                // Connect the employee
        //         appointmentDateTime: new Date('2023-12-05').toISOString(),
        //         reason: "It hurts when I do this",
        //         remarks: "What's a ligma?",
        //     }
        // })

        //  // Add Appointment
        //  await this.prisma.appointment.create({
        //     data: {
        //         patient: { connect: { patientId: 5 } },                  // Connect the patient
        //         employee: { connect: { employeeId: 3 } },                // Connect the employee
        //         appointmentDateTime: new Date('2023-11-05').toISOString(),
        //         reason: "Help me with deez",
        //         remarks: "Got'em",
        //     }
        // })

        // // Add Diagnosis
        // await this.prisma.diagnosis.create({
        //     data: {
        //         appointment: {connect: {appointmentId: 2}},
        //         icd: 'W53',
        //         symptoms: 'Patient can be puppeteered through scalp',
        //         remarks: 'Patient has seemingly found the joy of cooking',
        //     }
        // })

        // // Add Diagnosis
        // await this.prisma.diagnosis.create({
        //     data: {
        //         appointment: {connect: {appointmentId: 2}},
        //         icd: 'B20',
        //         symptoms: 'Bad, really bad',
        //         remarks: 'Terminal',
        //     }
        // })

        // // Add Diagnosis
        // await this.prisma.diagnosis.create({
        //     data: {
        //         appointment: {connect: {appointmentId: 4}},
        //         icd: 'F20',
        //         symptoms: 'Hallucination, Dellusions of Grandeur',
        //         remarks: 'He keeps asking who is Joe',
        //     }
        // })

        // // Add Diagnosis
        // await this.prisma.diagnosis.create({
        //     data: {
        //         appointment: {connect: {appointmentId: 3}},
        //         icd: 'F14',
        //         symptoms: 'Hopeless addiction',
        //         remarks: 'Damn druggie',
        //     }
        // })

        // // Add Diagnosis
        // await this.prisma.diagnosis.create({
        //     data: {
        //         appointment: {connect: {appointmentId: 5}},
        //         icd: 'F95',
        //         symptoms: 'Vocal Ticks',
        //         remarks: 'Something about nuts?',
        //     }
        // })

        // ===== PATIENTS =====
        // Add Patient 1
        await this.prisma.patient.create({
            data: {
                ic: "391026276963",
                firstName: "Guan Eng",
                lastName: "Lim",
                dob: new Date("1939-10-26").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60142702309",
                email: "penangonebetter@aol.com",
                emergencyNo: "+60174236470",
                emergencyRemarks: "spouse",
                remarks: "pancreatic cancer in remission",
            }
        })
        // Add Patient 2
        await this.prisma.patient.create({
            data: {
                ic: "380606361666",
                firstName: "Yui",
                lastName: "Horie",
                dob: new Date("1938-06-06").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60198056369",
                email: "perfectslumbers@protonmail.com",
                emergencyNo: "+601184774452",
                emergencyRemarks: "grandchild",
                remarks: "appendectomy done in 2005",
            }
        })
        // Add Patient 3
        await this.prisma.patient.create({
            data: {
                ic: "740916101848",
                firstName: "Hanifa",
                lastName: "binti Kasim",
                dob: new Date("1974-09-16").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60164795379",
                email: "hanifakasim@outlook.com",
                emergencyNo: "+601170735766",
                emergencyRemarks: "spouse",
                remarks: "obese as of Feb 2015",
            }
        })
        // Add Patient 4
        await this.prisma.patient.create({
            data: {
                ic: "361202098903",
                firstName: "Teddy",
                lastName: "Roosevelt",
                dob: new Date("1936-12-02").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60125739047",
                email: "firesidetalks@gmail.com",
                emergencyNo: "+601115546099",
                emergencyRemarks: "spouse",
                remarks: "type 2 diabetic",
            }
        })
        // Add Patient 5
        await this.prisma.patient.create({
            data: {
                ic: "630806127135",
                firstName: "Wei Hou",
                lastName: "Lee",
                dob: new Date("1963-08-06").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601134635120",
                email: "aaronleewh@gmail.com",
                emergencyNo: "+601172402354",
                emergencyRemarks: "son",
                remarks: "vegetarian",
            }
        })
        // Add Patient 6
        await this.prisma.patient.create({
            data: {
                ic: "920512114412",
                firstName: "Connie",
                lastName: "Lim",
                dob: new Date("1992-05-12").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601150492071",
                email: "connieooi@gmail.com",
                emergencyNo: "+60107141701",
                emergencyRemarks: "sibling",
                remarks: null,
            }
        })
        // Add Patient 7
        await this.prisma.patient.create({
            data: {
                ic: "670416099419",
                firstName: "Kazuhiko",
                lastName: "Nagata",
                dob: new Date("1967-04-16").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601155570101",
                email: "smokeynagata@gmail.com",
                emergencyNo: "+601131482288",
                emergencyRemarks: "spouse",
                remarks: null,
            }
        })
        // Add Patient 8
        await this.prisma.patient.create({
            data: {
                ic: "690213474423",
                firstName: "Mahathir",
                lastName: "Mohammad",
                dob: new Date("1969-02-13").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601198920907",
                email: "fourthprimeminister@icloud.com",
                emergencyNo: "+60107645318",
                emergencyRemarks: "spouse",
                remarks: null,
            }
        })
        // Add Patient 9
        await this.prisma.patient.create({
            data: {
                ic: "920505381332",
                firstName: "Sofia",
                lastName: "Vergara",
                dob: new Date("1992-05-05").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601176419991",
                email: "misscolombia@yahoo.com",
                emergencyNo: "+601165347790",
                emergencyRemarks: "mother",
                remarks: null,
            }
        })
        // Add Patient 10
        await this.prisma.patient.create({
            data: {
                ic: "510811463659",
                firstName: "Kumail",
                lastName: "A/L Nanjiani",
                dob: new Date("1951-08-11").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60187387145",
                email: "kumailnanjiani@yahoo.com",
                emergencyNo: "+601153522313",
                emergencyRemarks: "spouse",
                remarks: null,
            }
        })
        // Add Patient 11
        await this.prisma.patient.create({
            data: {
                ic: "650317513634",
                firstName: "Priyanka",
                lastName: "Chopra",
                dob: new Date("1965-03-17").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601178024146",
                email: "priyanka.c@gmail.com",
                emergencyNo: "+601155513508",
                emergencyRemarks: "grandchild",
                remarks: null,
            }
        })
        // Add Patient 12
        await this.prisma.patient.create({
            data: {
                ic: "850103395435",
                firstName: "Eu Zin",
                lastName: "Fong",
                dob: new Date("1985-01-03").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601164706256",
                email: "ren.easy@outlook.com",
                emergencyNo: "+60132000782",
                emergencyRemarks: "spouse",
                remarks: null,
            }
        })
        // Add Patient 13
        await this.prisma.patient.create({
            data: {
                ic: "801203512760",
                firstName: "Bingbing",
                lastName: "Fan",
                dob: new Date("1980-12-03").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60147534239",
                email: "iceicebaby@gmail.com",
                emergencyNo: "+601166785366",
                emergencyRemarks: "spouse",
                remarks: null,
            }
        })
        // Add Patient 14
        await this.prisma.patient.create({
            data: {
                ic: "480111255618",
                firstName: "Nicol",
                lastName: "Ann David",
                dob: new Date("1948-01-11").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601113881488",
                email: "nicol.squash@gmail.com",
                emergencyNo: "+60160177896",
                emergencyRemarks: "daughter",
                remarks: "known IBS",
            }
        })
        // Add Patient 15
        await this.prisma.patient.create({
            data: {
                ic: "471002507444",
                firstName: "Anitha",
                lastName: "A/P Krishnan",
                dob: new Date("1947-10-02").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601147550645",
                email: "anithaone@gmail.com",
                emergencyNo: "+60192242830",
                emergencyRemarks: "son",
                remarks: "stroke in 2023",
            }
        })
        
        // ===== EMPLOYEES =====
        // Add Doctor 1
        await this.prisma.employee.create({
            data: {
                email: "thebackenddoctor@protonmail.com",
                hash: await argon.hash("D2G<1|D5@uS2_Qi7x`Si\ac"),
                ic: "790723398417",
                firstName: "Bryan",
                lastName: "Lean",
                dob: new Date("1979-07-23").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60165694479",
                emergencyNo: "+60106828940",
                emergencyRemarks: "sibling",
                title: "Doctor",
                specialty: "Pediatrics",
            }
        })
        // Add Doctor 2
        await this.prisma.employee.create({
            data: {
                email: "ivycheowyn@bengclinic.com",
                hash: await argon.hash("ax<2F5GSja~?B{N;SXy"),
                ic: "791107252304",
                firstName: "Ivy",
                lastName: "Cheow",
                dob: new Date("1979-11-07").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60143251479",
                emergencyNo: "+60192879462",
                emergencyRemarks: "parent",
                title: "Doctor",
                specialty: "Ophthalmology",
            }
        })
        // Add Nurse 1
        await this.prisma.employee.create({
            data: {
                email: "zfaridahz@bengclinic.com",
                hash: await argon.hash("57:qs~F;Ut:v^gkPzkY>jVpGt2xa"),
                ic: "780615088898",
                firstName: "Faridah",
                lastName: "binti Zakariah",
                dob: new Date("1978-06-15").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60125552562",
                emergencyNo: "+60103723319",
                emergencyRemarks: "father",
                title: "Nurse",
                specialty: null,
            }
        })
        // Add Doctor 3
        await this.prisma.employee.create({
            data: {
                email: "eeian@icloud.com",
                hash: await argon.hash("mementoVivere681002"),
                ic: "701003242151",
                firstName: "Ian",
                lastName: "Ong",
                dob: new Date("1970-10-03").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60182826326",
                emergencyNo: "+60195642794",
                emergencyRemarks: "mother",
                title: "Doctor",
                specialty: "Urology",
            }
        })
        // Add Nurse 2
        await this.prisma.employee.create({
            data: {
                email: "chewyuhan2048@bengclinic.com",
                hash: await argon.hash("61frightened=moustache"),
                ic: "550125179275",
                firstName: "Yu Han",
                lastName: "Chew",
                dob: new Date("1955-01-25").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60106264290",
                emergencyNo: "+60194721426",
                emergencyRemarks: "spouse",
                title: "Nurse",
                specialty: null,
            }
        })
        // Add Doctor 4
        await this.prisma.employee.create({
            data: {
                email: "doctorhwang9@bengclinic.com",
                hash: await argon.hash("cuXxHR0dDXus5spN"),
                ic: "750301056180",
                firstName: "Yee Chern",
                lastName: "Hwang",
                dob: new Date("1975-03-01").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60139029841",
                emergencyNo: "+60197649175",
                emergencyRemarks: "mother",
                title: "Doctor",
                specialty: "OBGYN",
            }
        })
        // Add Doctor 5
        await this.prisma.employee.create({
            data: {
                email: "julianth0ng@bengclinic.com",
                hash: await argon.hash("33922.iridescent.Nightingale"),
                ic: "830517311843",
                firstName: "Julian",
                lastName: "Thong",
                dob: new Date("1983-05-17").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60130688606",
                emergencyNo: "+601102523140",
                emergencyRemarks: "spouse",
                title: "Doctor",
                specialty: "Dermatology",
            }
        })
        // Add Nurse 3
        await this.prisma.employee.create({
            data: {
                email: "mydadisrocky@bengclinic.com",
                hash: await argon.hash("Righteou$emergency-52505"),
                ic: "750124118920",
                firstName: "Sarah",
                lastName: "Stallone",
                dob: new Date("1975-01-24").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60167424970",
                emergencyNo: "+60126021180",
                emergencyRemarks: "father",
                title: "Nurse",
                specialty: "OBGYN",
            }
        })
        // Add Doctor 6
        await this.prisma.employee.create({
            data: {
                email: "crazyrichasian1@bengclinic.com",
                hash: await argon.hash("b3`[m7`DH"),
                ic: "670421479497",
                firstName: "Ken",
                lastName: "Jeong",
                dob: new Date("1967-04-21").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60148740440",
                emergencyNo: "+60128409033",
                emergencyRemarks: "spouse",
                title: "Doctor",
                specialty: null,
            }
        })

        // ===== APPOINTMENTS =====
        // Add Appointment 1
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 15 } },
                employeeId: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-08-01").toISOString(),
                reason: "routine checkup",
                completed: true,
            }
        })
        // Add Appointment 2
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 13 } },
                employeeId: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-08-10").toISOString(),
                reason: "routine checkup",
                completed: true,
            }
        })
        // Add Appointment 3
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 5 } },
                employeeId: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-08-14").toISOString(),
                reason: "shortness of breath; lightheadedness",
                completed: true,
            }
        })
        // Add Appointment 4
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 3 } },
                employeeId: { connect: { employeeId: 6 } },
                appointmentDateTime: new Date("2023-08-20").toISOString(),
                reason: "debilitating period pain",
                completed: true,
            }
        })
        // Add Appointment 5
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 14 } },
                employeeId: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-08-28").toISOString(),
                reason: "persistent stomachache",
                completed: true,
            }
        })
        // Add Appointment 6
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 2 } },
                employeeId: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-09-11").toISOString(),
                reason: "fever; headache",
                remarks: "failed to show up",
                completed: false,
            }
        })
        // Add Appointment 7
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 8 } },
                employeeId: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-09-13").toISOString(),
                reason: "excessive daytime fatigue; morning headaches; family tells of snoring",
                completed: true,
            }
        })
        // Add Appointment 8
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 7 } },
                employeeId: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-09-14").toISOString(),
                reason: "routine checkup",
                remarks: "medication regimen to be adjusted",
                completed: true,
            }
        })
        // Add Appointment 9
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 14 } },
                employeeId: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-09-22").toISOString(),
                reason: "persistent stomachache; diarrhoea",
                remarks: "possible need for further screening",
                completed: true,
            }
        })
        // Add Appointment 10
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 1 } },
                employeeId: { connect: { employeeId: 2 } },
                appointmentDateTime: new Date("2023-09-24").toISOString(),
                reason: "routine checkup",
                completed: true,
            }
        })
        // Add Appointment 11
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 4 } },
                employeeId: { connect: { employeeId: 4 } },
                appointmentDateTime: new Date("2023-09-26").toISOString(),
                reason: "groin pain; swollen scrotum",
                remarks: "HIGH PRIORITY",
                completed: true,
            }
        })
        // Add Appointment 12
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 12 } },
                employeeId: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-10-01").toISOString(),
                reason: "confusion; hallucinations; dizziness; vomiting; lack of appetite; severe headache",
                remarks: "pending referral to specialist",
                completed: true,
            }
        })
        // Add Appointment 13
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 1 } },
                employeeId: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-10-05").toISOString(),
                reason: "knee pain; joint stiffness",
                completed: true,
            }
        })
        // Add Appointment 14
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 11 } },
                employeeId: { connect: { employeeId: 7 } },
                appointmentDateTime: new Date("2023-10-18").toISOString(),
                reason: "monitoring of eczema",
                remarks: "referral provided by GP in Poliklinik Mah",
            }
        })
        // Add Appointment 15
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 10 } },
                employeeId: { connect: { employeeId: 2 } },
                appointmentDateTime: new Date("2023-11-20").toISOString(),
                reason: "check if fit for LASIK",
                remarks: "follow-up details to be provided closer to date; to refer to specialist ISEC",
            }
        })
        // Add Appointment 16
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 6 } },
                employeeId: { connect: { employeeId: 6 } },
                appointmentDateTime: new Date("2023-12-15").toISOString(),
                reason: "pregnancy test",
                remarks: "to discuss test results",
            }
        })
        // Add Appointment 17
        await this.prisma.appointment.create({
            data: {
                patientId: { connect: { patientId: 9 } },
                employeeId: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-12-20").toISOString(),
                reason: "lung screening",
            }
        })

        // ===== DIAGNOSES =====
        // Add Diagnosis 1
        await this.prisma.diagnosis.create({
            data: {
                appointmentId: { connect: { appointmentId: 2 } },
                icd: "G44.2",
                remarks: "Tension-type headache",
            }
        })
        // Add Diagnosis 2
        await this.prisma.diagnosis.create({
            data: {
                appointmentId: { connect: { appointmentId: 3 } },
                icd: "D50.9",
                symptoms: "arrythmia; shortness of breath; lightheadedness",
                remarks: "Iron deficiency anaemia (unspecified); prescribed Feratab",
            }
        })
        // Add Diagnosis 3
        await this.prisma.diagnosis.create({
            data: {
                appointmentId: { connect: { appointmentId: 4 } },
                icd: "N80.01",
                symptoms: "debilitating period pain",
                remarks: "Superficial endometriosis of uterus",
            }
        })
        // Add Diagnosis 4
        await this.prisma.diagnosis.create({
            data: {
                appointmentId: { connect: { appointmentId: 5 } },
                icd: "R10.84",
                symptoms: "pain in lower abdomen; loss of appetite",
                remarks: "Generalised abdominal and pelvic pain; PERSISTENT",
            }
        })
        // Add Diagnosis 5
        await this.prisma.diagnosis.create({
            data: {
                appointmentId: { connect: { appointmentId: 7 } },
                icd: "G47.3",
                symptoms: "excessive daytime fatigue; morning headaches; abnormally loud snoring",
                remarks: "Sleep apnoea",
            }
        })
        // Add Diagnosis 6
        await this.prisma.diagnosis.create({
            data: {
                appointmentId: { connect: { appointmentId: 9 } },
                icd: "K58.0",
                symptoms: "sporadic pain in lower abdomen; diarrhoea",
                remarks: "Irritable bowel syndrome with diarrhoea",
            }
        })
        // Add Diagnosis 7
        await this.prisma.diagnosis.create({
            data: {
                appointmentId: { connect: { appointmentId: 10 } },
                icd: "H52.223",
                symptoms: "difficulty seeing at night; blurred vision; sensitivity to light",
                remarks: "Bilateral astigmatism",
            }
        })
        // Add Diagnosis 8
        await this.prisma.diagnosis.create({
            data: {
                appointmentId: { connect: { appointmentId: 11 } },
                icd: "C62.12",
                remarks: "Malignant neoplasm of left testis (testicular cancer)",
            }
        })
        // Add Diagnosis 9
        await this.prisma.diagnosis.create({
            data: {
                appointmentId: { connect: { appointmentId: 12 } },
                icd: "B60.2",
                symptoms: "confusion; hallucinations; dizziness; vomiting; lack of appetite; severe headache",
                remarks: "Naegleriasis",
            }
        })
        // Add Diagnosis 10
        await this.prisma.diagnosis.create({
            data: {
                appointmentId: { connect: { appointmentId: 13 } },
                icd: "M17.0",
                symptoms: "knee pain on both sides",
                remarks: "Bilateral primary osteoarthritis of knee; patient requires physiotherapy",
            }
        })


        
    }
}