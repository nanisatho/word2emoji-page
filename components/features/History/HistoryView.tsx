'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { HistoryCard } from './HistoryCard';
import { HistoryDetail } from './HistoryDetail';
import { historyManager } from '@/lib/managers/HistoryManager';
import type { EmojiResult } from '@/types';

export function HistoryView() {
  const t = useTranslations('history');
  const [history, setHistory] = useState<EmojiResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<EmojiResult | null>(null);

  useEffect(() => {
    loadHistory();

    const handleUpdate = () => loadHistory();
    window.addEventListener('HistoryUpdated', handleUpdate);
    window.addEventListener('HistoryCleared', handleUpdate);

    return () => {
      window.removeEventListener('HistoryUpdated', handleUpdate);
      window.removeEventListener('HistoryCleared', handleUpdate);
    };
  }, []);

  const loadHistory = () => {
    const h = historyManager.loadHistory();
    setHistory(h);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      historyManager.deleteItem(id);
      if (selectedResult?.id === id) {
        setSelectedResult(null);
      }
    }
  };

  if (selectedResult) {
    return (
      <HistoryDetail
        result={selectedResult}
        onBack={() => setSelectedResult(null)}
        onUpdate={loadHistory}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8 text-center">
          🕐 {t('navigation.title')}
        </h1>

        {history.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">{t('empty.title')}</h2>
            <p className="text-gray-500">{t('empty.message')}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((result) => (
              <HistoryCard
                key={result.id}
                result={result}
                onClick={() => setSelectedResult(result)}
                onDelete={() => handleDelete(result.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
