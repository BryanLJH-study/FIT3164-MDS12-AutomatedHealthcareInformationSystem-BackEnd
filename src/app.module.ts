import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { PatientModule } from './patient/patient.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CommandModule } from 'nestjs-command';
import { SeedCommmand } from './prisma/seed.command';
import { SeedService } from './prisma/seed.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule, 
    EmployeeModule, 
    PatientModule, 
    PrismaModule,
    CommandModule,
  ],
  controllers: [],
  providers: [SeedCommmand, SeedService],
})

export class AppModule {}
