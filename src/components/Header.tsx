'use client'

import Link from 'next/link'
import { useState } from 'react'
import { businessConfig } from '@/lib/config'
import { PartyPopper, Phone, Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/inventory', label: 'Inventory' },
        { href: '/service-areas', label: 'Service Areas' },
        { href: '/rental-info', label: 'Rental Info' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contact' }
    ]

    return (
        <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white shadow-xl sticky top-0 z-50 backdrop-blur-sm">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between py-4 lg:py-5">
                    {/* Logo/Brand */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-yellow-400/20 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <PartyPopper className="w-7 h-7 lg:w-8 lg:h-8 text-yellow-300 group-hover:rotate-12 transition-transform" />
                        </div>
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-extrabold text-yellow-300 tracking-tight">
                                Mi Fiesta Rentals
                            </h1>
                            <p className="text-sm text-purple-100 font-light hidden md:block">
                                {businessConfig.tagline}
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-base font-medium text-white hover:text-yellow-300 transition-colors duration-300 group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center">
                        <a
                            href={`tel:${businessConfig.phone}`}
                            className="group bg-yellow-400 text-purple-800 px-6 py-3 rounded-xl font-bold text-base hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Call Now!
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? (
                            <X className="w-7 h-7" />
                        ) : (
                            <Menu className="w-7 h-7" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden py-4 border-t border-white/20 animate-fadeIn">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-base font-medium text-white hover:text-yellow-300 hover:bg-white/10 transition-all duration-300 px-4 py-3 rounded-lg"
                                    style={{
                                        animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href={`tel:${businessConfig.phone}`}
                                className="group bg-yellow-400 text-purple-800 px-4 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 text-center mt-3 flex items-center justify-center gap-2 shadow-md"
                                style={{
                                    animation: `fadeInUp 0.3s ease-out ${navLinks.length * 0.05}s both`
                                }}
                            >
                                <Phone className="w-5 h-5" />
                                {businessConfig.phone}
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
