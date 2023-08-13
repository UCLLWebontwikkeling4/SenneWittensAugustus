/*
  Warnings:

  - You are about to alter the column `text` on the `TrainingComment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(30)`.
  - You are about to drop the column `bike` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `raceId` on the `User` table. All the data in the column will be lost.
  - Added the required column `type` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Training` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "type" VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE "Training" ADD COLUMN     "title" VARCHAR(60) NOT NULL;

-- AlterTable
ALTER TABLE "TrainingComment" ALTER COLUMN "text" SET DATA TYPE VARCHAR(30);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bike",
DROP COLUMN "raceId";
