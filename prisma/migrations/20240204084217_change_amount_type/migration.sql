/*
  Warnings:

  - You are about to alter the column `amount` on the `Register` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- DropIndex
DROP INDEX "Register_amount_key";

-- AlterTable
ALTER TABLE "Register" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);
