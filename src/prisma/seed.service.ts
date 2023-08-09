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
                gender: "male",
                nationality: "Malaysian",
                phoneNo: "1300888333",
                emergencyNo: "5552368",
                emergencyRemarks: "Tell my wife I love her very much",
                title: "Doctor",
                specialty: "Prostate",
            }
        })
    }
}