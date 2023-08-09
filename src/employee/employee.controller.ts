import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { Request } from 'express';
import { GetEmployeeInfo } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';

@UseGuards(JwtGuard)
@Controller('employees')
export class EmployeeController {
    constructor(private prisma: PrismaService) {}

    @Get('myinfo')
    getMyInfo(@GetEmployeeInfo() employee: Employee) {
        return employee;
    }

    @Get('doctors')
    getDoctors() {
        return this.prisma.employee.findMany({
            where: {
                title: 'Doctor',
            },
            select: {
                employeeId: true,
                firstName: true,
                lastName: true,
                specialty: true,
            }
        })
    }
}
