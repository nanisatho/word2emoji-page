import { setRequestLocale } from 'next-intl/server';
import { SettingsView } from '@/components/features/Settings/SettingsView';
import { locales } from '@/i18n/index';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SettingsView />;
}
