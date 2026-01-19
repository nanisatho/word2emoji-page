'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/Input';
import { FloatingBubbles } from './FloatingBubbles';
import { AdvancedSettings } from './AdvancedSettings';
import { AnimatedGradientButton } from './AnimatedGradientButton';
import { ResultsDisplay } from './ResultsDisplay';
import { geminiProxy } from '@/lib/managers/GeminiProxy';
import { historyManager } from '@/lib/managers/HistoryManager';
import { v4 as uuidv4 } from 'uuid';
import type { EmojiOption, EmojiResult } from '@/types';

const MAX_INPUT_LENGTH = 200;
const MIN_REQUEST_INTERVAL = 2000; // 2 seconds

export function GenerateView() {
  const t = useTranslations('generate');
  const [inputText, setInputText] = useState('');
  const [emojiOptions, setEmojiOptions] = useState<EmojiOption[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [useEmojiPersonality, setUseEmojiPersonality] = useState(false);
  const [selectedColorPalette, setSelectedColorPalette] = useState<string | null>(null);
  const [selectedEmojiCount, setSelectedEmojiCount] = useState<number | null>(null);
  const [lastRequestTime, setLastRequestTime] = useState<Date | null>(null);
  const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);
  const [showBubbles, setShowBubbles] = useState(true);

  useEffect(() => {
    setShowBubbles(inputText.length === 0 && !isTextFieldFocused);
  }, [inputText, isTextFieldFocused]);

  const generateEmojis = useCallback(async () => {
    const trimmedInput = inputText.trim();
    if (!trimmedInput) return;

    // Length validation
    if (trimmedInput.length > MAX_INPUT_LENGTH) {
      setErrorMessage(t('error.inputTooLong', { max: MAX_INPUT_LENGTH }));
      return;
    }

    // Rate limiting
    if (lastRequestTime) {
      const timeSinceLastRequest = Date.now() - lastRequestTime.getTime();
      if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
        setErrorMessage(t('error.rateLimit'));
        return;
      }
    }

    setIsLoading(true);
    setErrorMessage(null);
    setEmojiOptions(null);
    setLastRequestTime(new Date());
    setIsTextFieldFocused(false);

    try {
      const options = await geminiProxy.getEmoji(trimmedInput, {
        useEmojiPersonality,
        colorPalette: selectedColorPalette || undefined,
        emojiCount: selectedEmojiCount || undefined,
      });

      // Apply emoji count filter if selected
      let filteredOptions = options;
      if (selectedEmojiCount) {
        filteredOptions = options.map((opt) => {
          const emojis = Array.from(opt.emoji);
          if (emojis.length > selectedEmojiCount) {
            return {
              ...opt,
              emoji: emojis.slice(0, selectedEmojiCount).join(''),
            };
          }
          return opt;
        });
      }

      setEmojiOptions(filteredOptions);

      // Save to history
      const result: EmojiResult = {
        id: uuidv4(),
        input: trimmedInput,
        emojiOptions: filteredOptions,
        timestamp: new Date(),
      };
      historyManager.save(result);
    } catch (error: any) {
      setErrorMessage(error.message || t('error.internal'));
      console.error('Generation error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [inputText, useEmojiPersonality, selectedColorPalette, selectedEmojiCount, lastRequestTime, t]);

  const handleBubbleClick = (text: string) => {
    setInputText(text);
    setIsTextFieldFocused(true);
  };

  const handleRefresh = useCallback(async () => {
    await generateEmojis();
  }, [generateEmojis]);

  return (
    <div className="min-h-screen bg-gradient-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            ✨ {t('navigation.title')}
          </h1>
          <p className="text-gray-600">{t('empty.message')}</p>
        </div>

        {/* Input Section */}
        <div className="relative">
          <Input
            label={t('input.label')}
            placeholder={t('input.placeholder')}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onFocus={() => setIsTextFieldFocused(true)}
            onBlur={() => setIsTextFieldFocused(false)}
            disabled={isLoading}
            maxLength={MAX_INPUT_LENGTH}
            characterCount={{
              current: inputText.length,
              max: MAX_INPUT_LENGTH,
            }}
            className="min-h-[120px]"
          />
          <FloatingBubbles onBubbleClick={handleBubbleClick} visible={showBubbles} />
        </div>

        {/* Advanced Settings */}
        <AdvancedSettings
          useEmojiPersonality={useEmojiPersonality}
          onPersonalityChange={setUseEmojiPersonality}
          selectedColorPalette={selectedColorPalette}
          onColorPaletteChange={setSelectedColorPalette}
          selectedEmojiCount={selectedEmojiCount}
          onEmojiCountChange={setSelectedEmojiCount}
        />

        {/* Generate Button */}
        <AnimatedGradientButton
          isLoading={isLoading}
          isEnabled={inputText.trim().length > 0}
          onClick={generateEmojis}
        />

        {/* Error Message */}
        {errorMessage && (
          <div className="p-4 bg-error/10 border-2 border-error rounded-lg text-error">
            {errorMessage}
          </div>
        )}

        {/* Results */}
        {emojiOptions && emojiOptions.length > 0 && (
          <ResultsDisplay
            inputText={inputText.trim()}
            emojiOptions={emojiOptions}
            usedEmojiPersonality={useEmojiPersonality}
            selectedColorPalette={selectedColorPalette}
            selectedEmojiCount={selectedEmojiCount}
            onRefresh={handleRefresh}
          />
        )}
      </div>
    </div>
  );
}
