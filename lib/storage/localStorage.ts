// localStorage wrapper for data persistence

const STORAGE_KEYS = {
  HISTORY: 'emoji_history',
  PERSONALITY: 'app_data_storage',
  TUTORIAL_COMPLETED: 'generate_tutorial_completed',
  WELCOME_SHOWN: 'welcome_shown',
  STARTUP_COMPLETED: 'startup_completed',
  LAST_OPEN_DATE: 'last_open_date',
  DATA_STORAGE_INITIALIZED: 'data_storage_initialized',
  AD_CONSENT: 'ad_consent',
} as const;

export class LocalStorage {
  static get<T>(key: string, defaultValue?: T): T | null {
    if (typeof window === 'undefined') return defaultValue ?? null;
    
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) return defaultValue ?? null;
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return defaultValue ?? null;
    }
  }
  
  static set<T>(key: string, value: T): boolean {
    if (typeof window === 'undefined') return false;
    
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error writing to localStorage key "${key}":`, error);
      return false;
    }
  }
  
  static remove(key: string): boolean {
    if (typeof window === 'undefined') return false;
    
    try {
      window.localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
      return false;
    }
  }
  
  static clear(): boolean {
    if (typeof window === 'undefined') return false;
    
    try {
      window.localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  }
  
  static getKeys(): typeof STORAGE_KEYS {
    return STORAGE_KEYS;
  }
}
