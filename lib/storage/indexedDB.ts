// IndexedDB wrapper for larger data storage

import { openDB, DBSchema, IDBPDatabase } from 'idb';
import type { EmojiResult, AppDataStorage } from '@/types';

interface Word2EmojiDB extends DBSchema {
  history: {
    key: string;
    value: EmojiResult;
    indexes: { 'by-timestamp': Date };
  };
  personality: {
    key: string;
    value: AppDataStorage;
  };
}

const DB_NAME = 'word2emoji-db';
const DB_VERSION = 1;

let dbInstance: IDBPDatabase<Word2EmojiDB> | null = null;

export class IndexedDB {
  static async getDB(): Promise<IDBPDatabase<Word2EmojiDB>> {
    if (dbInstance) return dbInstance;
    
    dbInstance = await openDB<Word2EmojiDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        // History store
        if (!db.objectStoreNames.contains('history')) {
          const historyStore = db.createObjectStore('history', { keyPath: 'id' });
          historyStore.createIndex('by-timestamp', 'timestamp');
        }
        
        // Personality store
        if (!db.objectStoreNames.contains('personality')) {
          db.createObjectStore('personality', { keyPath: 'key' });
        }
      },
    });
    
    return dbInstance;
  }
  
  static async saveHistory(result: EmojiResult): Promise<boolean> {
    try {
      const db = await this.getDB();
      await db.put('history', result);
      return true;
    } catch (error) {
      console.error('Error saving history to IndexedDB:', error);
      return false;
    }
  }
  
  static async getHistory(): Promise<EmojiResult[]> {
    try {
      const db = await this.getDB();
      const results = await db.getAll('history');
      return results.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    } catch (error) {
      console.error('Error reading history from IndexedDB:', error);
      return [];
    }
  }
  
  static async deleteHistoryItem(id: string): Promise<boolean> {
    try {
      const db = await this.getDB();
      await db.delete('history', id);
      return true;
    } catch (error) {
      console.error('Error deleting history item from IndexedDB:', error);
      return false;
    }
  }
  
  static async clearHistory(): Promise<boolean> {
    try {
      const db = await this.getDB();
      await db.clear('history');
      return true;
    } catch (error) {
      console.error('Error clearing history from IndexedDB:', error);
      return false;
    }
  }
  
  static async savePersonality(data: AppDataStorage): Promise<boolean> {
    try {
      const db = await this.getDB();
      await db.put('personality', { key: 'user_data', ...data } as any);
      return true;
    } catch (error) {
      console.error('Error saving personality to IndexedDB:', error);
      return false;
    }
  }
  
  static async getPersonality(): Promise<AppDataStorage | null> {
    try {
      const db = await this.getDB();
      const data = await db.get('personality', 'user_data');
      if (!data) return null;
      const { key, ...personalityData } = data as any;
      return personalityData as AppDataStorage;
    } catch (error) {
      console.error('Error reading personality from IndexedDB:', error);
      return null;
    }
  }
}
