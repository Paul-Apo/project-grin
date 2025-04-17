/*
  Warnings:

  - A unique constraint covering the columns `[inBoardId,userBoardId]` on the table `boardMem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `boardMem_inBoardId_userBoardId_key` ON `boardMem`(`inBoardId`, `userBoardId`);
