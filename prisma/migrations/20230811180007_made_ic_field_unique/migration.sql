/*
  Warnings:

  - A unique constraint covering the columns `[ic]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ic]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Employee_ic_key` ON `Employee`(`ic`);

-- CreateIndex
CREATE UNIQUE INDEX `Patient_ic_key` ON `Patient`(`ic`);
