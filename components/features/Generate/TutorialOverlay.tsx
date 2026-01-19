'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { LocalStorage } from '@/lib/storage/localStorage';

interface TutorialStep {
  target: string;
  title: string;
  message: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    target: 'input',
    title: 'tutorial.generate.input.title',
    message: 'tutorial.generate.input.message',
  },
  {
    target: 'advanced',
    title: 'tutorial.generate.advanced.title',
    message: 'tutorial.generate.advanced.message',
  },
  {
    target: 'generate',
    title: 'tutorial.generate.generate.title',
    message: 'tutorial.generate.generate.message',
  },
];

export function TutorialOverlay() {
  const t = useTranslations();
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const completed = LocalStorage.get<boolean>('generate_tutorial_completed', false);
    if (!completed) {
      setIsVisible(true);
      setCurrentStep(0);
    }
  }, []);

  const handleNext = () => {
    if (currentStep === null) return;
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinish();
    }
  };

  const handleSkip = () => {
    handleFinish();
  };

  const handleFinish = () => {
    LocalStorage.set('generate_tutorial_completed', true);
    setIsVisible(false);
    setCurrentStep(null);
  };

  if (!isVisible || currentStep === null) return null;

  const step = tutorialSteps[currentStep];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <div className="mb-4">
          <div className="text-sm text-gray-500 mb-2">
            Step {currentStep + 1} of {tutorialSteps.length}
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">
            {t(step.title)}
          </h3>
          <p className="text-gray-600">{t(step.message)}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleSkip} className="flex-1">
            {t('common.skip')}
          </Button>
          <Button variant="primary" onClick={handleNext} className="flex-1">
            {currentStep === tutorialSteps.length - 1
              ? t('common.finish')
              : t('common.next')}
          </Button>
        </div>
      </div>
    </div>
  );
}
