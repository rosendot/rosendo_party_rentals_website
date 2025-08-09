import Link from 'next/link'
import { businessConfig } from '@/lib/config'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Business Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="text-4xl animate-float">🎉</span>
                            <div>
                                <h3 className="font-heading text-2xl text-yellow-300 title-shadow">Mi Fiesta Rentals</h3>
                                <p className="font-body text-purple-200">{businessConfig.tagline}</p>
                            </div>
                        </div>
                        <p className="font-body text-purple-100 mb-4 leading-relaxed">
                            Professional party rental service proudly serving the Rio Grande Valley.
                            Clean, safe, and reliable bounce houses, tables, chairs, and party supplies
                            for all your celebrations!
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={businessConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 party-hover"
                            >
                                📘
                            </a>
                            <a
                                href={businessConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-all duration-300 party-hover"
                            >
                                📷
                            </a>
                            <a
                                href={businessConfig.social.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all duration-300 party-hover"
                            >
                                💬
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-xl mb-4 text-yellow-300">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="font-body text-purple-100 hover:text-yellow-300 transition-colors party-text-hover">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/inventory" className="font-body text-purple-100 hover:text-yellow-300 transition-colors party-text-hover">
                                    Inventory
                                </Link>
                            </li>
                            <li>
                                <Link href="/rental-info" className="font-body text-purple-100 hover:text-yellow-300 transition-colors party-text-hover">
                                    Rental Info
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="font-body text-purple-100 hover:text-yellow-300 transition-colors party-text-hover">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="font-body text-purple-100 hover:text-yellow-300 transition-colors party-text-hover">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading text-xl mb-4 text-yellow-300">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <span>📞</span>
                                <a
                                    href={`tel:${businessConfig.phone}`}
                                    className="font-body-bold text-purple-100 hover:text-yellow-300 transition-colors"
                                >
                                    {businessConfig.phone}
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>📧</span>
                                <a
                                    href={`mailto:${businessConfig.email}`}
                                    className="font-body text-purple-100 hover:text-yellow-300 transition-colors"
                                >
                                    {businessConfig.email}
                                </a>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span>🌮</span>
                                <div>
                                    <p className="font-body-bold text-purple-100">Serving RGV:</p>
                                    <p className="font-body text-purple-200 text-sm">
                                        {businessConfig.cities.slice(0, 4).join(', ')} + more
                                    </p>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >

                {/* Bottom Bar */}
                < div className="border-t border-purple-600 mt-8 pt-8 text-center" >
                    <p className="font-body text-purple-200">
                        © 2024 Mi Fiesta Rentals. All rights reserved. Made with ❤️ for the RGV community.
                    </p>
                </div >
            </div >
        </footer >
    )
}