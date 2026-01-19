'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { emojiColorCategoryManager } from '@/lib/managers/EmojiColorCategoryManager';
import { dataStorageManager } from '@/lib/managers/DataStorageManager';
import type { UserVibe } from '@/types';

interface AdvancedSettingsProps {
  useEmojiPersonality: boolean;
  onPersonalityChange: (value: boolean) => void;
  selectedColorPalette: string | null;
  onColorPaletteChange: (id: string | null) => void;
  selectedEmojiCount: number | null;
  onEmojiCountChange: (count: number | null) => void;
}

export function AdvancedSettings({
  useEmojiPersonality,
  onPersonalityChange,
  selectedColorPalette,
  onColorPaletteChange,
  selectedEmojiCount,
  onEmojiCountChange,
}: AdvancedSettingsProps) {
  const t = useTranslations('generate');
  const [isOpen, setIsOpen] = useState(false);
  const hasPersonalityData = dataStorageManager.hasPersonalityData();
  const topVibes = dataStorageManager
    .getUserVibes()
    .filter((v) => v.weight > 0)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 5);

  const categories = emojiColorCategoryManager.categories;

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white/70 rounded-xl border-2 border-accent/30 hover:border-accent/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚙️</span>
          <span className="font-semibold text-lg">{t('advanced.title')}</span>
        </div>
        <span className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`}>
          ▶
        </span>
      </button>

      {isOpen && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
          {/* Personality Toggle */}
          <Card variant="gradient">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-primary">{t('toggle.emojiPersonality.label')}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {t('toggle.emojiPersonality.description')}
                    {topVibes.length > 0 && (
                      <span className="ml-2">{topVibes.map((v) => v.emoji).join('')}</span>
                    )}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useEmojiPersonality}
                    onChange={(e) => onPersonalityChange(e.target.checked)}
                    disabled={!hasPersonalityData}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              {!hasPersonalityData && (
                <p className="text-xs text-gray-500">{t('toggle.emojiPersonality.notSet')}</p>
              )}
            </div>
          </Card>

          {/* Color Palette */}
          <Card variant="gradient">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-primary">{t('advanced.colorPalette.label')}</h3>
                  <p className="text-sm text-gray-600 mt-1">{t('advanced.colorPalette.description')}</p>
                </div>
                {selectedColorPalette && (
                  <button
                    onClick={() => onColorPaletteChange(null)}
                    className="text-xs text-accent hover:underline"
                  >
                    {t('advanced.clear')}
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() =>
                      onColorPaletteChange(selectedColorPalette === category.id ? null : category.id)
                    }
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColorPalette === category.id
                        ? 'border-primary scale-110 shadow-lg'
                        : 'border-gray-300 hover:border-primary/50'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${category.leftColor} 0%, ${category.rightColor} 100%)`,
                    }}
                    title={category.label}
                  />
                ))}
              </div>
            </div>
          </Card>

          {/* Emoji Count */}
          <Card variant="gradient">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-primary">{t('advanced.emojiCount.label')}</h3>
                  <p className="text-sm text-gray-600 mt-1">{t('advanced.emojiCount.description')}</p>
                </div>
                {selectedEmojiCount && (
                  <button
                    onClick={() => onEmojiCountChange(null)}
                    className="text-xs text-accent hover:underline"
                  >
                    {t('advanced.clear')}
                  </button>
                )}
              </div>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => onEmojiCountChange(selectedEmojiCount === num ? null : num)}
                    className={`w-12 h-12 rounded-xl font-semibold transition-all ${
                      selectedEmojiCount === num
                        ? 'bg-gradient-action text-white scale-110 shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
