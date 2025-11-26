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
                                    Gran Fiesta Rentals
                                </h3>
                                <p className="text-purple-200 font-light">{businessConfig.tagline}</p>
                            </div>
                        </div>
                        <p className="text-purple-100 font-light leading-relaxed text-base">
                            Professional party rental service proudly serving the Rio Grande Valley.
                            Clean, safe, and reliable bounce houses, tables, chairs, and party supplies
                            for all your celebrations!
                        </p>
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
                        © 2025 Gran Fiesta Rentals. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
