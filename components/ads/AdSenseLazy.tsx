'use client';

import { useEffect, useRef, useState } from 'react';
import { AdSenseBanner } from './AdSenseBanner';

interface AdSenseLazyProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
  threshold?: number;
}

export function AdSenseLazy({
  slot,
  format,
  responsive,
  style,
  threshold = 0.1,
}: AdSenseLazyProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div ref={ref} style={{ minHeight: '50px', ...style }}>
      {isVisible && (
        <AdSenseBanner
          slot={slot}
          format={format}
          responsive={responsive}
          style={style}
        />
      )}
    </div>
  );
}
