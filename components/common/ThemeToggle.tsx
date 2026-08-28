'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

import { motion } from 'framer-motion';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', size = 'md' }) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && theme === 'light';
  const ariaLabel = isLight ? 'Switch to dark mode' : 'Switch to light mode';

  // Guaranteed 44px x 44px minimum touch target for both mobile and desktop
  const buttonSizeClasses =
    size === 'sm'
      ? 'w-11 h-11 min-w-[44px] min-h-[44px]'
      : 'w-11 h-11 min-w-[44px] min-h-[44px]';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.15 }}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`relative inline-flex items-center justify-center rounded-xl border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange select-none ${buttonSizeClasses} ${
        isLight
          ? 'bg-white hover:bg-amber-50/60 border-gray-200 text-amber-500 shadow-xs'
          : 'bg-[#13243B]/80 hover:bg-[#182c47] border-[#13243B] hover:border-brand-orange/40 text-brand-orange shadow-xs'
      } ${className}`}
    >
      {isLight ? (
        <Moon className="w-5 h-5 text-brand-orange transition-transform duration-200" aria-hidden="true" />
      ) : (
        <Sun className="w-5 h-5 text-brand-orange transition-transform duration-200" aria-hidden="true" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
