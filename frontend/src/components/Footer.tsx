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
                            <span className="text-4xl">🎉</span>
                            <div>
                                <h3 className="text-2xl font-bold">Mi Fiesta Rentals</h3>
                                <p className="text-purple-200">{businessConfig.tagline}</p>
                            </div>
                        </div>
                        <p className="text-purple-100 mb-4 leading-relaxed">
                            Professional party rental service proudly serving the Rio Grande Valley.
                            Clean, safe, and reliable bounce houses, tables, chairs, and party supplies
                            for all your celebrations!
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={businessConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                            >
                                📘
                            </a>
                            <a
                                href={businessConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors"
                            >
                                📷
                            </a>
                            <a
                                href={businessConfig.social.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
                            >
                                💬
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-yellow-300">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-purple-100 hover:text-yellow-300 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/inventory" className="text-purple-100 hover:text-yellow-300 transition-colors">
                                    Inventory
                                </Link>
                            </li>
                            <li>
                                <Link href="/rental-info" className="text-purple-100 hover:text-yellow-300 transition-colors">
                                    Rental Info
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-purple-100 hover:text-yellow-300 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-purple-100 hover:text-yellow-300 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-yellow-300">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <span>📞</span>
                                <a
                                    href={`tel:${businessConfig.phone}`}
                                    className="text-purple-100 hover:text-yellow-300 transition-colors font-medium"
                                >
                                    {businessConfig.phone}
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>📧</span>
                                <a
                                    href={`mailto:${businessConfig.email}`}
                                    className="text-purple-100 hover:text-yellow-300 transition-colors"
                                >
                                    {businessConfig.email}
                                </a>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span>🌮</span>
                                <div>
                                    <p className="text-purple-100 font-medium">Serving RGV:</p>
                                    <p className="text-purple-200 text-sm">
                                        {businessConfig.cities.slice(0, 4).join(', ')} + more
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span>⏰</span>
                                <div>
                                    <p className="text-purple-100 text-sm">
                                        Mon-Fri: {businessConfig.hours.weekdays}<br />
                                        Sat: {businessConfig.hours.saturday}<br />
                                        Sun: {businessConfig.hours.sunday}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Areas */}
                <div className="mt-8 pt-8 border-t border-purple-600">
                    <h4 className="text-lg font-bold mb-4 text-yellow-300 text-center">
                        🚚 We Deliver Throughout the Rio Grande Valley
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
                        {businessConfig.cities.map(city => (
                            <div key={city} className="bg-purple-600/50 p-2 rounded text-sm">
                                {city}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-purple-600 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-purple-200 text-sm mb-4 md:mb-0">
                        © 2025 Mi Fiesta Rentals. All rights reserved. | Licensed & Insured
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <button className="text-purple-200 hover:text-yellow-300 transition-colors">
                            Privacy Policy
                        </button>
                        <button className="text-purple-200 hover:text-yellow-300 transition-colors">
                            Terms of Service
                        </button>
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="mt-6 bg-red-600/20 border border-red-400 p-4 rounded-lg text-center">
                    <p className="text-yellow-300 font-bold">
                        🚨 Day-of-Event Emergency Contact: {businessConfig.phone}
                    </p>
                    <p className="text-purple-100 text-sm">
                        For delivery, pickup, or equipment issues on your event day
                    </p>
                </div>
            </div>
        </footer>
    )
}