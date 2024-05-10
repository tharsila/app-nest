/*
  Warnings:

  - You are about to alter the column `price` on the `adoptions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `weight` on the `pets` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `adoptions` MODIFY `price` DOUBLE NULL;

-- AlterTable
ALTER TABLE `pets` MODIFY `weight` DOUBLE NULL;
