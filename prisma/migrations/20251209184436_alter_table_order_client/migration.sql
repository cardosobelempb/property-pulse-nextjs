/*
  Warnings:

  - A unique constraint covering the columns `[client_id]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `client_id` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "client_id" UUID NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'WAITING_PAYMENT';

-- CreateIndex
CREATE UNIQUE INDEX "orders_client_id_key" ON "orders"("client_id");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
