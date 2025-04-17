-- DropForeignKey
ALTER TABLE `boardmem` DROP FOREIGN KEY `boardMem_inBoardId_fkey`;

-- DropForeignKey
ALTER TABLE `boardmem` DROP FOREIGN KEY `boardMem_userBoardId_fkey`;

-- DropIndex
DROP INDEX `boardMem_inBoardId_key` ON `boardmem`;

-- DropIndex
DROP INDEX `boardMem_userBoardId_key` ON `boardmem`;

-- AddForeignKey
ALTER TABLE `boardMem` ADD CONSTRAINT `boardMem_inBoardId_fkey` FOREIGN KEY (`inBoardId`) REFERENCES `board`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `boardMem` ADD CONSTRAINT `boardMem_userBoardId_fkey` FOREIGN KEY (`userBoardId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
