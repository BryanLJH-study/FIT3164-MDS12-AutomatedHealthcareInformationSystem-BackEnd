import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { PatientService } from './patient.service';
import { AddPatientDto, EditPatientDto } from './dto';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('patients')
export class PatientController {
    constructor(private patientService: PatientService) {}

    @Get('all')
    getAllPatients() {
        return this.patientService.getAllPatients();
    }

    @Post('add')
    addPatient(@Body() dto: AddPatientDto) {
        return this.patientService.addPatient(dto);
    }

    @Patch('edit')
    editPatient(@Body() dto: EditPatientDto) {
        return this.patientService.editPatient(dto);
    }
}
