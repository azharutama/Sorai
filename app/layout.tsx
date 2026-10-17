import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Sonora — Find your frequency.',
  description: 'Alat musik pilihan untuk bunyi yang hanya bisa kamu ciptakan.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f5f2ec' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={`${body.variable} ${display.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
