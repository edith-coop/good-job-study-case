/*
  Warnings:

  - A unique constraint covering the columns `[kudoId,userId]` on the table `KudoReaction` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "KudoReaction_kudoId_userId_emoji_key";

-- CreateTable
CREATE TABLE "KudoTag" (
    "id" TEXT NOT NULL,
    "kudoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KudoTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "KudoTag_kudoId_idx" ON "KudoTag"("kudoId");

-- CreateIndex
CREATE INDEX "KudoTag_userId_idx" ON "KudoTag"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "KudoTag_kudoId_userId_key" ON "KudoTag"("kudoId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "KudoReaction_kudoId_userId_key" ON "KudoReaction"("kudoId", "userId");

-- AddForeignKey
ALTER TABLE "KudoTag" ADD CONSTRAINT "KudoTag_kudoId_fkey" FOREIGN KEY ("kudoId") REFERENCES "Kudo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KudoTag" ADD CONSTRAINT "KudoTag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
