/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Kudo_receiverId_createdAt_idx" ON "Kudo"("receiverId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "Kudo_senderId_createdAt_idx" ON "Kudo"("senderId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "KudoComment_userId_createdAt_idx" ON "KudoComment"("userId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "KudoReaction_userId_createdAt_idx" ON "KudoReaction"("userId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "Notification_entityType_entityId_idx" ON "Notification"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "PointLedger_referenceType_referenceId_idx" ON "PointLedger"("referenceType", "referenceId");

-- CreateIndex
CREATE INDEX "RewardRedemption_rewardId_redeemedAt_idx" ON "RewardRedemption"("rewardId", "redeemedAt" DESC);
