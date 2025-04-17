/*
  Warnings:

  - You are about to drop the column `createdAt` on the `boardmem` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `boardmem` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `markdowntext` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `markdowntext` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `boardmem` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `markdowntext` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;
