'use client';

import { Button, DialogActions, TextField } from '@mui/material';

// Import Server Actions
import editStudent from '../app/actions/updateStudent';

export function EditStudentForm({ student, setIsEditDialogOpen }) {
  const handleSubmit = async (formData) => {
    await editStudent(formData);
    setIsEditDialogOpen(false); // Close dialog after successful submission
  };

  return (
    <form action={handleSubmit} className="py-4">
      <input type="hidden" name="id" value={student.id} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          label="Name"
          name="name"
          defaultValue={student.name}
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Major"
          name="major"
          defaultValue={student.major}
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Address"
          name="address"
          defaultValue={student.address}
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="School"
          name="school"
          defaultValue={student.school}
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Class"
          name="className"
          defaultValue={student.className}
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Languages (comma-separated)"
          name="languages"
          defaultValue={student.languages.join(', ')}
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
      </div>
      <DialogActions>
        <Button onClick={() => setIsEditDialogOpen(false)} color="inherit">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Save
        </Button>
      </DialogActions>
    </form>
  );
}
