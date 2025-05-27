'use client';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { useState, useEffect } from 'react';

// Initial theme creation (without dynamic reference)
const baseTheme = createTheme({
  palette: {
    mode: 'light', // Default mode, will be updated dynamically
  },
});

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    const savedTheme =
      typeof window !== 'undefined'
        ? localStorage.getItem('theme') || 'default'
        : 'default';
    setCurrentTheme(savedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark', 'default');
      document.documentElement.classList.add(currentTheme);
      localStorage.setItem('theme', currentTheme);
    }
  }, [currentTheme]);

  // Dynamically create theme based on currentTheme state
  const dynamicTheme = createTheme({
    palette: {
      mode: currentTheme === 'dark' ? 'dark' : 'light',
    },
  });

  if (!mounted) return <>{children}</>;

  return <MUIThemeProvider theme={dynamicTheme}>{children}</MUIThemeProvider>;
}
