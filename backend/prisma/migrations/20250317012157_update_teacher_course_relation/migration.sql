/*
  Warnings:

  - The `teacherId` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Teacher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bio` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `photoUrl` on the `Teacher` table. All the data in the column will be lost.
  - The `id` column on the `Teacher` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `password` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_teacherId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "teacherId",
ADD COLUMN     "teacherId" INTEGER;

-- AlterTable
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_pkey",
DROP COLUMN "bio",
DROP COLUMN "photoUrl",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "certifications" TEXT,
ADD COLUMN     "cv" TEXT,
ADD COLUMN     "dob" TIMESTAMP(3),
ADD COLUMN     "experience" INTEGER,
ADD COLUMN     "expertise" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "profilePicture" TEXT,
ADD COLUMN     "twitter" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
