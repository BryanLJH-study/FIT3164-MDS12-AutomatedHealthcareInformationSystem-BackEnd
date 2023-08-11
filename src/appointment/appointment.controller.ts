import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { AppointmentService } from './appointment.service';
import { AddAppointmentDto } from './dto';

@UseGuards(JwtGuard)
@Controller('appointments')
export class AppointmentController {
    constructor(private appointmentService: AppointmentService) {}

    @Post()
    addAppointment(@Body() dto: AddAppointmentDto) {
        return this.appointmentService.addAppointment(dto);
    }
}
