'use client';

import React, { useState, lazy, Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/Card';
import type { EmojiOption } from '@/types';
import { dataStorageManager } from '@/lib/managers/DataStorageManager';
import { historyManager } from '@/lib/managers/HistoryManager';
import { AdSenseLazy } from '@/components/ads/AdSenseLazy';

interface ResultsDisplayProps {
  inputText: string;
  emojiOptions: EmojiOption[];
  usedEmojiPersonality: boolean;
  selectedColorPalette: string | null;
  selectedEmojiCount: number | null;
  onRefresh: () => Promise<void>;
}

export function ResultsDisplay({
  inputText,
  emojiOptions,
  usedEmojiPersonality,
  selectedColorPalette,
  selectedEmojiCount,
  onRefresh,
}: ResultsDisplayProps) {
  const t = useTranslations('generate');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [isLastRevealed, setIsLastRevealed] = useState(false);

  const handleCopy = async (option: EmojiOption) => {
    try {
      await navigator.clipboard.writeText(option.emoji);
      setCopiedIndex(option.id);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleFeedback = (option: EmojiOption, isLiked: boolean) => {
    // Update vibe weight
    if (option.vibe && option.vibe.trim()) {
      const weightDelta = isLiked ? 1.0 : -1.0;
      dataStorageManager.updateVibeWeight(option.vibe, weightDelta);
    }

    // Update history
    historyManager.updateEmojiOptionFeedbackStatus(
      inputText,
      option.id,
      isLiked,
      !isLiked
    );
  };

  return (
    <div className="space-y-4">
      {/* Ad Banner */}
      <AdSenseLazy
        slot="1480052218"
        format="auto"
        responsive={true}
        style={{ minHeight: '100px' }}
      />

      {/* Header Card */}
      <Card variant="gradient">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-primary mb-2">Input</h3>
            <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{inputText}</p>
          </div>
          {(usedEmojiPersonality || selectedColorPalette || selectedEmojiCount) && (
            <div className="flex flex-wrap gap-2">
              {usedEmojiPersonality && (
                <span className="px-3 py-1 bg-gradient-personality text-white text-xs rounded-full">
                  ✨ {t('results.usingPersonality')}
                </span>
              )}
              {selectedColorPalette && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  🎨 {selectedColorPalette}
                </span>
              )}
              {selectedEmojiCount && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  🔢 {selectedEmojiCount} {selectedEmojiCount === 1 ? t('emojiCount.singular') : t('emojiCount.plural')}
                </span>
              )}
            </div>
          )}
        </div>
      </Card>

      {/* Results */}
      <Card variant="gradient">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-primary">{t('results.title')}</h3>
            <button
              onClick={onRefresh}
              className="text-accent hover:text-primary transition-colors"
              title="Refresh"
            >
              🔄
            </button>
          </div>

          <div className="space-y-3">
            {emojiOptions.map((option, index) => {
              const isLast = index === emojiOptions.length - 1;
              const isBlurred = isLast && !isLastRevealed;

              return (
                <div
                  key={option.id}
                  className={`relative p-4 bg-white rounded-xl border-2 border-gray-200 transition-all ${
                    isBlurred ? 'blur-sm' : ''
                  }`}
                >
                  {isBlurred && (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl cursor-pointer z-10"
                      onClick={() => setIsLastRevealed(true)}
                    >
                      <div className="text-center text-white">
                        <div className="text-2xl mb-2">👁️</div>
                        <div className="font-semibold">{t('touch.to.reveal')}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-4xl mb-2">{option.emoji}</div>
                      {option.description && (
                        <p className="text-sm text-gray-600 mb-1">{option.description}</p>
                      )}
                      {option.vibe && usedEmojiPersonality && (
                        <p className="text-xs text-gray-500 italic">{option.vibe}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleFeedback(option, true)}
                        className={`p-2 rounded-lg transition-colors ${
                          option.isLiked
                            ? 'bg-success/20 text-success'
                            : 'bg-gray-100 text-gray-600 hover:bg-success/10'
                        }`}
                        title={t('contextMenu.loveIt')}
                      >
                        👍
                      </button>
                      <button
                        onClick={() => handleFeedback(option, false)}
                        className={`p-2 rounded-lg transition-colors ${
                          option.isDisliked
                            ? 'bg-error/20 text-error'
                            : 'bg-gray-100 text-gray-600 hover:bg-error/10'
                        }`}
                        title={t('contextMenu.dontLikeIt')}
                      >
                        👎
                      </button>
                      <button
                        onClick={() => handleCopy(option)}
                        className={`p-2 rounded-lg transition-colors ${
                          copiedIndex === option.id
                            ? 'bg-success/20 text-success'
                            : 'bg-gray-100 text-gray-600 hover:bg-primary/10'
                        }`}
                        title={copiedIndex === option.id ? t('common.copied') : t('common.copy')}
                      >
                        {copiedIndex === option.id ? '✓' : '📋'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">{t('results.aiInfo')}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
