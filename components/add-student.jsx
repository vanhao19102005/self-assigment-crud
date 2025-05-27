'use client';

import { Button, DialogActions, TextField } from '@mui/material';

// Import Server Actions
import addStudent from '../app/actions/addStudent';

export function AddStudentForm({ setIsAddDialogOpen }) {
  const handleSubmit = async (formData) => {
    await addStudent(formData);
    setIsAddDialogOpen(false); // Close dialog after successful submission
  };

  return (
    <form action={handleSubmit} className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          label="Name"
          name="name"
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Major"
          name="major"
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Address"
          name="address"
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="School"
          name="school"
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Class"
          name="className"
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Languages (comma-separated)"
          name="languages"
          required
          variant="outlined"
          fullWidth
          placeholder="e.g., English, Spanish"
          sx={{ mb: 2 }}
        />
      </div>
      <DialogActions>
        <Button onClick={() => setIsAddDialogOpen(false)} color="inherit">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Add Student
        </Button>
      </DialogActions>
    </form>
  );
}
