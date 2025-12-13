/*
  Warnings:

  - You are about to drop the `category_product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."category_product" DROP CONSTRAINT "category_product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."category_product" DROP CONSTRAINT "category_product_productId_fkey";

-- DropTable
DROP TABLE "public"."category_product";

-- CreateTable
CREATE TABLE "product_category" (
    "productId" UUID NOT NULL,
    "categoryId" UUID NOT NULL,

    CONSTRAINT "product_category_pkey" PRIMARY KEY ("productId","categoryId")
);

-- AddForeignKey
ALTER TABLE "product_category" ADD CONSTRAINT "product_category_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_category" ADD CONSTRAINT "product_category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
