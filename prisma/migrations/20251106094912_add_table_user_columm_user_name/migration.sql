/*
  Warnings:

  - You are about to drop the column `useName` on the `user` table. All the data in the column will be lost.
  - Added the required column `user_name` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "useName",
ADD COLUMN     "user_name" TEXT NOT NULL;
