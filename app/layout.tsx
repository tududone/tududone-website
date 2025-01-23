import { defaultMetadata } from './metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    images: [
      {
        url: '/images/about/predio-sesimbra.JPG',
        width: 1200,
        height: 800,
        alt: 'Tududone - Remodelação de Apartamentos em Almada',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 