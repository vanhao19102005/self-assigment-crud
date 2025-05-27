'use client';

import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { EditStudentForm } from './edit-student';
import deleteStudent from '@/app/actions/deleteStudent';

export function StudentRow({ student }) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  return (
    <>
      <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition duration-200">
        <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
          {student.name}
        </td>
        <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
          {student.major}
        </td>
        <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
          {student.address}
        </td>
        <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
          {student.school}
        </td>
        <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
          {student.className}
        </td>
        <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
          {student.languages.join(', ')}
        </td>
        <td className="px-6 py-4 flex gap-3">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsEditDialogOpen(true)}
            sx={{ textTransform: 'none' }}
          >
            Edit
          </Button>
          <form action={deleteStudent}>
            <input type="hidden" name="id" value={student.id} />
            <Button
              variant="contained"
              color="error"
              type="submit"
              sx={{ textTransform: 'none' }}
            >
              Delete
            </Button>
          </form>
        </td>
      </tr>

      <Dialog
        open={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Edit Student
          <IconButton
            aria-label="close"
            onClick={() => setIsEditDialogOpen(false)}
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
          <EditStudentForm
            student={student}
            setIsEditDialogOpen={setIsEditDialogOpen}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
