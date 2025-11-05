/*
  Warnings:

  - You are about to drop the column `isFeatured` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `rateId` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `squareFeet` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `property` table. All the data in the column will be lost.
  - Added the required column `square_feet` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."property" DROP CONSTRAINT "property_locationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."property" DROP CONSTRAINT "property_rateId_fkey";

-- DropForeignKey
ALTER TABLE "public"."property" DROP CONSTRAINT "property_userId_fkey";

-- AlterTable
ALTER TABLE "property" DROP COLUMN "isFeatured",
DROP COLUMN "locationId",
DROP COLUMN "rateId",
DROP COLUMN "squareFeet",
DROP COLUMN "userId",
ADD COLUMN     "is_featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "location_id" UUID,
ADD COLUMN     "rate_id" UUID,
ADD COLUMN     "square_feet" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "user_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "rate" ALTER COLUMN "weekly" DROP NOT NULL,
ALTER COLUMN "monthly" DROP NOT NULL,
ALTER COLUMN "nightly" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "property" ADD CONSTRAINT "property_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property" ADD CONSTRAINT "property_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property" ADD CONSTRAINT "property_rate_id_fkey" FOREIGN KEY ("rate_id") REFERENCES "rate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
