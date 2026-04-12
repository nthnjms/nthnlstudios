import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/ui/CustomCursor'
import LoadingScreen from '@/components/LoadingScreen'

export const metadata: Metadata = {
  title: 'NTHNL Studios — Creative & Digital Agency',
  description: 'NTHNL Studios is a premium creative and digital agency offering branding, content creation, and web design & development.',
  keywords: [
    'creative agency',
    'branding agency',
    'web design',
    'content creation',
    'digital studio',
    'Philippines creative agency',
    'NTHNL Studios',
  ],
  authors: [{ name: 'NTHNL Studios', url: 'https://nthnlstudios.vercel.app' }],
  creator: 'NTHNL Studios',
  metadataBase: new URL('https://nthnlstudios.vercel.app'),
  openGraph: {
    type: 'website',
    url: 'https://nthnlstudios.vercel.app',
    title: 'NTHNL Studios — Creative & Digital Agency',
    description: 'Building ideas through design, content, and digital experiences that demand attention.',
    siteName: 'NTHNL Studios',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NTHNL Studios — Creative & Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NTHNL Studios — Creative & Digital Agency',
    description: 'Building ideas through design, content, and digital experiences that demand attention.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}