/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pestsTypeId` to the `Solicitation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "cnpj" TEXT,
ADD COLUMN     "phone" TEXT NOT NULL,
ALTER COLUMN "cpf" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Solicitation" ADD COLUMN     "pestsTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "PestsType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "PestsType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialNetwork" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "SocialNetwork_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_cnpj_key" ON "Customer"("cnpj");

-- AddForeignKey
ALTER TABLE "PestsType" ADD CONSTRAINT "PestsType_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitation" ADD CONSTRAINT "Solicitation_pestsTypeId_fkey" FOREIGN KEY ("pestsTypeId") REFERENCES "PestsType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialNetwork" ADD CONSTRAINT "SocialNetwork_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
