'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

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

  const buttonSizeClasses = size === 'sm' ? 'w-9 h-9 sm:w-10 sm:h-10 min-w-[36px]' : 'w-10 h-10 sm:w-11 sm:h-11 min-w-[40px]';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`relative inline-flex items-center justify-center rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange select-none ${buttonSizeClasses} ${
        isLight
          ? 'bg-white hover:bg-gray-100 border-gray-300 text-brand-orange shadow-sm'
          : 'bg-[#13243B] hover:bg-[#182c47] border-[#13243B] hover:border-brand-orange/40 text-brand-orange shadow-inner'
      } ${className}`}
    >
      {isLight ? (
        <Moon className="w-5 h-5 text-brand-orange transition-transform duration-200 hover:rotate-12" aria-hidden="true" />
      ) : (
        <Sun className="w-5 h-5 text-brand-orange transition-transform duration-200 hover:rotate-45" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
