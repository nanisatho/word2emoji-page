'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { LocalStorage } from '@/lib/storage/localStorage';

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = LocalStorage.get<string>('ad_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    LocalStorage.set('ad_consent', 'accepted');
    setShowBanner(false);
    // Load AdSense script
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + 
        (process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-1286486326636890');
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  };

  const handleReject = () => {
    LocalStorage.set('ad_consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary shadow-2xl z-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Privacy & Cookies</h3>
            <p className="text-sm text-gray-600">
              We use cookies and show ads to support this free service. By continuing, you agree to our use of cookies and personalized ads.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleReject} size="sm">
              Reject
            </Button>
            <Button variant="primary" onClick={handleAccept} size="sm">
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
