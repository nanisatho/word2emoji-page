import { setRequestLocale } from 'next-intl/server';
import { WelcomeView } from '@/components/features/Welcome/WelcomeView';
import { locales } from '@/i18n/index';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function WelcomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WelcomeView />;
}
