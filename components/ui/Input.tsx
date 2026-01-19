'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  characterCount?: {
    current: number;
    max: number;
  };
}

export function Input({
  label,
  error,
  characterCount,
  className,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          className={cn(
            'w-full px-4 py-3 rounded-lg border-2 transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-primary/50',
            error
              ? 'border-error focus:border-error'
              : 'border-gray-300 focus:border-primary',
            'resize-none',
            className
          )}
          {...props}
        />
        {characterCount && (
          <div className="absolute bottom-2 right-2 text-xs text-gray-500">
            {characterCount.current}/{characterCount.max}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
}
