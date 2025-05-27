/*
  Warnings:

  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Todo";

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "languages" TEXT[],

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
