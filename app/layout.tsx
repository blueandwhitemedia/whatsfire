import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://whatsfire.com'),
  title: {
    default: "What's FIRE? — Financial Independence & Early Retirement Guide",
    template: "%s | What's FIRE?",
  },
  description:
    'Learn how to achieve financial independence and retire early. Plain-English guides, calculators, and tools for every income level.',
  keywords: [
    'FIRE movement',
    'financial independence',
    'retire early',
    'FIRE number',
    '4% rule',
    'index fund investing',
    'early retirement',
  ],
  openGraph: {
    type: 'website',
    siteName: "What's FIRE?",
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
