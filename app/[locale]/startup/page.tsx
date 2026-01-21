import { setRequestLocale } from 'next-intl/server';
import { StartupView } from '@/components/features/Startup/StartupView';
import { locales } from '@/i18n/index';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function StartupPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <StartupView />;
}
