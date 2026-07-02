import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TwidyTools - Free Document & Image Converter',
  description: 'Convert PDF to Office, Images to PDF, Merge, Split & Compress PDFs. 100% Free, No Login Required, Privacy Focused.',
  keywords: ['PDF Converter', 'Image Converter', 'Document Converter', 'Free Online Tools'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
