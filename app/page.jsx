import { PrismaClient } from '@prisma/client';

import { HomeContent } from '@/components/home-content';

const prisma = new PrismaClient();

async function fetchStudents() {
  const students = await prisma.student.findMany();
  return students;
}

// Server Component
export default async function Home() {
  const students = await fetchStudents();

  return <HomeContent students={students} />;
}
