import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Socials from '@/components/Socials'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felipe Dias',
  description: 'Portifolio pessoal',
  icons: '/images/Logo.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-neutral-900 dark:text-white`}>
        <main className="w-full h-screen flex flex-col items-center justify-center">
          <Navbar />
          {children}
          <Socials />
        </main>
      </body>
    </html>
  )
}
