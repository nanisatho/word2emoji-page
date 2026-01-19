'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LocalStorage } from '@/lib/storage/localStorage';

export function WelcomeView() {
  const t = useTranslations('welcome');
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';

  const handleGetStarted = () => {
    LocalStorage.set('welcome_shown', true);
    router.push(`/${locale}`);
  };

  const examples = [
    t('examples.birthdayParty'),
    t('examples.pizzaWithFriends'),
    t('examples.beachVacation'),
  ];

  return (
    <div className="min-h-screen bg-gradient-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <div className="text-6xl mb-4">👋</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            {t('title')}
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card variant="gradient">
            <h2 className="font-semibold text-primary mb-2">{t('howToUse')}</h2>
            <p className="text-sm text-gray-600 mb-4">{t('instruction.enter')}</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t('instruction.generate')}</li>
              <li>• {t('instruction.copy')}</li>
            </ul>
          </Card>

          <Card variant="gradient">
            <h2 className="font-semibold text-primary mb-2">{t('advanced.title')}</h2>
            <p className="text-sm text-gray-600 mb-4">{t('advanced.subtitle')}</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t('advanced.options')}</li>
              <li>• {t('advanced.languages')}</li>
            </ul>
          </Card>

          <Card variant="gradient">
            <h2 className="font-semibold text-primary mb-2">{t('examples.title')}</h2>
            <p className="text-sm text-gray-600 mb-4">{t('examples.subtitle')}</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {examples.map((example, i) => (
                <li key={i}>"{example}"</li>
              ))}
            </ul>
          </Card>
        </div>

        <Button
          variant="primary"
          size="lg"
          onClick={handleGetStarted}
          className="w-full"
        >
          {t('getStarted')}
        </Button>
      </div>
    </div>
  );
}
