import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'neuralnets',
  description: 'Personal portfolio of neuralnets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} bg-[#fffdf0]`}>
        {children}
        
        {/* Fixed Social Media Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#fffdf0] border-t border-gray-200 py-4">
          <div className="max-w-3xl mx-auto px-4 flex justify-center items-center space-x-8">
            <a href="https://github.com/RakshitKharb" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">github</a>
            <span className="text-gray-300">|</span>
            <a href="https://www.linkedin.com/in/rakshit-kharb-a23a05207/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">linkedin</a>
            <span className="text-gray-300">|</span>
            <a href="https://x.com/KharbRakshit" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">twitter</a>
          </div>
        </div>

        {/* Add padding at the bottom to prevent content from being hidden behind the fixed bar */}
        <div className="h-16"></div>
      </body>
    </html>
  )
} 