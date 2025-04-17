-- AlterTable
ALTER TABLE `board` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `boardmem` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `markdowntext` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `tasks` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `user` ALTER COLUMN `createdAt` DROP DEFAULT;
