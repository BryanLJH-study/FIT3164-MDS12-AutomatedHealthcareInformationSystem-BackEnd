/*
  Warnings:

  - You are about to drop the column `Completed` on the `Appointment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Appointment` DROP COLUMN `Completed`,
    ADD COLUMN `completed` BOOLEAN NOT NULL DEFAULT false;
