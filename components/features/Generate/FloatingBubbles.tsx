'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const examplePrompts = [
  'birthday party',
  'coffee with friends',
  'beach vacation',
  'pizza night',
  'movie night',
  'workout session',
  'study time',
  'date night',
];

interface FloatingBubblesProps {
  onBubbleClick: (text: string) => void;
  visible: boolean;
}

export function FloatingBubbles({ onBubbleClick, visible }: FloatingBubblesProps) {
  const [bubbles, setBubbles] = useState<Array<{ id: number; text: string; x: number; y: number }>>([]);
  const t = useTranslations('welcome.examples');

  useEffect(() => {
    if (!visible) {
      setBubbles([]);
      return;
    }

    // Create bubbles with random positions
    const newBubbles = examplePrompts.slice(0, 4).map((text, index) => ({
      id: index,
      text,
      x: Math.random() * 80 + 10, // 10-90%
      y: Math.random() * 60 + 20, // 20-80%
    }));

    setBubbles(newBubbles);
  }, [visible]);

  if (!visible || bubbles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
      {bubbles.map((bubble) => (
        <button
          key={bubble.id}
          onClick={() => onBubbleClick(bubble.text)}
          className="absolute pointer-events-auto px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm text-primary border border-primary/30 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 animate-float"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            animationDelay: `${bubble.id * 0.2}s`,
          }}
        >
          {bubble.text}
        </button>
      ))}
    </div>
  );
}
