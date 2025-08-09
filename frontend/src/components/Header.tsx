'use client'

import Link from 'next/link'
import { useState } from 'react'
import { businessConfig } from '@/lib/config'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo/Brand */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <span className="text-4xl animate-bounce">🎉</span>
                        <div>
                            <h1 className="font-heading text-2xl md:text-3xl text-yellow-300 title-shadow">
                                Mi Fiesta Rentals
                            </h1>
                            <p className="font-body text-sm text-purple-100 hidden md:block">
                                {businessConfig.tagline}
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="font-subheading text-lg party-text-hover transition-all duration-300">
                            Home
                        </Link>
                        <Link href="/inventory" className="font-subheading text-lg party-text-hover transition-all duration-300">
                            Inventory
                        </Link>
                        <Link href="/rental-info" className="font-subheading text-lg party-text-hover transition-all duration-300">
                            Rental Info
                        </Link>
                        <Link href="/faq" className="font-subheading text-lg party-text-hover transition-all duration-300">
                            FAQ
                        </Link>
                        <Link href="/contact" className="font-subheading text-lg party-text-hover transition-all duration-300">
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href={`tel:${businessConfig.phone}`}
                            className="bg-yellow-400 text-purple-800 px-6 py-3 rounded-full font-heading text-lg hover:bg-yellow-300 transition-all duration-300 party-hover shadow-lg"
                        >
                            📞 Call Now!
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl font-bold p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-white/20">
                        <div className="flex flex-col space-y-4">
                            <Link href="/" className="font-subheading text-lg hover:text-yellow-300 transition-colors">
                                Home
                            </Link>
                            <Link href="/inventory" className="font-subheading text-lg hover:text-yellow-300 transition-colors">
                                Inventory
                            </Link>
                            <Link href="/rental-info" className="font-subheading text-lg hover:text-yellow-300 transition-colors">
                                Rental Info
                            </Link>
                            <Link href="/faq" className="font-subheading text-lg hover:text-yellow-300 transition-colors">
                                FAQ
                            </Link>
                            <Link href="/contact" className="font-subheading text-lg hover:text-yellow-300 transition-colors">
                                Contact
                            </Link>
                            <a
                                href={`tel:${businessConfig.phone}`}
                                className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full font-heading hover:bg-yellow-300 transition-colors text-center"
                            >
                                📞 {businessConfig.phone}
                            </a>
                        </div>
                    </nav>
                )
                }
            </div >
        </header >
    )
}