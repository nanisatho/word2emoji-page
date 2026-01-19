'use client';

import React, { useEffect, useState } from 'react';
import { GenerateView } from '@/components/features/Generate/GenerateView';
import { WelcomeView } from '@/components/features/Welcome/WelcomeView';
import { StartupView } from '@/components/features/Startup/StartupView';
import { LocalStorage } from '@/lib/storage/localStorage';

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showStartup, setShowStartup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const welcomeShown = LocalStorage.get<boolean>('welcome_shown', false);
    const startupCompleted = LocalStorage.get<boolean>('startup_completed', false);

    if (!welcomeShown) {
      setShowWelcome(true);
    } else if (!startupCompleted) {
      setShowStartup(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-background flex items-center justify-center">
        <div className="text-4xl animate-pulse">✨</div>
      </div>
    );
  }

  if (showWelcome) {
    return <WelcomeView />;
  }

  if (showStartup) {
    return <StartupView />;
  }

  return <GenerateView />;
}
