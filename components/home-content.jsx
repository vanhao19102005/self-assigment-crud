'use client';
import { FaFacebook, FaGithub, FaInstagram, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeToggle } from './theme-toggle';
import { ThemeProvider } from './theme-provider';
import { AddStudentForm } from './add-student';
import { StudentRow } from './student-row';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/assets/projects/e-commerce-website.png',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/assets/projects/task-manager.webp',
  },
  {
    title: 'Portfolio Website',
    description:
      'My personal portfolio website showcasing my projects and skills.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/assets/projects/portfolio-website.jpg',
  },
  {
    title: 'Blog Platform',
    description:
      'A blogging platform with user authentication and markdown support.',
    technologies: ['Gatsby', 'GraphQL', 'Contentful'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/assets/projects/blog-website.jpeg',
  },
  {
    title: 'Weather App',
    description:
      'A weather application that provides real-time weather updates.',
    technologies: ['React', 'OpenWeatherMap API'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/assets/projects/weather-app.png',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application using WebSocket technology.',
    technologies: ['React', 'Node.js', 'Socket.io'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/assets/projects/chat-app.png',
  },
  {
    title: 'Recipe Finder',
    description: 'A recipe search application using the Edamam API.',
    technologies: ['React', 'Edamam API'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/assets/projects/recipe-finder.png',
  },
  {
    title: 'Expense Tracker',
    description: 'A personal finance tracker to manage expenses and income.',
    technologies: ['React', 'Firebase'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/assets/projects/expense-tracker.webp',
  },
];

export function HomeContent({ students }) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  console.log(isAddDialogOpen);
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        {/* Theme Toggle */}
        {/* <div className="container mx-auto px-4 py-4 flex justify-end">
          <ThemeToggle />
        </div> */}

        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10">
          <motion.div
            initial={{ y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Student Profile
            </h1>
            <p className="mt-2 text-lg opacity-80">
              Manage your student portfolio with ease
            </p>
            <div className="flex justify-center gap-6 text-2xl mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>
        </header>
        {/* Student Management Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Student Management
          </h2>

          {/* Add Student Button */}
          <div className="mb-8 text-center">
            <Button
              variant="contained"
              color="success"
              startIcon={<FaPlus />}
              onClick={() => setIsAddDialogOpen(true)}
              sx={{ textTransform: 'none' }}
            >
              Add New Student
            </Button>
          </div>

          {/* Add Student Dialog */}
          <Dialog
            open={isAddDialogOpen}
            onClose={() => setIsAddDialogOpen(false)}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle>
              Add New Student
              <IconButton
                aria-label="close"
                onClick={() => setIsAddDialogOpen(false)}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <AddStudentForm setIsAddDialogOpen={setIsAddDialogOpen} />
            </DialogContent>
          </Dialog>

          {/* Students Table */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-700 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Major
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      School
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Class
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Languages
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.length > 0 ? (
                    students.map((student) => (
                      <StudentRow key={student.id} student={student} />
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                      >
                        No students found. Add some students to get started!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {project?.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full object-cover !h-[300px]"
                    priority
                  />
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      className="text-blue-500 dark:text-blue-400 font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                    <a
                      href={project.demoLink}
                      className="text-blue-500 dark:text-blue-400 font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>
              © {new Date().getFullYear()} Student Profile. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  );
}
