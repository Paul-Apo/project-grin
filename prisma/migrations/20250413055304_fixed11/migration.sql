/*
  Warnings:

  - A unique constraint covering the columns `[ownerId]` on the table `board` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `board_ownerId_key` ON `board`(`ownerId`);
