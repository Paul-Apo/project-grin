/*
  Warnings:

  - You are about to drop the column `changedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `startedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `board` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `boardmem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `markdowntext` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `createdAt` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `board` DROP FOREIGN KEY `board_ownerId_fkey`;

-- DropForeignKey
ALTER TABLE `boardmem` DROP FOREIGN KEY `boardMem_inBoardId_fkey`;

-- DropForeignKey
ALTER TABLE `boardmem` DROP FOREIGN KEY `boardMem_userBoardId_fkey`;

-- DropForeignKey
ALTER TABLE `markdowntext` DROP FOREIGN KEY `markdowntext_textBoardId_fkey`;

-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_taskBoardId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `changedAt`,
    DROP COLUMN `startedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `board`;

-- DropTable
DROP TABLE `boardmem`;

-- DropTable
DROP TABLE `markdowntext`;

-- DropTable
DROP TABLE `tasks`;
