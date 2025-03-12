import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Rakshit Kharb',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${jetbrainsMono.className}`}
        style={{
          '--line-height': '1.20rem',
          '--border-thickness': '2px',
          '--text-color': '#000',
          '--text-color-alt': '#666',
          '--background-color': '#fff',
          '--background-color-alt': '#eee',
          '--blog-image-opacity': '1.0',
          '--see-image-opacity': '1.0',
          fontOpticalSizing: 'auto',
          fontStyle: 'normal',
          fontVariantNumeric: 'tabular-nums lining-nums',
          backgroundColor: '#fffdf0'
        } as React.CSSProperties}
      >
        <div className="fixed bottom-0 left-0 right-0 bg-[#fffdf0] p-4">
          <div className="mx-auto max-w-3xl flex justify-center space-x-8">
            <a
              href="https://github.com/RakshitKharb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-lg"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/RakshitKharb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-lg"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/rakshit-kharb-a23a05207/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
