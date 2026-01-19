'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils/cn';

export function Navigation() {
  const t = useTranslations('tab');
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';

  const tabs = [
    { key: 'generate', href: `/${locale}`, icon: '✨' },
    { key: 'history', href: `/${locale}/history`, icon: '🕐' },
    { key: 'settings', href: `/${locale}/settings`, icon: '⚙️' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-200 z-40">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href || (tab.key === 'generate' && pathname === `/${locale}`);
            return (
              <Link
                key={tab.key}
                href={tab.href}
                className={cn(
                  'flex flex-col items-center gap-1 px-4 py-3 transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                )}
              >
                <span className="text-2xl">{tab.icon}</span>
                <span className="text-xs font-medium">{t(tab.key)}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
