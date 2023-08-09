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
                specialty: "Prostate",
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
    }

   
}