import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2';
import { Injectable } from "@nestjs/common";

@Injectable()
export class SeedService {
    constructor(private prisma: PrismaService) { }

    // Initializes Database Entries for Development
    async seedInitialData() {
        await this.prisma.cleanDb();

        // ===== EMPLOYEES =====
        // Add Doctor 1
        await this.prisma.employee.create({
            data: {
                email: "JohnDoe@gmail.com",
                hash: await argon.hash("johndoe"),
                ic: "790723398417",
                firstName: "John",
                lastName: "Doe",
                dob: new Date("1979-07-23").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60165694479",
                emergencyNo: "+60106828940",
                emergencyRemarks: "sibling",
                title: "Doctor",
                specialty: "Pediatrics",
            }
        })
        // Add Doctor 2
        await this.prisma.employee.create({
            data: {
                email: "ivycheowyn@bengclinic.com",
                hash: await argon.hash("ax<2F5GSja~?B{N;SXy"),
                ic: "791107252304",
                firstName: "Ivy",
                lastName: "Cheow",
                dob: new Date("1979-11-07").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60143251479",
                emergencyNo: "+60192879462",
                emergencyRemarks: "parent",
                title: "Doctor",
                specialty: "Ophthalmology",
            }
        })
        // Add Nurse 1
        await this.prisma.employee.create({
            data: {
                email: "zfaridahz@bengclinic.com",
                hash: await argon.hash("57:qs~F;Ut:v^gkPzkY>jVpGt2xa"),
                ic: "780615088898",
                firstName: "Faridah",
                lastName: "binti Zakariah",
                dob: new Date("1978-06-15").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60125552562",
                emergencyNo: "+60103723319",
                emergencyRemarks: "father",
                title: "Nurse",
                specialty: null,
            }
        })
        // Add Doctor 3
        await this.prisma.employee.create({
            data: {
                email: "eeian@icloud.com",
                hash: await argon.hash("mementoVivere681002"),
                ic: "701003242151",
                firstName: "Ian",
                lastName: "Ong",
                dob: new Date("1970-10-03").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60182826326",
                emergencyNo: "+60195642794",
                emergencyRemarks: "mother",
                title: "Doctor",
                specialty: "Urology",
            }
        })
        // Add Nurse 2
        await this.prisma.employee.create({
            data: {
                email: "chewyuhan2048@bengclinic.com",
                hash: await argon.hash("61frightened=moustache"),
                ic: "550125179275",
                firstName: "Yu Han",
                lastName: "Chew",
                dob: new Date("1955-01-25").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60106264290",
                emergencyNo: "+60194721426",
                emergencyRemarks: "spouse",
                title: "Nurse",
                specialty: null,
            }
        })
        // Add Doctor 4
        await this.prisma.employee.create({
            data: {
                email: "doctorhwang9@bengclinic.com",
                hash: await argon.hash("cuXxHR0dDXus5spN"),
                ic: "750301056180",
                firstName: "Yee Chern",
                lastName: "Hwang",
                dob: new Date("1975-03-01").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60139029841",
                emergencyNo: "+60197649175",
                emergencyRemarks: "mother",
                title: "Doctor",
                specialty: "OBGYN",
            }
        })
        // Add Doctor 5
        await this.prisma.employee.create({
            data: {
                email: "julianth0ng@bengclinic.com",
                hash: await argon.hash("33922.iridescent.Nightingale"),
                ic: "830517311843",
                firstName: "Julian",
                lastName: "Thong",
                dob: new Date("1983-05-17").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60130688606",
                emergencyNo: "+601102523140",
                emergencyRemarks: "spouse",
                title: "Doctor",
                specialty: "Dermatology",
            }
        })
        // Add Nurse 3
        await this.prisma.employee.create({
            data: {
                email: "mydadisrocky@bengclinic.com",
                hash: await argon.hash("Righteou$emergency-52505"),
                ic: "750124118920",
                firstName: "Sarah",
                lastName: "Stallone",
                dob: new Date("1975-01-24").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60167424970",
                emergencyNo: "+60126021180",
                emergencyRemarks: "father",
                title: "Nurse",
                specialty: "OBGYN",
            }
        })
        // Add Doctor 6
        await this.prisma.employee.create({
            data: {
                email: "crazyrichasian1@bengclinic.com",
                hash: await argon.hash("b3`[m7`DH"),
                ic: "670421479497",
                firstName: "Ken",
                lastName: "Jeong",
                dob: new Date("1967-04-21").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60148740440",
                emergencyNo: "+60128409033",
                emergencyRemarks: "spouse",
                title: "Doctor",
                specialty: null,
            }
        })

        // ===== PATIENTS =====
        // Add Patient 1
        await this.prisma.patient.create({
            data: {
                ic: "391026276963",
                firstName: "Guan Eng",
                lastName: "Lim",
                dob: new Date("1939-10-26").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60142702309",
                email: "penangonebetter@aol.com",
                emergencyNo: "+60174236470",
                emergencyRemarks: "spouse",
                remarks: "pancreatic cancer in remission",
                createdAt: new Date("2023-08-01").toISOString(),
            }
        })
        // Add Patient 2
        await this.prisma.patient.create({
            data: {
                ic: "380606361666",
                firstName: "Yui",
                lastName: "Horie",
                dob: new Date("1938-06-06").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60198056369",
                email: "perfectslumbers@protonmail.com",
                emergencyNo: "+601184774452",
                emergencyRemarks: "grandchild",
                remarks: "appendectomy done in 2005",
                createdAt: new Date("2023-08-01").toISOString(),

            }
        })
        // Add Patient 3
        await this.prisma.patient.create({
            data: {
                ic: "740916101848",
                firstName: "Hanifa",
                lastName: "binti Kasim",
                dob: new Date("1974-09-16").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60164795379",
                email: "hanifakasim@outlook.com",
                emergencyNo: "+601170735766",
                emergencyRemarks: "spouse",
                remarks: "obese as of Feb 2015",
                createdAt: new Date("2023-08-01").toISOString(),

            }
        })
        // Add Patient 4
        await this.prisma.patient.create({
            data: {
                ic: "361202098903",
                firstName: "Teddy",
                lastName: "Roosevelt",
                dob: new Date("1936-12-02").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60125739047",
                email: "firesidetalks@gmail.com",
                emergencyNo: "+601115546099",
                emergencyRemarks: "spouse",
                remarks: "type 2 diabetic",
                createdAt: new Date("2023-08-01").toISOString(),

            }
        })
        // Add Patient 5
        await this.prisma.patient.create({
            data: {
                ic: "630806127135",
                firstName: "Wei Hou",
                lastName: "Lee",
                dob: new Date("1963-08-06").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601134635120",
                email: "aaronleewh@gmail.com",
                emergencyNo: "+601172402354",
                emergencyRemarks: "son",
                remarks: "vegetarian",
                createdAt: new Date("2023-08-09").toISOString(),

            }
        })
        // Add Patient 6
        await this.prisma.patient.create({
            data: {
                ic: "920512114412",
                firstName: "Connie",
                lastName: "Lim",
                dob: new Date("1992-05-12").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601150492071",
                email: "connieooi@gmail.com",
                emergencyNo: "+60107141701",
                emergencyRemarks: "sibling",
                remarks: null,
                createdAt: new Date("2023-08-09").toISOString(),

            }
        })
        // Add Patient 7
        await this.prisma.patient.create({
            data: {
                ic: "670416099419",
                firstName: "Kazuhiko",
                lastName: "Nagata",
                dob: new Date("1967-04-16").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601155570101",
                email: "smokeynagata@gmail.com",
                emergencyNo: "+601131482288",
                emergencyRemarks: "spouse",
                remarks: null,
                createdAt: new Date("2023-08-09").toISOString(),

            }
        })
        // Add Patient 8
        await this.prisma.patient.create({
            data: {
                ic: "690213474423",
                firstName: "Mahathir",
                lastName: "Mohammad",
                dob: new Date("1969-02-13").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601198920907",
                email: "fourthprimeminister@icloud.com",
                emergencyNo: "+60107645318",
                emergencyRemarks: "spouse",
                remarks: null,
                createdAt: new Date("2023-08-17").toISOString(),

            }
        })
        // Add Patient 9
        await this.prisma.patient.create({
            data: {
                ic: "920505381332",
                firstName: "Sofia",
                lastName: "Vergara",
                dob: new Date("1992-05-05").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601176419991",
                email: "misscolombia@yahoo.com",
                emergencyNo: "+601165347790",
                emergencyRemarks: "mother",
                remarks: null,
                createdAt: new Date("2023-08-17").toISOString(),

            }
        })
        // Add Patient 10
        await this.prisma.patient.create({
            data: {
                ic: "510811463659",
                firstName: "Kumail",
                lastName: "A/L Nanjiani",
                dob: new Date("1951-08-11").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60187387145",
                email: "kumailnanjiani@yahoo.com",
                emergencyNo: "+601153522313",
                emergencyRemarks: "spouse",
                remarks: null,
                createdAt: new Date("2023-08-17").toISOString(),

            }
        })
        // Add Patient 11
        await this.prisma.patient.create({
            data: {
                ic: "650317513634",
                firstName: "Priyanka",
                lastName: "Chopra",
                dob: new Date("1965-03-17").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601178024146",
                email: "priyanka.c@gmail.com",
                emergencyNo: "+601155513508",
                emergencyRemarks: "grandchild",
                remarks: null,
                createdAt: new Date("2023-09-07").toISOString(),

            }
        })
        // Add Patient 12
        await this.prisma.patient.create({
            data: {
                ic: "850103395435",
                firstName: "Eu Zin",
                lastName: "Fong",
                dob: new Date("1985-01-03").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601164706256",
                email: "ren.easy@outlook.com",
                emergencyNo: "+60132000782",
                emergencyRemarks: "spouse",
                remarks: null,
                createdAt: new Date("2023-09-07").toISOString(),

            }
        })
        // Add Patient 13
        await this.prisma.patient.create({
            data: {
                ic: "801203512760",
                firstName: "Bingbing",
                lastName: "Fan",
                dob: new Date("1980-12-03").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60147534239",
                email: "iceicebaby@gmail.com",
                emergencyNo: "+601166785366",
                emergencyRemarks: "spouse",
                remarks: null,
                createdAt: new Date("2023-09-07").toISOString(),

            }
        })
        // Add Patient 14
        await this.prisma.patient.create({
            data: {
                ic: "480111255618",
                firstName: "Nicol",
                lastName: "Ann David",
                dob: new Date("1948-01-11").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601113881488",
                email: "nicol.squash@gmail.com",
                emergencyNo: "+60160177896",
                emergencyRemarks: "daughter",
                remarks: "known IBS",
                createdAt: new Date("2023-09-07").toISOString(),

            }
        })
        // Add Patient 15
        await this.prisma.patient.create({
            data: {
                ic: "471002507444",
                firstName: "Anitha",
                lastName: "A/P Krishnan",
                dob: new Date("1947-10-02").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601147550645",
                email: "anithaone@gmail.com",
                emergencyNo: "+60192242830",
                emergencyRemarks: "son",
                remarks: "stroke in 2023",
                createdAt: new Date("2023-10-07").toISOString(),
            }
        })
        // Add Patient 16
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-12 20:13").toISOString(),
                ic: "971030084440",
                firstName: "Ava",
                lastName: "Maria",
                dob: new Date("1997-10-30").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601194126618",
                email: "christmastime@icloud.com",
                emergencyNo: "+60173394784",
                emergencyRemarks: "mother",
                remarks: null,
            }
        })
        // Add Patient 17
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-14 13:46").toISOString(),
                ic: "470526529353",
                firstName: "Chun Kai",
                lastName: "Lim",
                dob: new Date("1947-05-26").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601128703140",
                email: "cklim99@icloud.com",
                emergencyNo: "+60123706845",
                emergencyRemarks: "son",
                remarks: "history of hypertension",
            }
        })
        // Add Patient 18
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-22 19:13").toISOString(),
                ic: "840422475019",
                firstName: "Manfred",
                lastName: "Gan",
                dob: new Date("1984-04-22").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60120603234",
                email: "manfredwhye@outlook.com",
                emergencyNo: "+60133246718",
                emergencyRemarks: "father",
                remarks: "asthmatic",
            }
        })
        // Add Patient 19
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-11 20:42").toISOString(),
                ic: "851211285986",
                firstName: "Olivia",
                lastName: "Wilde",
                dob: new Date("1985-12-11").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601120419370",
                email: "oliviawildest@gmail.com",
                emergencyNo: "+60162363663",
                emergencyRemarks: "spouse",
                remarks: "history of hypertension",
            }
        })
        // Add Patient 20
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-22 16:29").toISOString(),
                ic: "040422166964",
                firstName: "Hui Min",
                lastName: "Lim",
                dob: new Date("2004-04-22").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60170850615",
                email: "limhuimin990612@gmail.com",
                emergencyNo: "+601113146805",
                emergencyRemarks: "mother",
                remarks: null,
            }
        })
        // Add Patient 21
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-09 15:30").toISOString(),
                ic: "041012018661",
                firstName: "Hao Feng",
                lastName: "Chuah",
                dob: new Date("2004-10-12").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60190401276",
                email: "chuahhf@protonmail.com",
                emergencyNo: "+60147321132",
                emergencyRemarks: "father",
                remarks: "family history of parkinson's",
            }
        })
        // Add Patient 22
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-18 12:32").toISOString(),
                ic: "990905366521",
                firstName: "Obi-Wan",
                lastName: "Kenobi",
                dob: new Date("1999-09-05").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+60134594632",
                email: "kenobi@yahoo.com",
                emergencyNo: "+60101903096",
                emergencyRemarks: "grandparent",
                remarks: "stomach stab wound observed",
            }
        })
        // Add Patient 23
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-13 17:22").toISOString(),
                ic: "780122503072",
                firstName: "Le Shin",
                lastName: "Lim",
                dob: new Date("1978-01-22").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+601194444869",
                email: "chiaroscuro@gmail.com",
                emergencyNo: "+60179411834",
                emergencyRemarks: "father",
                remarks: null,
            }
        })
        // Add Patient 24
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-11-05 13:27").toISOString(),
                ic: "990416461848",
                firstName: "Billie",
                lastName: "Eilish",
                dob: new Date("1999-04-16").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60187518158",
                email: "b.eilish@hotmail.com",
                emergencyNo: "+601156623152",
                emergencyRemarks: "guardian",
                remarks: null,
            }
        })
        // Add Patient 25
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-20 10:30").toISOString(),
                ic: "640930562346",
                firstName: "Mulan",
                lastName: "Hua",
                dob: new Date("1964-09-30").toISOString(),
                gender: "Female",
                nationality: "Malaysian",
                phoneNo: "+60131122326",
                email: "iamagirl@qq.com",
                emergencyNo: "+601183871084",
                emergencyRemarks: "spouse",
                remarks: "vegetarian",
            }
        })
        // Add Patient 26
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-21 16:30").toISOString(),
                ic: "260816546805",
                firstName: "Mao",
                lastName: "Zedong",
                dob: new Date("1926-08-16").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601131905566",
                email: "chairman.mao@gmail.com",
                emergencyNo: "+60179012246",
                emergencyRemarks: "spouse",
                remarks: "alzheimer's",
            }
        })
        // Add Patient 27
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-22 19:58").toISOString(),
                ic: "720714077639",
                firstName: "Jimmy",
                lastName: "Choo",
                dob: new Date("1972-07-14").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601166428788",
                email: "shoeguy@gmail.com",
                emergencyNo: "+601194215328",
                emergencyRemarks: "mother",
                remarks: "history of depression",
            }
        })
        // Add Patient 28
        await this.prisma.patient.create({
            data: {
                createdAt: new Date("2023-10-11 18:53").toISOString(),
                ic: "950211481637",
                firstName: "Hakimi Yusof",
                lastName: "bin Tayoub",
                dob: new Date("1995-02-11").toISOString(),
                gender: "Male",
                nationality: "Malaysian",
                phoneNo: "+601165318446",
                email: "hakimiyusoftayoub@qq.com",
                emergencyNo: "+60109597538",
                emergencyRemarks: "spouse",
                remarks: "history of migraines",
            }
        })


        // ===== APPOINTMENTS =====
        // Add Appointment 1
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 15 } },
                employee: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-08-01 15:40").toISOString(),
                reason: "routine checkup",
                completed: true,
            }
        })
        // Add Appointment 2
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 13 } },
                employee: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-08-10 16:40").toISOString(),
                reason: "routine checkup",
                completed: true,
            }
        })
        // Add Appointment 3
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 5 } },
                employee: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-08-14 12:20").toISOString(),
                reason: "shortness of breath; lightheadedness",
                completed: true,
            }
        })
        // Add Appointment 4
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 3 } },
                employee: { connect: { employeeId: 6 } },
                appointmentDateTime: new Date("2023-08-20 16:40").toISOString(),
                reason: "debilitating period pain",
                completed: true,
            }
        })
        // Add Appointment 5
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 14 } },
                employee: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-08-28 15:20").toISOString(),
                reason: "persistent stomachache",
                completed: true,
            }
        })
        // Add Appointment 6
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 2 } },
                employee: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-09-11 16:00").toISOString(),
                reason: "fever; headache",
                remarks: "failed to show up",
                completed: false,
            }
        })
        // Add Appointment 7
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 8 } },
                employee: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-09-13 11:40").toISOString(),
                reason: "excessive daytime fatigue; morning headaches; family tells of snoring",
                completed: true,
            }
        })
        // Add Appointment 8
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 7 } },
                employee: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-09-14 10:20").toISOString(),
                reason: "routine checkup",
                remarks: "medication regimen to be adjusted",
                completed: true,
            }
        })
        // Add Appointment 9
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 14 } },
                employee: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-09-22 11:40").toISOString(),
                reason: "persistent stomachache; diarrhoea",
                remarks: "possible need for further screening",
                completed: true,
            }
        })
        // Add Appointment 10
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 1 } },
                employee: { connect: { employeeId: 2 } },
                appointmentDateTime: new Date("2023-09-24 12:00").toISOString(),
                reason: "routine checkup",
                completed: true,
            }
        })
        // Add Appointment 11
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 4 } },
                employee: { connect: { employeeId: 4 } },
                appointmentDateTime: new Date("2023-09-26 16:40").toISOString(),
                reason: "groin pain; swollen scrotum",
                remarks: "HIGH PRIORITY",
                completed: true,
            }
        })
        // Add Appointment 12
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 12 } },
                employee: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-10-01 12:20").toISOString(),
                reason: "confusion; hallucinations; dizziness; vomiting; lack of appetite; severe headache",
                remarks: "pending referral to specialist",
                completed: true,
            }
        })
        // Add Appointment 13
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 1 } },
                employee: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-10-05 11:40").toISOString(),
                reason: "knee pain; joint stiffness",
                completed: true,
            }
        })
        // Add Appointment 14
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 11 } },
                employee: { connect: { employeeId: 7 } },
                appointmentDateTime: new Date("2023-10-18 10:20").toISOString(),
                reason: "monitoring of eczema",
                remarks: "referral provided by GP in Poliklinik Mah",
            }
        })
        // Add Appointment 15
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 10 } },
                employee: { connect: { employeeId: 2 } },
                appointmentDateTime: new Date("2023-11-20 13:20").toISOString(),
                reason: "check if fit for LASIK",
                remarks: "follow-up details to be provided closer to date; to refer to specialist ISEC",
            }
        })
        // Add Appointment 16
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 6 } },
                employee: { connect: { employeeId: 6 } },
                appointmentDateTime: new Date("2023-12-15 12:40").toISOString(),
                reason: "pregnancy test",
                remarks: "to discuss test results",
            }
        })
        // Add Appointment 17
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 9 } },
                employee: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-12-20 14:00").toISOString(),
                reason: "lung screening",
            }
        })
        // Add Appointment 18
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 16 } },
                employee: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-01-17 14:00").toISOString(),
                reason: "persistent hiccups",
                remarks: "may need referral to gastroenterologist",
                completed: true,
            }
        })
        // Add Appointment 19
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 17 } },
                employee: { connect: { employeeId: 4 } },
                appointmentDateTime: new Date("2023-01-25 10:00").toISOString(),
                reason: "frequent urination at night",
                completed: true,
            }
        })
        // Add Appointment 20
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 16 } },
                employee: { connect: { employeeId: 2 } },
                appointmentDateTime: new Date("2023-02-01 10:00").toISOString(),
                reason: "difficulty seeing at night",
                completed: true,
            }
        })
        // Add Appointment 21
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 18 } },
                employee: { connect: { employeeId: 7 } },
                appointmentDateTime: new Date("2023-02-02 10:00").toISOString(),
                reason: "skin rash develops when exposed to sunlight",
                completed: true,
            }
        })
        // Add Appointment 22
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 19 } },
                employee: { connect: { employeeId: 6 } },
                appointmentDateTime: new Date("2023-02-21 10:00").toISOString(),
                reason: "pregnancy checkup",
                completed: true,
            }
        })
        // Add Appointment 23
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 26 } },
                employee: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-03-24 10:00").toISOString(),
                reason: "chest pain and shortness of breath",
                completed: true,
            }
        })
        // Add Appointment 24
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 24 } },
                employee: { connect: { employeeId: 6 } },
                appointmentDateTime: new Date("2023-03-27 14:00").toISOString(),
                reason: "irregular menstruation",
                completed: true,
            }
        })
        // Add Appointment 25
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 27 } },
                employee: { connect: { employeeId: 4 } },
                appointmentDateTime: new Date("2023-04-25 14:00").toISOString(),
                reason: "difficulty urinating",
                completed: true,
            }
        })
        // Add Appointment 26
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 20 } },
                employee: { connect: { employeeId: 2 } },
                appointmentDateTime: new Date("2023-05-16 14:00").toISOString(),
                reason: "eye redness and itching",
                completed: true,
            }
        })
        // Add Appointment 27
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 18 } },
                employee: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-06-23 16:00").toISOString(),
                reason: "routine checkup",
                completed: true,
            }
        })
        // Add Appointment 28
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 23 } },
                employee: { connect: { employeeId: 6 } },
                appointmentDateTime: new Date("2023-07-03 10:00").toISOString(),
                reason: "infertility",
                completed: true,
            }
        })
        // Add Appointment 29
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 22 } },
                employee: { connect: { employeeId: 7 } },
                appointmentDateTime: new Date("2023-08-04 14:00").toISOString(),
                reason: "severe acne",
                completed: true,
            }
        })
        // Add Appointment 30
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 24 } },
                employee: { connect: { employeeId: 2 } },
                appointmentDateTime: new Date("2023-08-06 15:00").toISOString(),
                reason: "difficulty seeing at night; blurry vision",
                completed: true,
            }
        })
        // Add Appointment 31
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 28 } },
                employee: { connect: { employeeId: 7 } },
                appointmentDateTime: new Date("2023-08-07 14:00").toISOString(),
                reason: "severe acne",
                completed: true,
            }
        })
        // Add Appointment 32
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 25 } },
                employee: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-08-23 16:00").toISOString(),
                reason: "stomach cramps and has lump; fever and nausea",
                completed: true,
            }
        })
        // Add Appointment 33
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 26 } },
                employee: { connect: { employeeId: 4 } },
                appointmentDateTime: new Date("2023-08-23 10:00").toISOString(),
                reason: "blood in urine",
                completed: true,
            }
        })
        // Add Appointment 34
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 25 } },
                employee: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-09-16 10:00").toISOString(),
                reason: "lump in stomach; jaundice",
                remarks: "pending referral to external gastroenterologist",
                completed: true,
            }
        })
        // Add Appointment 35
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 17 } },
                employee: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-09-20 11:00").toISOString(),
                reason: "high blood pressure",
                completed: true,
            }
        })
        // Add Appointment 36
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 20 } },
                employee: { connect: { employeeId: 6 } },
                appointmentDateTime: new Date("2023-09-25 14:00").toISOString(),
                reason: "vaginal bleeding",
                completed: true,
            }
        })
        // Add Appointment 37
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 1 } },
                employee: { connect: { employeeId: 2 } },
                appointmentDateTime: new Date("2023-11-27 13:30").toISOString(),
                reason: "routine vision checkup",
            }
        })
        // Add Appointment 38
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 21 } },
                employee: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-10-07 10:00").toISOString(),
                reason: "severe headaches & seizures",
                remarks: "to transfer to neurologist Dr. K",
                completed: true,
            }
        })
        // Add Appointment 39
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 23 } },
                employee: { connect: { employeeId: 1 } },
                appointmentDateTime: new Date("2023-11-12 10:00").toISOString(),
                reason: "routine checkup",
                remarks: "patient requests for blood test",
            }
        })
        // Add Appointment 40
        await this.prisma.appointment.create({
            data: {
                patient: { connect: { patientId: 2 } },
                employee: { connect: { employeeId: 9 } },
                appointmentDateTime: new Date("2023-10-27 13:30").toISOString(),
                reason: "influenza vaccination",
                completed: true,
            }
        })

        // ===== DIAGNOSES =====
        // Add Diagnosis 1
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 2 } },
                icd: "G44.2",
                remarks: "Tension-type headache",
            }
        })
        // Add Diagnosis 2
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 3 } },
                icd: "D50.9",
                symptoms: "arrythmia; shortness of breath; lightheadedness",
                remarks: "Iron deficiency anaemia (unspecified); prescribed Feratab",
            }
        })
        // Add Diagnosis 3
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 4 } },
                icd: "N80.01",
                symptoms: "debilitating period pain",
                remarks: "Superficial endometriosis of uterus",
            }
        })
        // Add Diagnosis 4
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 5 } },
                icd: "R10.84",
                symptoms: "pain in lower abdomen; loss of appetite",
                remarks: "Generalised abdominal and pelvic pain; PERSISTENT",
            }
        })
        // Add Diagnosis 5
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 7 } },
                icd: "G47.3",
                symptoms: "excessive daytime fatigue; morning headaches; abnormally loud snoring",
                remarks: "Sleep apnoea",
            }
        })
        // Add Diagnosis 6
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 9 } },
                icd: "K58.0",
                symptoms: "sporadic pain in lower abdomen; diarrhoea",
                remarks: "Irritable bowel syndrome with diarrhoea",
            }
        })
        // Add Diagnosis 7
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 10 } },
                icd: "H52.223",
                symptoms: "difficulty seeing at night; blurred vision; sensitivity to light",
                remarks: "Bilateral astigmatism",
            }
        })
        // Add Diagnosis 8
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 11 } },
                icd: "C62.12",
                remarks: "Malignant neoplasm of left testis (testicular cancer)",
            }
        })
        // Add Diagnosis 9
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 12 } },
                icd: "B60.2",
                symptoms: "confusion; hallucinations; dizziness; vomiting; lack of appetite; severe headache",
                remarks: "Naegleriasis",
            }
        })
        // Add Diagnosis 10
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 13 } },
                icd: "M17.0",
                symptoms: "knee pain on both sides",
                remarks: "Bilateral primary osteoarthritis of knee; patient requires physiotherapy",
            }
        })
        // Add Diagnosis 11
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 18 } },
                icd: "R06.6",
                symptoms: "intractable hiccups",
                remarks: "persistent hiccups",
            }
        })
        // Add Diagnosis 12
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 19 } },
                icd: "R35.1",
                symptoms: "frequent urination at night",
                remarks: "nocturia",
            }
        })
        // Add Diagnosis 13
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 20 } },
                icd: "H52.223",
                symptoms: "difficulty seeing at night; blurred vision; sensitivity to light",
                remarks: "Bilateral astigmatism",
            }
        })
        // Add Diagnosis 14
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 21 } },
                icd: "L56.2",
                symptoms: "erythema; solar urticaria",
                remarks: "photocontact dermatitis",
            }
        })
        // Add Diagnosis 15
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 22 } },
                icd: "Z34.01",
                symptoms: "nausea; fatigue",
                remarks: "supervision of normal pregnancy at first trimester",
            }
        })
        // Add Diagnosis 16
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 23 } },
                icd: "I31.3",
                symptoms: "chest pain",
                remarks: "noninflammatory pericardial effusion",
            }
        })
        // Add Diagnosis 17
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 24 } },
                icd: "N91.1",
                symptoms: "irregular menstruation",
                remarks: "secondary amenorrhoea",
            }
        })
        // Add Diagnosis 18
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 25 } },
                icd: "N13.8",
                symptoms: "difficulty urinating",
                remarks: "other obstructive and reflux uropathy",
            }
        })
        // Add Diagnosis 19
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 26 } },
                icd: "H10.9",
                symptoms: "eye redness and itching",
                remarks: "unspecified conjunctivitis",
            }
        })
        // Add Diagnosis 20
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 28 } },
                icd: "N97.2",
                symptoms: "infertility",
                remarks: "female infertility of uterine origin",
            }
        })
        // Add Diagnosis 21
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 29 } },
                icd: "L70.0",
                symptoms: "chronic and severe acne",
                remarks: "acne vulgaris",
            }
        })
        // Add Diagnosis 22
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 30 } },
                icd: "H52.223",
                symptoms: "difficulty seeing at night; sensitivity to light",
                remarks: "Bilateral astigmatism",
            }
        })
        // Add Diagnosis 23
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 31 } },
                icd: "L70.0",
                symptoms: "incipient acne",
                remarks: "acne vulgaris",
            }
        })
        // Add Diagnosis 24
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 32 } },
                icd: "R10.9",
                symptoms: "stomach cramps; lump; fever and nausea",
                remarks: "unspecified abdominal pain",
            }
        })
        // Add Diagnosis 25
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 33 } },
                icd: "R31.9",
                symptoms: "blood in urine",
                remarks: "unspecified hematuria",
            }
        })
        // Add Diagnosis 26
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 34 } },
                icd: "C23",
                symptoms: "lump in stomach; jaundice",
                remarks: "malignant neoplasm of gallbladder (gallbladder cancer)",
            }
        })
        // Add Diagnosis 27
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 35 } },
                icd: "I10",
                symptoms: "hypertension",
                remarks: "primary hypertension",
            }
        })
        // Add Diagnosis 28
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 36 } },
                icd: "N92.1",
                symptoms: "menometrorrhagia",
                remarks: "excessive and frequent menstruation w/ irregular cycle",
            }
        })
        // Add Diagnosis 29
        await this.prisma.diagnosis.create({
            data: {
                appointment: { connect: { appointmentId: 38 } },
                icd: "I63.111",
                symptoms: "seizures and hemiparesis",
                remarks: "cerebral infarction due to embolism of right vertebral artery",
            }
        })
    }
}
