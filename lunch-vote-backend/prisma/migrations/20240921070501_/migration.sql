/*
  Warnings:

  - You are about to drop the column `employeeName` on the `Vote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "employeeName",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER;
