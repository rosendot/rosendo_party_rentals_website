import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mi Fiesta Rentals - Party Rentals Rio Grande Valley',
  description: '¡Hacemos que tu fiesta sea perfecta! Bounce houses, tables, chairs and party rentals in the Rio Grande Valley. Professional delivery and setup.',
  keywords: 'party rentals, bounce house, Rio Grande Valley, McAllen, Mission, Edinburg, fiesta, party supplies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}