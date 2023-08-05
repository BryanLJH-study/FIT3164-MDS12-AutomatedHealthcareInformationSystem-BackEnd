import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { Request } from 'express';
import { GetEmployeeInfo } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('employees')
export class EmployeeController {
    @Get('myinfo')
    getMyInfo(@GetEmployeeInfo() employee: Employee) {
        return employee;
    }
}
