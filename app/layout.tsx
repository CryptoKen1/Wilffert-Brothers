import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wilffert Brothers',
  description: 'Two brothers sharing the essentials every man needs for life, style, and sharpening his edge. Real-life tested, straightforward, and made for men who want the best.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

