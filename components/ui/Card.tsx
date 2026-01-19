'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline';
}

export function Card({ children, className, variant = 'default', ...props }: CardProps) {
  const variants = {
    default: 'bg-white border border-gray-200',
    gradient: 'bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30',
    outline: 'border-2 border-primary/40 bg-white/50',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-4 shadow-lg',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
