import { dataStorageManager } from '@/lib/managers/DataStorageManager';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('DataStorageManager', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should initialize with default data', async () => {
    await dataStorageManager.initializeIfNeeded();
    const vibes = dataStorageManager.getUserVibes();
    expect(vibes.length).toBeGreaterThan(0);
  });

  test('should update vibe weight', () => {
    dataStorageManager.updateVibeWeight('vibe.creative', 1.0);
    const vibes = dataStorageManager.getUserVibes();
    const creative = vibes.find((v) => v.name === 'vibe.creative');
    expect(creative?.weight).toBeGreaterThan(0);
  });

  test('should check personality data', () => {
    const hasData = dataStorageManager.hasPersonalityData();
    expect(typeof hasData).toBe('boolean');
  });
});
