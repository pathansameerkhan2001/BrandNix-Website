'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'full';
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      showArrow = true,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

    const sizeStyles = {
      sm: 'text-xs sm:text-sm px-4 py-2 min-h-[38px] sm:min-h-[42px] gap-1.5',
      md: 'text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] sm:min-h-[48px] gap-2',
      lg: 'text-base sm:text-lg px-7 sm:px-8 py-3.5 sm:py-4 min-h-[50px] sm:min-h-[54px] gap-2.5',
      full: 'text-base font-bold w-full py-3.5 min-h-[48px] gap-2',
    };

    const variantStyles = {
      primary:
        'bg-[#F59E0B] hover:bg-[#EA580C] text-white shadow-sm hover:shadow-brand-glow border border-transparent',
      outline:
        'border border-brand-orange/50 text-brand-orange hover:bg-brand-orange/10',
      ghost:
        'text-white hover:text-brand-orange hover:bg-brand-blue/30',
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    const iconAnimation = showArrow ? (
      <ArrowRight
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
        aria-hidden="true"
      />
    ) : null;

    if (href) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
          role="button"
        >
          <span>{children}</span>
          {iconAnimation}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...props}
      >
        <span>{children}</span>
        {iconAnimation}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
