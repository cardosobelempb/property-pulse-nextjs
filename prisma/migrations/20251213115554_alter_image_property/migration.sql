/*
  Warnings:

  - The primary key for the `image_property` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `image_property` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `image_property` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `image_property` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `image_property` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `image_property` table. All the data in the column will be lost.
  - Added the required column `imageId` to the `image_property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "image_property" DROP CONSTRAINT "image_property_pkey",
DROP COLUMN "created_at",
DROP COLUMN "deleted_at",
DROP COLUMN "id",
DROP COLUMN "updated_at",
DROP COLUMN "url",
ADD COLUMN     "imageId" UUID NOT NULL,
ADD CONSTRAINT "image_property_pkey" PRIMARY KEY ("propertyId", "imageId");

-- AddForeignKey
ALTER TABLE "image_property" ADD CONSTRAINT "image_property_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
