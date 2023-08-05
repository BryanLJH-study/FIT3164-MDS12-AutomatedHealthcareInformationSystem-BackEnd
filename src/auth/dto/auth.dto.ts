import { IsDateString, IsEmail, IsMobilePhone, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator"

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsNumberString()
    @IsNotEmpty()
    ic: string

    @IsString()
    @IsNotEmpty()
    firstName: String

    @IsString()
    @IsNotEmpty()
    lastName: String
    
    @IsDateString()
    @IsNotEmpty()
    dob: Date

    @IsString()
    @IsNotEmpty()
    gender: String

    @IsString()
    @IsNotEmpty()
    nationality: String

    @IsMobilePhone()
    @IsNotEmpty()
    phoneNo: String

    @IsMobilePhone()
    @IsOptional()
    emergencyNo: String

    @IsString()
    @IsOptional()
    emergencyRemarks: String

    @IsString()
    @IsNotEmpty()
    title: String

    @IsString()
    @IsOptional()
    specialty: String

    @IsNotEmpty()
    adminCode: String
}