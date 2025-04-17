/*
  Warnings:

  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - Added the required column `changedAt` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startedAt` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `changedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `startedAt` DATETIME(3) NOT NULL;
