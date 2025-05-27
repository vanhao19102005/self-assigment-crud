'use client';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export function ThemeToggle() {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    const savedTheme =
      typeof window !== 'undefined'
        ? localStorage.getItem('theme') || 'default'
        : 'default';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark', 'default');
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="theme-select-label">Theme</InputLabel>
      <Select
        labelId="theme-select-label"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        label="Theme"
        sx={{ textTransform: 'none' }}
      >
        <MenuItem value="default">Custom</MenuItem>
        <MenuItem
          value="light"
          className="flex items-center justify-center gap-2"
        >
          <FaSun sx={{ verticalAlign: 'middle', marginRight: 1 }} />
          <span>Light</span>
        </MenuItem>
        <MenuItem
          value="dark"
          className="flex items-center justify-center gap-2"
        >
          <FaMoon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
          <span>Dark</span>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
