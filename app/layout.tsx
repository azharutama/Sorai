import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'sorai | Toko Alat Musik Pilihan',
  description: 'Temukan gitar elektrik, synthesizer, dan alat musik pilihan di sorai untuk menciptakan bunyi yang terasa personal.',
  keywords: [
    'toko alat musik',
    'alat musik Jakarta',
    'gitar elektrik',
    'synthesizer',
    'alat musik berkualitas',
    'sorai Music',
  ],
  applicationName: 'sorai',
  authors: [{ name: 'sorai Music Co.' }],
  creator: 'sorai Music Co.',
  publisher: 'sorai Music Co.',
  category: 'music',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    title: 'sorai | Toko Alat Musik Pilihan',
    description: 'Temukan gitar elektrik, synthesizer, dan alat musik pilihan di sorai.',
    siteName: 'sorai Music Co.',
    images: ['/hero-instrument.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sorai | Toko Alat Musik Pilihan',
    description: 'Temukan gitar elektrik, synthesizer, dan alat musik pilihan di sorai.',
    images: ['/hero-instrument.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f5f2ec' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MusicStore',
    name: 'sorai Music Co.',
    description: 'Toko alat musik pilihan untuk gitar elektrik, synthesizer, dan kebutuhan musik lainnya.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Kemang Raya 12',
      addressLocality: 'Jakarta Selatan',
      addressCountry: 'ID',
    },
    sameAs: ['https://shopee.co.id/'],
  }

  return <html lang="id"><body className={`${body.variable} ${display.variable} antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
