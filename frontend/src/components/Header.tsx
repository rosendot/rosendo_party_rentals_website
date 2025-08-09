'use client'
import Link from 'next/link'
import { useState } from 'react'
import { businessConfig } from '@/lib/config'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
                        <span className="text-3xl">🎉</span>
                        <div>
                            <h1 className="text-2xl font-bold">Mi Fiesta Rentals</h1>
                            <p className="text-xs opacity-90">Rio Grande Valley</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="hover:text-yellow-300 transition-colors font-medium">
                            Home
                        </Link>
                        <Link href="/inventory" className="hover:text-yellow-300 transition-colors font-medium">
                            Inventory
                        </Link>
                        <Link href="/rental-info" className="hover:text-yellow-300 transition-colors font-medium">
                            Rental Info
                        </Link>
                        <Link href="/faq" className="hover:text-yellow-300 transition-colors font-medium">
                            FAQ
                        </Link>
                        <Link href="/contact" className="hover:text-yellow-300 transition-colors font-medium">
                            Contact
                        </Link>
                        <a
                            href={`tel:${businessConfig.phone}`}
                            className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors"
                        >
                            📞 Call Now
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-white/20">
                        <div className="flex flex-col space-y-4">
                            <Link href="/" className="hover:text-yellow-300 transition-colors font-medium">
                                Home
                            </Link>
                            <Link href="/inventory" className="hover:text-yellow-300 transition-colors font-medium">
                                Inventory
                            </Link>
                            <Link href="/rental-info" className="hover:text-yellow-300 transition-colors font-medium">
                                Rental Info
                            </Link>
                            <Link href="/faq" className="hover:text-yellow-300 transition-colors font-medium">
                                FAQ
                            </Link>
                            <Link href="/contact" className="hover:text-yellow-300 transition-colors font-medium">
                                Contact
                            </Link>
                            <a
                                href={`tel:${businessConfig.phone}`}
                                className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors text-center"
                            >
                                📞 {businessConfig.phone}
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}