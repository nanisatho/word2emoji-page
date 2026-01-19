'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { dataStorageManager } from '@/lib/managers/DataStorageManager';
import { historyManager } from '@/lib/managers/HistoryManager';
import { LocalStorage } from '@/lib/storage/localStorage';
import type { UserVibe } from '@/types';

export function SettingsView() {
  const t = useTranslations('settings');
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';
  const [hasHistory, setHasHistory] = useState(false);
  const [hasPersonality, setHasPersonality] = useState(false);
  const [topVibes, setTopVibes] = useState<UserVibe[]>([]);
  const [showClearHistoryConfirm, setShowClearHistoryConfirm] = useState(false);
  const [showClearPersonalityConfirm, setShowClearPersonalityConfirm] = useState(false);

  useEffect(() => {
    checkHistory();
    checkPersonality();
    loadTopVibes();

    const handleHistoryUpdate = () => checkHistory();
    const handlePersonalityUpdate = () => {
      checkPersonality();
      loadTopVibes();
    };

    window.addEventListener('HistoryUpdated', handleHistoryUpdate);
    window.addEventListener('HistoryCleared', handleHistoryUpdate);
    window.addEventListener('PersonalityUpdated', handlePersonalityUpdate);
    window.addEventListener('PersonalityCleared', handlePersonalityUpdate);

    return () => {
      window.removeEventListener('HistoryUpdated', handleHistoryUpdate);
      window.removeEventListener('HistoryCleared', handleHistoryUpdate);
      window.removeEventListener('PersonalityUpdated', handlePersonalityUpdate);
      window.removeEventListener('PersonalityCleared', handlePersonalityUpdate);
    };
  }, []);

  const checkHistory = () => {
    const history = historyManager.loadHistory();
    setHasHistory(history.length > 0);
  };

  const checkPersonality = () => {
    setHasPersonality(dataStorageManager.hasPersonalityData());
  };

  const loadTopVibes = () => {
    const vibes = dataStorageManager
      .getUserVibes()
      .filter((v) => v.weight > 0)
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 5);
    setTopVibes(vibes);
  };

  const handleClearHistory = () => {
    historyManager.clearHistory();
    setShowClearHistoryConfirm(false);
    alert(t('clearHistory.success.message'));
  };

  const handleClearPersonality = () => {
    dataStorageManager.clearPersonality();
    setShowClearPersonalityConfirm(false);
    alert(t('clearPersonality.success.message'));
  };

  const handleSetNewPersonality = () => {
    if (hasPersonality) {
      if (confirm(t('setNewPersonality.warning.message'))) {
        dataStorageManager.clearPersonality();
        router.push(`/${locale}/startup`);
      }
    } else {
      router.push(`/${locale}/startup`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8 text-center">
          ⚙️ {t('navigation.title')}
        </h1>

        {/* Clear History */}
        <Card variant="gradient">
          <div className="space-y-4">
            <h2 className="font-semibold text-primary text-lg">{t('clearHistory.title')}</h2>
            <Button
              variant="primary"
              onClick={() => setShowClearHistoryConfirm(true)}
              disabled={!hasHistory}
              className="w-full"
            >
              🗑️ {t('clearHistory.button')}
            </Button>
            {showClearHistoryConfirm && (
              <div className="p-4 bg-error/10 border-2 border-error rounded-lg">
                <p className="mb-4">{t('clearHistory.confirm.message')}</p>
                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    onClick={handleClearHistory}
                    className="flex-1 bg-error hover:bg-error/90"
                  >
                    {t('clearHistory.confirm.delete')}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowClearHistoryConfirm(false)}
                    className="flex-1"
                  >
                    {t('clearHistory.confirm.cancel')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Personality Management */}
        <Card variant="gradient">
          <div className="space-y-4">
            <h2 className="font-semibold text-primary text-lg">{t('clearPersonality.title')}</h2>
            
            {topVibes.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {topVibes.map((vibe) => (
                  <div
                    key={vibe.name}
                    className="px-3 py-2 bg-white rounded-lg border border-gray-200 text-center"
                  >
                    <div className="text-2xl">{vibe.emoji}</div>
                    <div className="text-xs text-gray-600 mt-1">{vibe.name}</div>
                  </div>
                ))}
              </div>
            )}

            <Button
              variant="outline"
              onClick={handleSetNewPersonality}
              className="w-full"
            >
              😊 {t('setNewPersonality.button')}
            </Button>

            <Button
              variant="primary"
              onClick={() => setShowClearPersonalityConfirm(true)}
              disabled={!hasPersonality}
              className="w-full"
            >
              🗑️ {t('clearPersonality.button')}
            </Button>

            {showClearPersonalityConfirm && (
              <div className="p-4 bg-error/10 border-2 border-error rounded-lg">
                <p className="mb-4">{t('clearPersonality.confirm.message')}</p>
                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    onClick={handleClearPersonality}
                    className="flex-1 bg-error hover:bg-error/90"
                  >
                    {t('clearPersonality.confirm.delete')}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowClearPersonalityConfirm(false)}
                    className="flex-1"
                  >
                    {t('clearPersonality.confirm.cancel')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* About */}
        <Card variant="gradient">
          <div className="space-y-4">
            <h2 className="font-semibold text-primary text-lg">{t('about.title')}</h2>
            <p className="text-gray-600">{t('about.appInfo')}</p>
            <div className="space-y-2">
              <a
                href="/privacy-policy.html"
                target="_blank"
                className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                🔒 {t('about.link.privacy')}
              </a>
              <a
                href="/terms-of-service.html"
                target="_blank"
                className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                📄 {t('about.link.terms')}
              </a>
              <a
                href="/support.html"
                target="_blank"
                className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                ❓ {t('about.link.support')}
              </a>
            </div>
          </div>
        </Card>

        {/* Legal */}
        <div className="text-center text-sm text-gray-500 space-y-1">
          <p>{t('legal.copyright')}</p>
          <p>{t('legal.privacy')}</p>
          <p>{t('legal.terms')}</p>
        </div>
      </div>
    </div>
  );
}
