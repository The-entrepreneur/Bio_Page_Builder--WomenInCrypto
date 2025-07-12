'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setDarkMode(!darkMode)}
      className={`relative overflow-hidden border-2 ${
        darkMode 
          ? 'bg-white/5 border-white/10 text-white' 
          : 'bg-white/80 border-gray-200 text-gray-900'
      }`}
    >
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.2 }}
        className="flex items-center space-x-2"
      >
        {darkMode ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
        <span className="text-sm font-medium">
          {darkMode ? 'Light' : 'Dark'}
        </span>
      </motion.div>
    </Button>
  );
}