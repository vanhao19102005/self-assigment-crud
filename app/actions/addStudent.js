'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export default async function addStudent(formData) {
  const name = formData.get('name');
  const major = formData.get('major');
  const address = formData.get('address');
  const school = formData.get('school');
  const className = formData.get('className');
  const languages = formData.getAll('languages');

  try {
    await prisma.student.create({
      data: {
        name,
        major,
        address,
        school,
        className,
        languages,
      },
    });
    revalidatePath('/');
  } catch (e) {
    console.error(e);
  }
}
