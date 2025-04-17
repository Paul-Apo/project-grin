/*
  Warnings:

  - Added the required column `inBoardId` to the `boardMem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userBoardId` to the `boardMem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `boardmem` ADD COLUMN `inBoardId` VARCHAR(191) NOT NULL,
    ADD COLUMN `userBoardId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_username_key`(`username`),
    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `board` (
    `id` VARCHAR(191) NOT NULL,
    `ownerId` VARCHAR(191) NOT NULL,
    `boardName` VARCHAR(191) NOT NULL,
    `boardDes` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `board_ownerId_key`(`ownerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tasks` (
    `taskid` VARCHAR(191) NOT NULL,
    `taskBoardId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`taskid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `markdowntext` (
    `textid` VARCHAR(191) NOT NULL,
    `textBoardId` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`textid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `board` ADD CONSTRAINT `board_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `boardMem` ADD CONSTRAINT `boardMem_inBoardId_fkey` FOREIGN KEY (`inBoardId`) REFERENCES `board`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `boardMem` ADD CONSTRAINT `boardMem_userBoardId_fkey` FOREIGN KEY (`userBoardId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_taskBoardId_fkey` FOREIGN KEY (`taskBoardId`) REFERENCES `board`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `markdowntext` ADD CONSTRAINT `markdowntext_textBoardId_fkey` FOREIGN KEY (`textBoardId`) REFERENCES `board`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
