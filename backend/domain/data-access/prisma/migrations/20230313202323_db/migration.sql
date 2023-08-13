/*
  Warnings:

  - Added the required column `raceId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "raceId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Training" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL DEFAULT date(now()),
    "km" INTEGER NOT NULL,
    "avg_heartrate" INTEGER NOT NULL,
    "avg_speed" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL,

    CONSTRAINT "training_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Race" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL DEFAULT date(now()),
    "km" INTEGER NOT NULL,
    "age_category" VARCHAR(30) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "country" VARCHAR(30) NOT NULL,
    "street" VARCHAR(30) NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "race_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingComment" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(50) NOT NULL,
    "date" DATE NOT NULL DEFAULT date(now()),
    "trainingid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "trainingComment_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RaceToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "training_id_uindex" ON "Training"("id");

-- CreateIndex
CREATE UNIQUE INDEX "race_id_uindex" ON "Race"("id");

-- CreateIndex
CREATE UNIQUE INDEX "trainingComment_id_uindex" ON "TrainingComment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_RaceToUser_AB_unique" ON "_RaceToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RaceToUser_B_index" ON "_RaceToUser"("B");

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingComment" ADD CONSTRAINT "TrainingComment_trainingid_fkey" FOREIGN KEY ("trainingid") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingComment" ADD CONSTRAINT "TrainingComment_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceToUser" ADD CONSTRAINT "_RaceToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceToUser" ADD CONSTRAINT "_RaceToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
