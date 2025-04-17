/*
  Warnings:

  - You are about to drop the column `inBoardId` on the `boardmem` table. All the data in the column will be lost.
  - You are about to drop the column `userBoardId` on the `boardmem` table. All the data in the column will be lost.
  - You are about to drop the `board` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `markdowntext` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

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

-- DropIndex
DROP INDEX `boardMem_inBoardId_fkey` ON `boardmem`;

-- DropIndex
DROP INDEX `boardMem_userBoardId_fkey` ON `boardmem`;

-- AlterTable
ALTER TABLE `boardmem` DROP COLUMN `inBoardId`,
    DROP COLUMN `userBoardId`;

-- DropTable
DROP TABLE `board`;

-- DropTable
DROP TABLE `markdowntext`;

-- DropTable
DROP TABLE `tasks`;

-- DropTable
DROP TABLE `user`;
