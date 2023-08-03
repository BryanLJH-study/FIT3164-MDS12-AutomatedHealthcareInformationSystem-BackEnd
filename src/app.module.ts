import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [AuthModule, EmployeeModule, PatientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
