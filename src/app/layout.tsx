import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Portfolio',
  description: 'Showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="#about" className="hover:underline">About</Link></li>
                <li><Link href="#projects" className="hover:underline">Projects</Link></li>
                <li><Link href="#contact" className="hover:underline">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}