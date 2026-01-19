// HistoryManager matching iOS implementation

import { v4 as uuidv4 } from 'uuid';
import { LocalStorage } from '@/lib/storage/localStorage';
import { IndexedDB } from '@/lib/storage/indexedDB';
import type { EmojiResult, EmojiOption } from '@/types';

class HistoryManager {
  private static instance: HistoryManager;
  private historyKey = 'emoji_history';
  private maxHistorySize = 100;

  private constructor() {}

  static getInstance(): HistoryManager {
    if (!HistoryManager.instance) {
      HistoryManager.instance = new HistoryManager();
    }
    return HistoryManager.instance;
  }

  save(result: EmojiResult): void {
    let history = this.loadHistory();
    history.unshift(result); // Add to beginning

    // Limit history size
    if (history.length > this.maxHistorySize) {
      history = history.slice(0, this.maxHistorySize);
    }

    this.saveHistory(history);

    // Dispatch event for reactivity
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('HistoryUpdated'));
    }
  }

  loadHistory(): EmojiResult[] {
    const data = LocalStorage.get<EmojiResult[]>(this.historyKey);
    if (!data) {
      return [];
    }

    // Convert timestamp strings to Date objects
    return data
      .map((item) => ({
        ...item,
        timestamp: new Date(item.timestamp),
        emojiOptions: item.emojiOptions.map((opt) => ({
          ...opt,
          id: opt.id || uuidv4(),
        })),
      }))
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }

  clearHistory(): void {
    LocalStorage.remove(this.historyKey);
    IndexedDB.clearHistory();

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('HistoryCleared'));
    }
  }

  deleteItem(id: string): void {
    let history = this.loadHistory();
    history = history.filter((item) => item.id !== id);
    this.saveHistory(history);

    IndexedDB.deleteHistoryItem(id);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('HistoryUpdated'));
    }
  }

  updateEmojiOptionFeedbackStatus(
    input: string,
    emojiId: string,
    isLiked: boolean,
    isDisliked: boolean
  ): void {
    let history = this.loadHistory();

    const resultIndex = history.findIndex((result) => result.input === input);
    if (resultIndex === -1) return;

    const result = history[resultIndex];
    const emojiIndex = result.emojiOptions.findIndex((opt) => opt.id === emojiId);
    if (emojiIndex === -1) return;

    const updatedOptions = [...result.emojiOptions];
    updatedOptions[emojiIndex] = {
      ...updatedOptions[emojiIndex],
      isLiked,
      isDisliked,
    };

    history[resultIndex] = {
      ...result,
      emojiOptions: updatedOptions,
    };

    this.saveHistory(history);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('HistoryUpdated'));
    }
  }

  updateEmojiOptionEmoji(input: string, emojiId: string, newEmoji: string): void {
    let history = this.loadHistory();

    const resultIndex = history.findIndex((result) => result.input === input);
    if (resultIndex === -1) return;

    const result = history[resultIndex];
    const emojiIndex = result.emojiOptions.findIndex((opt) => opt.id === emojiId);
    if (emojiIndex === -1) return;

    const updatedOptions = [...result.emojiOptions];
    updatedOptions[emojiIndex] = {
      ...updatedOptions[emojiIndex],
      emoji: newEmoji,
    };

    history[resultIndex] = {
      ...result,
      emojiOptions: updatedOptions,
    };

    this.saveHistory(history);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('HistoryUpdated'));
    }
  }

  private saveHistory(history: EmojiResult[]): void {
    LocalStorage.set(this.historyKey, history);
    // Also save to IndexedDB for larger datasets
    history.forEach((result) => {
      IndexedDB.saveHistory(result);
    });
  }
}

export const historyManager = HistoryManager.getInstance();
