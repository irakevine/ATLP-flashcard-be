-- DropForeignKey
ALTER TABLE "vote" DROP CONSTRAINT "vote_QuestionId_fkey";

-- DropForeignKey
ALTER TABLE "vote" DROP CONSTRAINT "vote_UserId_fkey";

-- AddForeignKey
ALTER TABLE "vote" ADD CONSTRAINT "vote_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vote" ADD CONSTRAINT "vote_QuestionId_fkey" FOREIGN KEY ("QuestionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
