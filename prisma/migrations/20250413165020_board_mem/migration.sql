/*
  Warnings:

  - A unique constraint covering the columns `[inBoardId]` on the table `boardMem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userBoardId]` on the table `boardMem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `boardMem_inBoardId_key` ON `boardMem`(`inBoardId`);

-- CreateIndex
CREATE UNIQUE INDEX `boardMem_userBoardId_key` ON `boardMem`(`userBoardId`);
