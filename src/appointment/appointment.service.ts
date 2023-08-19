import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddAppointmentDto } from './dto';

@Injectable()
export class AppointmentService {
    constructor(private prisma: PrismaService) { }

    async addAppointment(dto: AddAppointmentDto) {
        // get patient by patientId
        const patient = await this.prisma.patient.findUnique({
            where: {
                patientId: dto.patientId,
            }
        })

        // check if patient exists
        if (!patient) {
            throw new NotFoundException('patientId does not exist')
        }

        // get employee by employeeId
        const employee = await this.prisma.employee.findUnique({
            where: {
                employeeId: dto.employeeId,
            }
        })

        // check if patient exists
        if (!employee) {
            throw new NotFoundException('employeeId does not exist');
        }

        // Add appointment
        try {
            const appointment = await this.prisma.appointment.create({
                data: {
                    patient: { connect: { patientId: dto.patientId } },                  // Connect the patient
                    employee: { connect: { employeeId: dto.employeeId } },               // Connect the employee
                    appointmentDateTime: new Date(dto.appointmentDateTime).toISOString(),
                    reason: dto.reason,
                    remarks: dto.remarks,
                    completed: dto.completed,
                    // previousAppointment: { connect: { previousAppointmentId: dto.previousAppointmentId } } // Connect the previous appointment
                }
            });

            return appointment;

        } catch (error) {
            throw error;
        }
    }
}
