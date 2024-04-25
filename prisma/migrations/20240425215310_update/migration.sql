/*
  Warnings:

  - You are about to drop the column `postalcode` on the `Invoice` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "postalcode",
ADD COLUMN     "postalCode" TEXT;
