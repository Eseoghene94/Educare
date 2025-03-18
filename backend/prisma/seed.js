import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

async function seed() {
  try {
    console.log("🌱 Seeding database...");

    // Hash passwords
    const hashedPasswordAdmin = await bcrypt.hash("Admin123!", 10);
    const hashedPasswordTeacher = await bcrypt.hash("Teacher123!", 10);
    const hashedPasswordUser = await bcrypt.hash("User123!", 10);

    // Insert ADMIN, STUDENT, and PARTNER Users
    await prisma.user.createMany({
      data: [
        {
          name: "Admin User",
          email: "admin@educare.com",
          password: hashedPasswordAdmin,
          role: "ADMIN",
        },
        {
          name: "Motunrayo",
          email: "user@educare.com",
          password: hashedPasswordUser,
          role: "STUDENT",
        },
        {
          name: "Gloria Chukwu",
          email: "partner@educare.com",
          password: await bcrypt.hash("Partner123!", 10),
          role: "PARTNER",
        },
      ],
      skipDuplicates: true,
    });

    // Insert a TEACHER (also needs a password)
    await prisma.teacher.create({
      data: {
        name: "Prof. David",
        email: "teacher@educare.com",
        password: hashedPasswordTeacher, // Hash password
        address: "123 Education Street",
        phone: "+2348107651132",
        gender: "Male",
        expertise: "Computer Science",
        experience: 10,
        certifications: "PhD in AI",
        linkedin: "https://linkedin.com/in/profsmith",
        twitter: "https://twitter.com/profsmith",
      },
    });

    console.log("✅ Database seeded successfully!");
  } catch (error) {
    console.error("❌ Seeding error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
