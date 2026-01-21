import { setRequestLocale } from 'next-intl/server';
import { HistoryView } from '@/components/features/History/HistoryView';
import { locales } from '@/i18n/index';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HistoryView />;
}
