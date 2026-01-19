// GeminiProxy for Firebase Functions integration

import { httpsCallable } from 'firebase/functions';
import { functions } from '@/lib/firebase/config';
import { InputSanitizer } from '@/lib/utils/sanitizer';
import { dataStorageManager } from './DataStorageManager';
import type { EmojiOption } from '@/types';

interface GenerateEmojiOptions {
  useEmojiPersonality?: boolean;
  colorPalette?: string;
  emojiCount?: number;
}

export class GeminiProxy {
  private functions = functions;

  async getEmoji(
    text: string,
    options: GenerateEmojiOptions = {}
  ): Promise<EmojiOption[]> {
    // Sanitize input
    const sanitizedText = InputSanitizer.sanitize(text);

    if (!sanitizedText) {
      throw new Error('Input is empty after sanitization');
    }

    // Get top 5 vibes
    const userVibes = dataStorageManager.getUserVibes();
    const top5Vibes = userVibes
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 5)
      .map((vibe) => vibe.name);

    // Detect language
    const languageCode = this.detectLanguage();

    // Prepare payload
    const data: Record<string, any> = {
      text: sanitizedText,
      language: languageCode,
      useEmojiPersonality: options.useEmojiPersonality || false,
    };

    if (top5Vibes.length > 0) {
      data.user_vibes = top5Vibes;
    }

    // Add optional parameters
    if (options.colorPalette) {
      // Convert color palette ID to label if needed
      data.colorPalette = options.colorPalette;
    }

    if (options.emojiCount) {
      data.emojiCount = options.emojiCount;
    }

    try {
      const generateEmojiFn = httpsCallable(this.functions, 'generateEmoji');
      const result = await generateEmojiFn(data);

      return this.parseEmojiResponse(result.data);
    } catch (error: any) {
      console.error('GeminiProxy error:', error);
      throw this.handleError(error);
    }
  }

  private detectLanguage(): string {
    if (typeof window === 'undefined') return 'en';

    const preferredLanguage = navigator.language || 'en';
    const locale = new Intl.Locale(preferredLanguage);

    const languageCode = locale.language;
    const script = locale.script;
    const region = locale.region;

    // Handle special cases
    if (languageCode === 'zh' && script === 'Hans') {
      return 'zh-Hans';
    }
    if (languageCode === 'pt' && region === 'BR') {
      return 'pt-BR';
    }

    return languageCode;
  }

  private parseEmojiResponse(data: any): EmojiOption[] {
    // Handle different response formats
    if (Array.isArray(data)) {
      // Direct array of emoji strings
      return data.map((emoji) => ({
        id: crypto.randomUUID(),
        emoji: typeof emoji === 'string' ? emoji : emoji.emoji || '',
        description: typeof emoji === 'object' ? emoji.description || '' : '',
        vibe: typeof emoji === 'object' ? emoji.vibe || '' : '',
        isLiked: false,
        isDisliked: false,
      }));
    }

    if (typeof data === 'object' && data !== null) {
      // Dictionary format
      if (Array.isArray(data.emojis)) {
        return data.emojis.map((item: any) => ({
          id: crypto.randomUUID(),
          emoji: item.emoji || '',
          description: item.description || '',
          vibe: item.vibe || '',
          isLiked: false,
          isDisliked: false,
        }));
      }

      if (Array.isArray(data.options)) {
        return data.options.map((emoji: string) => ({
          id: crypto.randomUUID(),
          emoji,
          description: '',
          vibe: '',
          isLiked: false,
          isDisliked: false,
        }));
      }

      if (typeof data.emoji === 'string') {
        return [
          {
            id: crypto.randomUUID(),
            emoji: data.emoji,
            description: data.description || '',
            vibe: data.vibe || '',
            isLiked: false,
            isDisliked: false,
          },
        ];
      }
    }

    if (typeof data === 'string') {
      return [
        {
          id: crypto.randomUUID(),
          emoji: data,
          description: '',
          vibe: '',
          isLiked: false,
          isDisliked: false,
        },
      ];
    }

    throw new Error('Invalid response format from backend');
  }

  private handleError(error: any): Error {
    let errorMessage = 'An error occurred while generating emojis';

    if (error?.code === 'functions/internal') {
      const message = error.message?.toLowerCase() || '';
      if (
        message.includes('content policy') ||
        message.includes('safety') ||
        message.includes('blocked')
      ) {
        errorMessage = 'Content violates our content policy';
      } else {
        errorMessage = 'Internal server error. Please try again.';
      }
    } else if (error?.code === 'functions/invalid-argument') {
      errorMessage = 'Invalid input. Please check your text and try again.';
    } else if (error?.code === 'functions/permission-denied') {
      errorMessage = 'Permission denied. Please check your connection.';
    } else if (error?.code === 'functions/unauthenticated') {
      errorMessage = 'Authentication required. Please refresh the page.';
    } else if (error?.code === 'functions/unavailable' || error?.code === 'functions/deadline-exceeded') {
      errorMessage = 'Service temporarily unavailable. Please try again later.';
    } else if (error?.message) {
      errorMessage = error.message;
    }

    return new Error(errorMessage);
  }
}

export const geminiProxy = new GeminiProxy();
