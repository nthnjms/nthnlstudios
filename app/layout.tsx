import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
  title: 'NTHNL Studios — Creative & Digital Agency',
  description: 'Building ideas through design, content, and digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}