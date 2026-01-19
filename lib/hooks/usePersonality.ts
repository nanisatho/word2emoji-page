import { useState, useEffect } from 'react';
import { dataStorageManager } from '@/lib/managers/DataStorageManager';
import type { UserVibe } from '@/types';

export function usePersonality() {
  const [hasPersonality, setHasPersonality] = useState(false);
  const [topVibes, setTopVibes] = useState<UserVibe[]>([]);

  useEffect(() => {
    const updatePersonality = () => {
      setHasPersonality(dataStorageManager.hasPersonalityData());
      const vibes = dataStorageManager
        .getUserVibes()
        .filter((v) => v.weight > 0)
        .sort((a, b) => b.weight - a.weight)
        .slice(0, 5);
      setTopVibes(vibes);
    };

    updatePersonality();

    window.addEventListener('PersonalityUpdated', updatePersonality);
    window.addEventListener('PersonalityCleared', updatePersonality);

    return () => {
      window.removeEventListener('PersonalityUpdated', updatePersonality);
      window.removeEventListener('PersonalityCleared', updatePersonality);
    };
  }, []);

  return { hasPersonality, topVibes };
}
