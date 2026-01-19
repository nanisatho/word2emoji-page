// EmojiColorCategoryManager matching iOS implementation

import type { EmojiColorCategory } from '@/types';

const colorCategories: EmojiColorCategory[] = [
  {
    id: 'red',
    label: 'Red',
    leftColor: '#FF6B6B',
    rightColor: '#FF8787',
  },
  {
    id: 'orange',
    label: 'Orange',
    leftColor: '#FFA94D',
    rightColor: '#FFB84D',
  },
  {
    id: 'yellow',
    label: 'Yellow',
    leftColor: '#FFD93D',
    rightColor: '#FFE66D',
  },
  {
    id: 'green',
    label: 'Green',
    leftColor: '#6BCB77',
    rightColor: '#95D5A2',
  },
  {
    id: 'blue',
    label: 'Blue',
    leftColor: '#4D96FF',
    rightColor: '#6BB6FF',
  },
  {
    id: 'purple',
    label: 'Purple',
    leftColor: '#9B59B6',
    rightColor: '#BB7DD9',
  },
  {
    id: 'pink',
    label: 'Pink',
    leftColor: '#FF69B4',
    rightColor: '#FF8CC8',
  },
];

class EmojiColorCategoryManager {
  private static instance: EmojiColorCategoryManager;

  private constructor() {}

  static getInstance(): EmojiColorCategoryManager {
    if (!EmojiColorCategoryManager.instance) {
      EmojiColorCategoryManager.instance = new EmojiColorCategoryManager();
    }
    return EmojiColorCategoryManager.instance;
  }

  get categories(): EmojiColorCategory[] {
    return colorCategories;
  }

  category(id: string): EmojiColorCategory | undefined {
    return colorCategories.find((cat) => cat.id === id);
  }
}

export const emojiColorCategoryManager = EmojiColorCategoryManager.getInstance();
