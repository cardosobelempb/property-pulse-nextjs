/*
  Warnings:

  - You are about to drop the column `propertyId` on the `image` table. All the data in the column will be lost.
  - Added the required column `property_id` to the `image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."image" DROP CONSTRAINT "image_propertyId_fkey";

-- AlterTable
ALTER TABLE "image" DROP COLUMN "propertyId",
ADD COLUMN     "property_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
