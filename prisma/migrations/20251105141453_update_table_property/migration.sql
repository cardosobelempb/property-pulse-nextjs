/*
  Warnings:

  - You are about to drop the column `propertyId` on the `rate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."rate" DROP CONSTRAINT "rate_propertyId_fkey";

-- AlterTable
ALTER TABLE "rate" DROP COLUMN "propertyId",
ADD COLUMN     "property_id" UUID;

-- AddForeignKey
ALTER TABLE "rate" ADD CONSTRAINT "rate_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE SET NULL ON UPDATE CASCADE;
