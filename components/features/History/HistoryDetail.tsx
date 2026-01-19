'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { dataStorageManager } from '@/lib/managers/DataStorageManager';
import { historyManager } from '@/lib/managers/HistoryManager';
import type { EmojiResult } from '@/types';

interface HistoryDetailProps {
  result: EmojiResult;
  onBack: () => void;
  onUpdate: () => void;
}

export function HistoryDetail({ result, onBack, onUpdate }: HistoryDetailProps) {
  const t = useTranslations('history');
  const [copiedIndex, setCopiedIndex] = React.useState<string | null>(null);

  const handleCopy = async (emoji: string, id: string) => {
    try {
      await navigator.clipboard.writeText(emoji);
      setCopiedIndex(id);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleFeedback = (optionId: string, isLiked: boolean) => {
    const option = result.emojiOptions.find((opt) => opt.id === optionId);
    if (option?.vibe) {
      const weightDelta = isLiked ? 1.0 : -1.0;
      dataStorageManager.updateVibeWeight(option.vibe, weightDelta);
    }

    historyManager.updateEmojiOptionFeedbackStatus(result.input, optionId, isLiked, !isLiked);
    onUpdate();
  };

  return (
    <div className="min-h-screen bg-gradient-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={onBack}>
            ← {t('detail.done')}
          </Button>
        </div>

        <Card variant="gradient">
          <div className="space-y-3">
            <h3 className="font-semibold text-primary">{t('detail.input.label')}</h3>
            <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{result.input}</p>
          </div>
        </Card>

        <Card variant="gradient">
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">
              {t('detail.emojiOptions.label')} ({result.emojiOptions.length})
            </h3>
            <div className="space-y-3">
              {result.emojiOptions.map((option) => (
                <div
                  key={option.id}
                  className="p-4 bg-white rounded-xl border-2 border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-4xl mb-2">{option.emoji}</div>
                      {option.description && (
                        <p className="text-sm text-gray-600 mb-1">{option.description}</p>
                      )}
                      {option.vibe && (
                        <p className="text-xs text-gray-500 italic">{option.vibe}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleFeedback(option.id, true)}
                        className={`p-2 rounded-lg transition-colors ${
                          option.isLiked
                            ? 'bg-success/20 text-success'
                            : 'bg-gray-100 text-gray-600 hover:bg-success/10'
                        }`}
                      >
                        👍
                      </button>
                      <button
                        onClick={() => handleFeedback(option.id, false)}
                        className={`p-2 rounded-lg transition-colors ${
                          option.isDisliked
                            ? 'bg-error/20 text-error'
                            : 'bg-gray-100 text-gray-600 hover:bg-error/10'
                        }`}
                      >
                        👎
                      </button>
                      <button
                        onClick={() => handleCopy(option.emoji, option.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          copiedIndex === option.id
                            ? 'bg-success/20 text-success'
                            : 'bg-gray-100 text-gray-600 hover:bg-primary/10'
                        }`}
                      >
                        {copiedIndex === option.id ? '✓' : '📋'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
