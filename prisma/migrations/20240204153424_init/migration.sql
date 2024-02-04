-- CreateTable
CREATE TABLE "Register" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Register_pkey" PRIMARY KEY ("id")
);
