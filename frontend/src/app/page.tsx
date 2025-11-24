'use client'

import Link from 'next/link'
import { PartyPopper, Package, MapPin, HelpCircle, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-[calc(100vh-4rem)] flex items-center">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Title */}
          <div
            className="mb-12"
            style={{
              animation: mounted ? 'fadeInUp 0.6s ease-out both' : 'none'
            }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Your Perfect Party <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Awaits!
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
              Professional table and chair rentals for birthday parties throughout the Rio Grande Valley.
            </p>
          </div>

          {/* Navigation Cards */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
            style={{
              animation: mounted ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none'
            }}
          >
            <Link
              href="/inventory"
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <Package className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="block font-bold text-gray-900 text-lg tracking-tight">Inventory</span>
            </Link>
            <Link
              href="/rental-info"
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <svg className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="block font-bold text-gray-900 text-lg tracking-tight">Rental Info</span>
            </Link>
            <Link
              href="/service-areas"
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <MapPin className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="block font-bold text-gray-900 text-lg tracking-tight">Service Areas</span>
            </Link>
            <Link
              href="/faq"
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <HelpCircle className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="block font-bold text-gray-900 text-lg tracking-tight">FAQ</span>
            </Link>
            <Link
              href="/contact"
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 col-span-2 md:col-span-1"
            >
              <Mail className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="block font-bold text-gray-900 text-lg tracking-tight">Contact</span>
            </Link>
          </div>

          {/* CTA Button */}
          <div
            style={{
              animation: mounted ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none'
            }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-5 px-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              <PartyPopper className="w-6 h-6 group-hover:rotate-12 transition-transform" strokeWidth={2} />
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}