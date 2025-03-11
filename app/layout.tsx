import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
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
      <body className={`${jetbrainsMono.className} bg-[#fffdf0]`}>
        <div className="fixed bottom-0 left-0 right-0 bg-[#fffdf0] p-4">
          <div className="mx-auto max-w-3xl flex justify-center space-x-4">
            <a
              href="https://github.com/RakshitKharb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/RakshitKharb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Twitter
            </a>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
} 