/*
  Warnings:

  - You are about to drop the column `property_id` on the `rate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."property" DROP CONSTRAINT "property_locationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."rate" DROP CONSTRAINT "rate_property_id_fkey";

-- AlterTable
ALTER TABLE "property" ALTER COLUMN "locationId" DROP NOT NULL,
ALTER COLUMN "rateId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "rate" DROP COLUMN "property_id";

-- AddForeignKey
ALTER TABLE "property" ADD CONSTRAINT "property_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property" ADD CONSTRAINT "property_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "rate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
