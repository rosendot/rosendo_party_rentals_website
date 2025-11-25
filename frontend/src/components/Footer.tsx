'use client'

import Link from 'next/link'
import { businessConfig } from '@/lib/config'
import { PartyPopper, Phone, Mail, MapPin, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <footer className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 text-white">
            <div className="container mx-auto px-6 lg:px-8 py-16">
                <div
                    className="grid md:grid-cols-4 gap-12"
                    style={{
                        animation: mounted ? 'fadeInUp 0.5s ease-out both' : 'none'
                    }}
                >
                    {/* Business Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6 group">
                            <div className="bg-yellow-400/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <PartyPopper className="w-8 h-8 text-yellow-300 group-hover:rotate-12 transition-transform" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-yellow-300 tracking-tight">
                                    Mi Fiesta Rentals
                                </h3>
                                <p className="text-purple-200 font-light">{businessConfig.tagline}</p>
                            </div>
                        </div>
                        <p className="text-purple-100 font-light mb-6 leading-relaxed text-base">
                            Professional party rental service proudly serving the Rio Grande Valley.
                            Clean, safe, and reliable bounce houses, tables, chairs, and party supplies
                            for all your celebrations!
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={businessConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-blue-600 hover:bg-blue-700 p-3.5 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-xl"
                                aria-label="Visit our Facebook page"
                            >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a
                                href={businessConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-pink-600 hover:bg-pink-700 p-3.5 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-xl"
                                aria-label="Visit our Instagram page"
                            >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a
                                href={businessConfig.social.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-green-600 hover:bg-green-700 p-3.5 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-xl"
                                aria-label="Contact us on WhatsApp"
                            >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold text-yellow-300 mb-6 tracking-tight">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/inventory', label: 'Inventory' },
                                { href: '/rental-info', label: 'Rental Info' },
                                { href: '/service-areas', label: 'Service Areas' },
                                { href: '/faq', label: 'FAQ' },
                                { href: '/contact', label: 'Contact' }
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-2 text-purple-100 hover:text-yellow-300 transition-all duration-300 font-light"
                                    >
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold text-yellow-300 mb-6 tracking-tight">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="group flex items-center gap-3">
                                <div className="bg-purple-600/50 p-2.5 rounded-lg group-hover:bg-purple-600 transition-colors">
                                    <Phone className="w-4 h-4 text-purple-100" />
                                </div>
                                <a
                                    href={`tel:${businessConfig.phone}`}
                                    className="text-purple-100 hover:text-yellow-300 transition-colors font-medium"
                                >
                                    {businessConfig.phone}
                                </a>
                            </div>
                            <div className="group flex items-center gap-3">
                                <div className="bg-purple-600/50 p-2.5 rounded-lg group-hover:bg-purple-600 transition-colors">
                                    <Mail className="w-4 h-4 text-purple-100" />
                                </div>
                                <a
                                    href={`mailto:${businessConfig.email}`}
                                    className="text-purple-100 hover:text-yellow-300 transition-colors font-light text-sm break-all"
                                >
                                    {businessConfig.email}
                                </a>
                            </div>
                            <div className="group flex items-start gap-3">
                                <div className="bg-purple-600/50 p-2.5 rounded-lg group-hover:bg-purple-600 transition-colors mt-0.5">
                                    <MapPin className="w-4 h-4 text-purple-100" />
                                </div>
                                <div>
                                    <p className="text-purple-100 font-medium">Serving RGV:</p>
                                    <p className="text-purple-200 font-light text-sm mt-1">
                                        {businessConfig.cities.slice(0, 4).join(', ')} + more
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="border-t border-purple-600/50 mt-12 pt-8 text-center"
                    style={{
                        animation: mounted ? 'fadeInUp 0.5s ease-out 0.2s both' : 'none'
                    }}
                >
                    <p className="text-purple-200 font-light">
                        © 2024 Mi Fiesta Rentals. All rights reserved. Made with{' '}
                        <span className="inline-block text-pink-400 hover:scale-125 transition-transform">♥</span>
                        {' '}for the RGV community.
                    </p>
                </div>
            </div>
        </footer>
    )
}
