-- CreateTable
CREATE TABLE `Diagnosis` (
    `diagnosisId` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `appointmentId` INTEGER NOT NULL,
    `icd` VARCHAR(191) NOT NULL,
    `symptoms` VARCHAR(191) NULL,
    `remarks` VARCHAR(191) NULL,

    PRIMARY KEY (`diagnosisId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Diagnosis` ADD CONSTRAINT `Diagnosis_appointmentId_fkey` FOREIGN KEY (`appointmentId`) REFERENCES `Appointment`(`appointmentId`) ON DELETE RESTRICT ON UPDATE CASCADE;
