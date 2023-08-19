import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2';
import { Injectable } from "@nestjs/common";

@Injectable()
export class SeedService {
    constructor(private prisma: PrismaService) {}

    // Initializes Database Entries for Development
    async seedInitialData() {
        // Add Doctor 1
        await this.prisma.employee.create({
            data: {
                email: "JohnDoe@gmail.com",
                hash: await argon.hash("johndoe"),
                ic: "0123456789",
                firstName: "John",
                lastName: "Doe",
                dob: new Date("1889-04-20").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "0327806803",
                emergencyNo: "5552368",
                emergencyRemarks: "Tell my wife I love her very much",
                title: "Doctor",
                specialty: "Pediatric Care",
            }
        })

        // Add Doctor 2
        await this.prisma.employee.create({
            data: {
                email: "JaneDoe@gmail.com",
                hash: await argon.hash("janedoe"),
                ic: "9876543210",
                firstName: "Jane",
                lastName: "Doe",
                dob: new Date("1960-04-20").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "0376272929",
                emergencyNo: "5552368",
                emergencyRemarks: "She knows...",
                title: "Doctor",
                specialty: "Gynaecology",
            }
        })

        // Add Doctor 3
        await this.prisma.employee.create({
            data: {
                email: "YuHan@gmail.com",
                hash: await argon.hash("yuhan"),
                ic: "6969696969",
                firstName: "Yu",
                lastName: "Han",
                dob: new Date("1921-01-27").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "888888888888",
                emergencyNo: "5552368",
                emergencyRemarks: "Pai se",
                title: "Doctor",
                specialty: "Prostate",
            }
        })

        // Add Doctor 4
        await this.prisma.employee.create({
            data: {
                email: "JulianThong@gmail.com",
                hash: await argon.hash("julianthong"),
                ic: "420420420",
                firstName: "Julian",
                lastName: "Thong",
                dob: new Date("1969-05-04").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "22413123123",
                emergencyNo: "5552368",
                emergencyRemarks: "Pai se",
                title: "Doctor",
                specialty: "Urology",
            }
        })

        // Add Nurse 1
        await this.prisma.employee.create({
            data: {
                email: "FlorenceNightingale@gmail.com",
                hash: await argon.hash("florencenightingale"),
                ic: "6969420",
                firstName: "Florence",
                lastName: "Nightingale",
                dob: new Date("1820-05-12").toISOString(),
                gender: "Female",
                nationality: "Italian",
                phoneNo: "1300888333",
                emergencyNo: "5552368",
                emergencyRemarks: "Cocaine is a hellava drug",
                title: "Nurse",
                specialty: "Oncology",
            }
        })

        // Add Patient
        await this.prisma.patient.create({
            data: {
                ic: "123123123",
                firstName: "Mary",
                lastName: "Sue",
                dob: new Date("2000-01-01").toISOString(),
                gender: "Female",
                nationality: "British",
                phoneNo: "34234346756",
                email: "MarySue@gmail.com",
                emergencyNo: "5552368",
                emergencyRemarks: "Delete my browser history",
            }
        })

         // Add Patient
         await this.prisma.patient.create({
            data: {
                ic: "20092011",
                firstName: "Muammar",
                lastName: "Gaddafi",
                dob: new Date("1942-06-07").toISOString(),
                gender: "Male",
                nationality: "Libyian",
                phoneNo: "0326939366",
                email: "MuammarGaddafi@gmail.com",
                emergencyNo: "5552368",
                emergencyRemarks: "The Preamble of the Charter states that armed force shall not be used, save in the common interest",
            }
        })

        // Add Patient
        await this.prisma.patient.create({
            data: {
                ic: "13091996",
                firstName: "Tupac",
                lastName: "Shakur",
                dob: new Date("1971-06-16").toISOString(),
                gender: "Male",
                nationality: "American",
                phoneNo: "3239603500",
                email: "TupacShakur@gmail.com",
                emergencyNo: "5552368",
                emergencyRemarks: "YOLO",
            }
        })

        // Add Patient
        await this.prisma.patient.create({
            data: {
                ic: "0327876005",
                firstName: "Bryan",
                lastName: "Lean",
                dob: new Date("1954-04-11").toISOString(),
                gender: "Male",
                nationality: "Sentinalese",
                phoneNo: "1800180066",
                email: "BryanLean@gmail.com",
                emergencyNo: "2484345508",
                emergencyRemarks: "Call an ambulance, call an ambulance...",
            }
        })

        // Add Patient
        await this.prisma.patient.create({
            data: {
                ic: "8589240180",
                firstName: "Ian",
                lastName: "Oong",
                dob: new Date("1945-05-08").toISOString(),
                gender: "Male",
                nationality: "Zimbabwean",
                phoneNo: "5055034455",
                email: "IanOong@gmail.com",
                emergencyNo: "5552368",
                emergencyRemarks: "According to all known laws of aviation, a bee should not be able to fly...",
            }
        })

        // Add Appointment
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 2 } },                  // Connect the patient
                employee: { connect: { employeeId: 2 } },                // Connect the employee
                appointmentDateTime: new Date('2023-10-05').toISOString(),
                reason: "Nothing in particular",
                remarks: "Ya'll got summa dat?",
            }
        })

        // Add Appointment
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 4 } },                  // Connect the patient
                employee: { connect: { employeeId: 3 } },                // Connect the employee
                appointmentDateTime: new Date('2023-11-06').toISOString(),
                reason: "It's a bit itchy",
                remarks: "Is it bad doc?",
            }
        })

        // Add Appointment
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 5 } },                  // Connect the patient
                employee: { connect: { employeeId: 4 } },                // Connect the employee
                appointmentDateTime: new Date('2024-01-05').toISOString(),
                reason: "Oh the pain, the pain, so pain...",
                remarks: "Need oxycontin, for pain...",
            }
        })

        // Add Appointment
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 4 } },                  // Connect the patient
                employee: { connect: { employeeId: 4 } },                // Connect the employee
                appointmentDateTime: new Date('2023-12-05').toISOString(),
                reason: "It hurts when I do this",
                remarks: "What's a ligma?",
            }
        })

         // Add Appointment
         await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 5 } },                  // Connect the patient
                employee: { connect: { employeeId: 3 } },                // Connect the employee
                appointmentDateTime: new Date('2023-11-05').toISOString(),
                reason: "Help me with deez",
                remarks: "Got'em",
            }
        })

        // Add Diagnosis
        await this.prisma.diagnosis.create({
            data: {
                appointment: {connect: {appointmentId: 2}},
                icd: 'W53',
                symptoms: 'Patient can be puppeteered through scalp',
                remarks: 'Patient has seemingly found the joy of cooking',
            }
        })

        await this.prisma.diagnosis.create({
            data: {
                appointment: {connect: {appointmentId: 2}},
                icd: 'B20',
                symptoms: 'Bad, really bad',
                remarks: 'Terminal',
            }
        })

        await this.prisma.diagnosis.create({
            data: {
                appointment: {connect: {appointmentId: 4}},
                icd: 'F20',
                symptoms: 'Hallucination, Dellusions of Grandeur',
                remarks: 'He keeps asking who is Joe',
            }
        })

        await this.prisma.diagnosis.create({
            data: {
                appointment: {connect: {appointmentId: 3}},
                icd: 'F14',
                symptoms: 'Hopeless addiction',
                remarks: 'Damn druggie',
            }
        })

        await this.prisma.diagnosis.create({
            data: {
                appointment: {connect: {appointmentId: 5}},
                icd: 'F95',
                symptoms: 'Vocal Ticks',
                remarks: 'Something about nuts?',
            }
        })


    }

   
}