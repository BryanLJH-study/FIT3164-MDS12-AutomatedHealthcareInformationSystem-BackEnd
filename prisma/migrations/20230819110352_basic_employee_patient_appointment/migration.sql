-- CreateTable
CREATE TABLE `Employee` (
    `employeeId` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `ic` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `phoneNo` VARCHAR(191) NOT NULL,
    `emergencyNo` VARCHAR(191) NULL,
    `emergencyRemarks` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `specialty` VARCHAR(191) NULL,

    UNIQUE INDEX `Employee_email_key`(`email`),
    UNIQUE INDEX `Employee_ic_key`(`ic`),
    PRIMARY KEY (`employeeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patient` (
    `patientId` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `ic` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `phoneNo` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `emergencyNo` VARCHAR(191) NULL,
    `emergencyRemarks` VARCHAR(191) NULL,
    `remarks` VARCHAR(191) NULL,

    UNIQUE INDEX `Patient_ic_key`(`ic`),
    UNIQUE INDEX `Patient_email_key`(`email`),
    PRIMARY KEY (`patientId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appointment` (
    `appointmentId` INTEGER NOT NULL AUTO_INCREMENT,
    `registrationDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `patientId` INTEGER NOT NULL,
    `employeeId` INTEGER NOT NULL,
    `appointmentDateTime` DATETIME(3) NOT NULL,
    `reason` VARCHAR(191) NULL,
    `remarks` VARCHAR(191) NULL,
    `completed` BOOLEAN NOT NULL DEFAULT false,
    `previousAppointmentId` INTEGER NULL,

    PRIMARY KEY (`appointmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`patientId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
