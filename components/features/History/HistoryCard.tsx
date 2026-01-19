'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/Card';
import type { EmojiResult } from '@/types';

interface HistoryCardProps {
  result: EmojiResult;
  onClick: () => void;
  onDelete: () => void;
}

export function HistoryCard({ result, onClick, onDelete }: HistoryCardProps) {
  const t = useTranslations('history');
  const firstEmoji = result.emojiOptions[0]?.emoji || '';

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return t('time.justNow');
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <Card
      variant="outline"
      className="cursor-pointer hover:shadow-xl transition-all group"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
          {firstEmoji.slice(0, 3)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 truncate">{result.input}</p>
          <p className="text-sm text-gray-500 mt-1">{formatTime(result.timestamp)}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="opacity-0 group-hover:opacity-100 p-2 text-error hover:bg-error/10 rounded-lg transition-all"
          title={t('delete')}
        >
          🗑️
        </button>
      </div>
    </Card>
  );
}
