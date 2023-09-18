import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../../src/app.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthSignInDto, AuthSignUpDto } from 'src/auth/dto';
import * as pactum from 'pactum';

describe('App integration', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      })
    )

    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();

    pactum.request.setBaseUrl('http://localhost:3333');
  });

  afterAll(() => {
    app.close();
  });
  
  describe('Auth', () => {
    it.todo("Auth tests")
  });

  describe('Employee', () => {
    it.todo("Employee tests")
  });

  describe('Patient', () => {
    it.todo("Patient tests")
  });

  describe('Appointment', () => {
    it.todo(" Appointment tests")
  });
  
  describe('Diagnosis', () => {
    it.todo("Diagnosis tests")
  });

});
