import type { Metadata } from 'next'
import { Fredoka, Nunito, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Primary display font - fun and rounded for headings
const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap'
})

// Secondary font - energetic and friendly for body text
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap'
})

// Fallback font - Inter for any technical text
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Gran Fiesta Rentals - Party Rentals Rio Grande Valley',
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
      <body className={`${fredoka.variable} ${nunito.variable} ${inter.variable} font-nunito antialiased`}>
        <Header />
        <main className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/party_landscape.webp)' }}>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-pink-50/40 to-purple-50/40"></div>
          <div className="relative z-10">
            {children}
          </div>
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}