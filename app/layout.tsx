import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akshay Krishna Varma Buddharaju — AI/ML Engineer',
  description:
    'AI/ML Engineer building production Generative AI, LLM, RAG, computer vision, and MLOps systems. Explore selected work, experience, and impact metrics.',
  generator: 'v0.app',
  keywords: [
    'AI Engineer',
    'Machine Learning Engineer',
    'Generative AI',
    'LLM',
    'RAG',
    'Computer Vision',
    'MLOps',
    'Akshay Krishna Varma Buddharaju',
  ],
  authors: [{ name: 'Akshay Krishna Varma Buddharaju' }],
  openGraph: {
    title: 'Akshay Krishna Varma Buddharaju — AI/ML Engineer',
    description:
      'AI/ML Engineer building production Generative AI, LLM, RAG, computer vision, and MLOps systems.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1020',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
