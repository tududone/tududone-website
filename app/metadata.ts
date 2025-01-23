import { Metadata } from 'next';

const siteConfig = {
  title: 'Tududone - Remodelação de Apartamentos',
  description: 'Transformamos apartamentos antigos em espaços modernos e funcionais. Especialistas em remodelação total de apartamentos em Almada, Portugal.',
  url: 'https://tududone.com',
  siteName: 'Tududone',
  locale: 'pt-PT',
  type: 'website',
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tududone - Remodelação de Apartamentos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  authors: [{ name: 'Tududone' }],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
}; 