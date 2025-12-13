/*
  Warnings:

  - You are about to drop the `image_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `image_product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `image_property` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."image_category" DROP CONSTRAINT "image_category_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."image_category" DROP CONSTRAINT "image_category_imageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."image_product" DROP CONSTRAINT "image_product_imageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."image_product" DROP CONSTRAINT "image_product_productId_fkey";

-- DropForeignKey
ALTER TABLE "public"."image_property" DROP CONSTRAINT "image_property_imageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."image_property" DROP CONSTRAINT "image_property_propertyId_fkey";

-- DropTable
DROP TABLE "public"."image_category";

-- DropTable
DROP TABLE "public"."image_product";

-- DropTable
DROP TABLE "public"."image_property";

-- CreateTable
CREATE TABLE "property_image" (
    "propertyId" UUID NOT NULL,
    "imageId" UUID NOT NULL,

    CONSTRAINT "property_image_pkey" PRIMARY KEY ("propertyId","imageId")
);

-- CreateTable
CREATE TABLE "product_image" (
    "productId" UUID NOT NULL,
    "imageId" UUID NOT NULL,

    CONSTRAINT "product_image_pkey" PRIMARY KEY ("productId","imageId")
);

-- CreateTable
CREATE TABLE "category_image" (
    "categoryId" UUID NOT NULL,
    "imageId" UUID NOT NULL,

    CONSTRAINT "category_image_pkey" PRIMARY KEY ("categoryId","imageId")
);

-- AddForeignKey
ALTER TABLE "property_image" ADD CONSTRAINT "property_image_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property_image" ADD CONSTRAINT "property_image_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_image" ADD CONSTRAINT "product_image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_image" ADD CONSTRAINT "product_image_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_image" ADD CONSTRAINT "category_image_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_image" ADD CONSTRAINT "category_image_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
