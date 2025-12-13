/*
  Warnings:

  - You are about to drop the column `image` on the `category` table. All the data in the column will be lost.
  - The primary key for the `image_product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `image_product` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `image_product` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `image_product` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `image_product` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `image_product` table. All the data in the column will be lost.
  - Added the required column `imageId` to the `image_product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "image_product" DROP CONSTRAINT "image_product_pkey",
DROP COLUMN "created_at",
DROP COLUMN "deleted_at",
DROP COLUMN "id",
DROP COLUMN "updated_at",
DROP COLUMN "url",
ADD COLUMN     "imageId" UUID NOT NULL,
ADD CONSTRAINT "image_product_pkey" PRIMARY KEY ("productId", "imageId");

-- CreateTable
CREATE TABLE "image" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image_category" (
    "categoryId" UUID NOT NULL,
    "imageId" UUID NOT NULL,

    CONSTRAINT "image_category_pkey" PRIMARY KEY ("categoryId","imageId")
);

-- AddForeignKey
ALTER TABLE "image_product" ADD CONSTRAINT "image_product_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image_category" ADD CONSTRAINT "image_category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image_category" ADD CONSTRAINT "image_category_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
