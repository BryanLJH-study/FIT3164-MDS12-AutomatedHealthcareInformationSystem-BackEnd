import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';

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

        // Save new employee in database
        const user = await this.prisma.employee.create({
            data: {
                email: 'joemama@gmail.com',
                hash,
                ic: '12345678',
                firstName: 'Joe',
                lastName: 'Ligma',
                dob: '2001-01-01',
                phoneNo: '016969420',
                title: 'Doctor',
                gender: 'male',
                nationality: 'Malaysian',
            }
        })

        // return the saved employee
        return user;
    }

    signin() {
        return { msg: 'Signed In'}
    }
}
