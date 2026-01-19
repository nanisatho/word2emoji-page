'use client';

import React, { useEffect } from 'react';
import { app } from '@/lib/firebase/config';
import { dataStorageManager } from '@/lib/managers/DataStorageManager';
import { ConsentBanner } from '@/components/consent/ConsentBanner';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize data storage on client
    dataStorageManager.initializeIfNeeded();
    
    // Load AdSense script if consent given
    const consent = localStorage.getItem('ad_consent');
    if (consent === 'accepted' && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + 
        (process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-1286486326636890');
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      {children}
      <ConsentBanner />
    </>
  );
}
