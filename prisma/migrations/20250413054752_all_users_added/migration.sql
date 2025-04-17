-- CreateTable
CREATE TABLE `boardMem` (
    `boardMem` VARCHAR(191) NOT NULL,
    `inBoardId` VARCHAR(191) NOT NULL,
    `userBoardId` VARCHAR(191) NOT NULL,
    `role` ENUM('owner', 'viewer', 'editor') NOT NULL DEFAULT 'viewer',

    PRIMARY KEY (`boardMem`)
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
ALTER TABLE `boardMem` ADD CONSTRAINT `boardMem_inBoardId_fkey` FOREIGN KEY (`inBoardId`) REFERENCES `board`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `boardMem` ADD CONSTRAINT `boardMem_userBoardId_fkey` FOREIGN KEY (`userBoardId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_taskBoardId_fkey` FOREIGN KEY (`taskBoardId`) REFERENCES `board`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `markdowntext` ADD CONSTRAINT `markdowntext_textBoardId_fkey` FOREIGN KEY (`textBoardId`) REFERENCES `board`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
