import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private config: ConfigService,
    ) {}

    async signup(dto: AuthDto) {
        // Generate hash of password
        const hash = await argon.hash(dto.password);

        // Verify administrator code
        if (dto.adminCode != this.config.get('ADMIN_CODE')) {
            throw new ForbiddenException('Admin Code Incorrect');
        }
        
        try {
             // Save new employee in database
            const employee = await this.prisma.employee.create({
                data: {
                    email: dto.email,
                    hash,
                    ic: dto.ic,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    dob: new Date(dto.dob).toISOString(),
                    gender: dto.gender,
                    nationality: dto.nationality,
                    phoneNo: dto.phoneNo,
                    emergencyNo: dto.emergencyNo,
                    title: dto.title,
                    specialty: dto.specialty
                }
            })

            // return the saved employee
            delete employee.hash
            return employee;

        } catch (error) {
            // Throw ForbiddenException if unique criteria not followed
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException("Credentials Taken")
                }
            }
            throw error;
        }
    }

    signin() {
        return { msg: 'Signed In'}
    }
}
