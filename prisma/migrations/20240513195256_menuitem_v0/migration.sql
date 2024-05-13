/*
  Warnings:

  - You are about to drop the column `isVegetarian` on the `MenuItem` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `MenuItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MenuItem" DROP COLUMN "isVegetarian",
DROP COLUMN "price";
