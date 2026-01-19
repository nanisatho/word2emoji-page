'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

interface AnimatedGradientButtonProps {
  isLoading: boolean;
  isEnabled: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export function AnimatedGradientButton({
  isLoading,
  isEnabled,
  onClick,
  children = 'Generate',
}: AnimatedGradientButtonProps) {
  return (
    <Button
      variant="primary"
      size="lg"
      isLoading={isLoading}
      disabled={!isEnabled}
      onClick={onClick}
      className={cn(
        'w-full font-bold text-lg py-4',
        'bg-gradient-action',
        'hover:scale-105 active:scale-95',
        'transition-transform duration-200',
        !isEnabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      {children}
    </Button>
  );
}
