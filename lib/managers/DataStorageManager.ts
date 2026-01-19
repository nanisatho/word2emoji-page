// DataStorageManager matching iOS implementation

import { LocalStorage } from '@/lib/storage/localStorage';
import { IndexedDB } from '@/lib/storage/indexedDB';
import type { AppDataStorage, UserVibe } from '@/types';

class DataStorageManager {
  private static instance: DataStorageManager;
  private storageKey = 'app_data_storage';
  private initializedKey = 'data_storage_initialized';

  private constructor() {}

  static getInstance(): DataStorageManager {
    if (!DataStorageManager.instance) {
      DataStorageManager.instance = new DataStorageManager();
    }
    return DataStorageManager.instance;
  }

  async initializeIfNeeded(): Promise<void> {
    const isInitialized = LocalStorage.get<boolean>(this.initializedKey, false);
    if (isInitialized) {
      return;
    }

    try {
      const response = await fetch('/data/data_storage_init_state.json');
      if (!response.ok) {
        console.error('Could not find data_storage_init_state.json');
        return;
      }

      const initialData: AppDataStorage = await response.json();
      await this.saveData(initialData);
      LocalStorage.set(this.initializedKey, true);
      console.log('Successfully initialized data storage from JSON');
    } catch (error) {
      console.error('Error loading initial data storage:', error);
    }
  }

  getUserVibes(): UserVibe[] {
    const appData = this.loadData();
    if (!appData) {
      return [];
    }
    return appData.user.user_vibes;
  }

  emojiForVibeName(vibeName: string): string | undefined {
    const trimmed = vibeName.trim();
    if (!trimmed) return undefined;

    const cleanedVibeName = this.cleanVibeName(trimmed);
    const normalizedCleanedName = this.normalizeForComparison(cleanedVibeName);

    return this.getUserVibes().find((vibe) => {
      return this.normalizeForComparison(vibe.name) === normalizedCleanedName;
    })?.emoji;
  }

  loadData(): AppDataStorage | null {
    const data = LocalStorage.get<AppDataStorage>(this.storageKey);
    return data;
  }

  private async saveData(data: AppDataStorage): Promise<void> {
    LocalStorage.set(this.storageKey, data);
    await IndexedDB.savePersonality(data);
  }

  updateData(data: AppDataStorage): void {
    this.saveData(data);
  }

  private normalizeForComparison(vibeName: string): string {
    return vibeName.toLowerCase().replace(/\./g, '_');
  }

  private cleanVibeName(vibeName: string): string {
    let cleaned = vibeName;

    // Remove emojis using Unicode scalar filtering
    cleaned = Array.from(cleaned)
      .filter((char) => {
        const code = char.codePointAt(0);
        if (!code) return false;
        return !(
          (code >= 0x1f300 && code <= 0x1f9ff) || // Miscellaneous Symbols and Pictographs
          (code >= 0x1f600 && code <= 0x1f64f) || // Emoticons
          (code >= 0x1f680 && code <= 0x1f6ff) || // Transport and Map Symbols
          (code >= 0x2600 && code <= 0x26ff) || // Miscellaneous Symbols
          (code >= 0x2700 && code <= 0x27bf) // Dingbats
        );
      })
      .join('');

    cleaned = cleaned.trim().toLowerCase().replace(/\s+/g, '_').replace(/\./g, '_');
    return cleaned;
  }

  updateVibeWeight(vibeName: string, weightDelta: number = 1.0): void {
    console.log(`[DataStorageManager] updateVibeWeight called - vibeName: '${vibeName}', weightDelta: ${weightDelta}`);

    const cleanedVibeName = this.cleanVibeName(vibeName);
    const appData = this.loadData();

    if (!appData) {
      console.error('[DataStorageManager] ERROR: Cannot update vibe weight - No data loaded');
      return;
    }

    const normalizedCleanedName = this.normalizeForComparison(cleanedVibeName);

    const vibeIndex = appData.user.user_vibes.findIndex((vibe) => {
      return this.normalizeForComparison(vibe.name) === normalizedCleanedName;
    });

    if (vibeIndex !== -1) {
      const vibe = appData.user.user_vibes[vibeIndex];
      const currentWeight = vibe.weight;
      const newWeight = currentWeight + weightDelta;

      appData.user.user_vibes[vibeIndex] = {
        ...vibe,
        weight: newWeight,
      };

      this.updateData(appData);

      // Dispatch custom event for reactivity
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('PersonalityUpdated'));
      }

      console.log(
        `[DataStorageManager] SUCCESS: Updated vibe '${cleanedVibeName}' weight from ${currentWeight} to ${newWeight}`
      );
    } else {
      console.warn(`[DataStorageManager] WARNING: Vibe '${cleanedVibeName}' not found in user vibes`);
    }
  }

  clearPersonality(): void {
    const appData = this.loadData();
    if (!appData) {
      console.error('[DataStorageManager] ERROR: Cannot clear personality - No data loaded');
      return;
    }

    appData.user.user_vibes = appData.user.user_vibes.map((vibe) => ({
      ...vibe,
      weight: 0.0,
    }));

    this.updateData(appData);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('PersonalityCleared'));
    }

    console.log('[DataStorageManager] SUCCESS: All personality values reset to 0.0');
  }

  hasPersonalityData(): boolean {
    const vibes = this.getUserVibes();
    return vibes.some((vibe) => vibe.weight > 0.0);
  }
}

export const dataStorageManager = DataStorageManager.getInstance();
