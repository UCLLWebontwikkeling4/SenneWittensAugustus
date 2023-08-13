-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "lastname" VARCHAR(30),
    "firstname" VARCHAR(30) NOT NULL,
    "birth_date" DATE NOT NULL DEFAULT date(now()),
    "password" VARCHAR(30) NOT NULL,
    "country" VARCHAR(30),
    "city" VARCHAR(30),
    "type_of_rider" VARCHAR(30) NOT NULL,
    "bike" INTEGER,

    CONSTRAINT "user_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bike" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(30) NOT NULL,
    "type" VARCHAR(30) NOT NULL,
    "shifting_system" VARCHAR(30),
    "weight" INTEGER,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "bike_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_uindex" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "bike_id_uindex" ON "Bike"("id");

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
