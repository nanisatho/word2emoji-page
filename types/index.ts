// Core data models matching iOS app

export interface EmojiOption {
  id: string;
  emoji: string;
  description: string;
  vibe: string;
  isLiked: boolean;
  isDisliked: boolean;
}

export interface EmojiResult {
  id: string;
  input: string;
  emojiOptions: EmojiOption[];
  timestamp: Date;
}

export interface UserVibe {
  name: string;
  weight: number;
  emoji: string;
  id?: string;
}

export interface FavoriteEmoji {
  emoji: string;
  weight: number;
}

export interface UserData {
  user_vibes: UserVibe[];
  favorite_emojis: FavoriteEmoji[];
}

export interface AppDataStorage {
  user: UserData;
  forbidden_emojis: string[];
  emoji_history: EmojiResult[];
  last_open_date: string;
  settings: Record<string, string>;
}

export interface EmojiColorCategory {
  id: string;
  label: string;
  leftColor: string;
  rightColor: string;
  localizedLabel?: string;
}

export interface EmojiSheetData {
  emojis: string[];
  emojiOptionId: string;
}

export interface VibeDisplay {
  name: string;
  emoji: string;
}
