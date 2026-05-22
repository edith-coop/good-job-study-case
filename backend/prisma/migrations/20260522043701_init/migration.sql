-- CreateEnum
CREATE TYPE "KudoType" AS ENUM ('LIVE_FEED', 'PEER_RECOGNITION');

-- AlterTable
ALTER TABLE "Kudo" ADD COLUMN     "type" "KudoType" NOT NULL DEFAULT 'PEER_RECOGNITION',
ALTER COLUMN "visibility" SET DEFAULT 'PRIVATE';

-- CreateIndex
CREATE INDEX "Kudo_type_createdAt_idx" ON "Kudo"("type", "createdAt" DESC);
