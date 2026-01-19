import { useState, useEffect } from 'react';
import { historyManager } from '@/lib/managers/HistoryManager';
import type { EmojiResult } from '@/types';

export function useHistory() {
  const [history, setHistory] = useState<EmojiResult[]>([]);

  useEffect(() => {
    const updateHistory = () => {
      setHistory(historyManager.loadHistory());
    };

    updateHistory();

    window.addEventListener('HistoryUpdated', updateHistory);
    window.addEventListener('HistoryCleared', updateHistory);

    return () => {
      window.removeEventListener('HistoryUpdated', updateHistory);
      window.removeEventListener('HistoryCleared', updateHistory);
    };
  }, []);

  return history;
}
