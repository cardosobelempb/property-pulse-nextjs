/*
  Warnings:

  - You are about to drop the column `rate_id` on the `property` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."property" DROP CONSTRAINT "property_rate_id_fkey";

-- AlterTable
ALTER TABLE "property" DROP COLUMN "rate_id";

-- AlterTable
ALTER TABLE "rate" ADD COLUMN     "propertyId" UUID;

-- AddForeignKey
ALTER TABLE "rate" ADD CONSTRAINT "rate_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE SET NULL ON UPDATE CASCADE;
