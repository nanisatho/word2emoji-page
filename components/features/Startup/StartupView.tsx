'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { dataStorageManager } from '@/lib/managers/DataStorageManager';
import { LocalStorage } from '@/lib/storage/localStorage';
import type { UserVibe } from '@/types';

const MAX_SELECTIONS = 5;

export function StartupView() {
  const t = useTranslations('startup');
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';
  const [userVibes, setUserVibes] = useState<UserVibe[]>([]);
  const [selectedVibes, setSelectedVibes] = useState<UserVibe[]>([]);

  useEffect(() => {
    loadUserVibes();
  }, []);

  const loadUserVibes = async () => {
    try {
      const response = await fetch('/data/user_vibes.json');
      const data = await response.json();
      // Shuffle vibes
      const shuffled = [...data.user_vibes].sort(() => Math.random() - 0.5);
      setUserVibes(shuffled);
    } catch (error) {
      console.error('Error loading user vibes:', error);
    }
  };

  const handleSelectVibe = (vibe: UserVibe) => {
    if (selectedVibes.length >= MAX_SELECTIONS) return;
    if (selectedVibes.some((v) => v.name === vibe.name)) return;

    setSelectedVibes([...selectedVibes, vibe]);
  };

  const handleRemoveVibe = (vibe: UserVibe) => {
    setSelectedVibes(selectedVibes.filter((v) => v.name !== vibe.name));
  };

  const handleContinue = () => {
    // Update vibe weights
    const appData = dataStorageManager.loadData();
    if (!appData) return;

    const selectedEmojis = new Set(selectedVibes.map((v) => v.emoji));
    appData.user.user_vibes = appData.user.user_vibes.map((vibe) => {
      if (selectedEmojis.has(vibe.emoji)) {
        return { ...vibe, weight: vibe.weight + 3.0 };
      }
      return vibe;
    });

    dataStorageManager.updateData(appData);
    LocalStorage.set('startup_completed', true);
    router.push(`/${locale}`);
  };

  const availableVibes = userVibes.filter(
    (vibe) => !selectedVibes.some((sv) => sv.name === vibe.name)
  );

  return (
    <div className="min-h-screen bg-gradient-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8 text-center">
          {selectedVibes.length >= MAX_SELECTIONS ? '😉' : '✨'} {t('title')}
        </h1>

        {/* Selected Vibes Display */}
        {selectedVibes.length > 0 && (
          <Card variant="gradient">
            <div className="space-y-3">
              <h2 className="font-semibold text-primary">
                {selectedVibes.length} / {MAX_SELECTIONS} Selected
              </h2>
              <div className="flex flex-wrap gap-2">
                {selectedVibes.map((vibe) => (
                  <button
                    key={vibe.name}
                    onClick={() => handleRemoveVibe(vibe)}
                    className="px-4 py-2 bg-white rounded-lg border-2 border-primary hover:bg-primary/10 transition-colors"
                  >
                    <div className="text-2xl">{vibe.emoji}</div>
                    <div className="text-xs text-gray-600 mt-1">{vibe.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Vibe Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {availableVibes.map((vibe) => (
            <button
              key={vibe.name}
              onClick={() => handleSelectVibe(vibe)}
              disabled={selectedVibes.length >= MAX_SELECTIONS}
              className="p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="text-4xl mb-2">{vibe.emoji}</div>
              <div className="text-sm text-gray-700">{vibe.name}</div>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        {selectedVibes.length >= MAX_SELECTIONS && (
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setSelectedVibes([])}
              className="flex-1"
            >
              {t('startAgain')}
            </Button>
            <Button
              variant="primary"
              onClick={handleContinue}
              className="flex-1"
            >
              {t('continue')} →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
