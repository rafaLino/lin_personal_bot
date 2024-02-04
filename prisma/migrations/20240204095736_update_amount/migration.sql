/*
  Warnings:

  - You are about to alter the column `amount` on the `Register` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,2)` to `Decimal(10,4)`.

*/
-- AlterTable
ALTER TABLE "Register" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,4);
