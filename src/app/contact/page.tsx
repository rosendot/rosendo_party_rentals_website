'use client'

import { businessConfig } from '@/lib/config'
import { Phone, MessageSquare, Mail, Clock, Send, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Contact() {
    const contactCardRef = useRef<HTMLDivElement>(null)
    const formCardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Clear any previous animations
        gsap.set([contactCardRef.current, formCardRef.current], { clearProps: 'all' })

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Animate contact card
        tl.fromTo(contactCardRef.current,
            { x: -60, opacity: 0, scale: 0.95 },
            { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
            0 // Start at timeline position 0
        )
        // Animate form card (parallel with contact card)
        .fromTo(formCardRef.current,
            { x: 60, opacity: 0, scale: 0.95 },
            { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
            0 // Start at timeline position 0 (same time as contact card)
        )
    }, [])

    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
                    {/* Quick Contact Card */}
                    <div
                        ref={contactCardRef}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden"
                    >
                        <div className="p-8 lg:p-10">
                            <div className="text-center mb-8">
                                <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                                    Get In Touch
                                </h2>
                                <p className="text-lg text-gray-600 font-light">
                                    Choose your preferred method
                                </p>
                            </div>

                            {/* Contact Info Display */}
                            <div className="text-center mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                                <p className="text-sm text-gray-600 mb-2 font-medium">Call or Text Us</p>
                                <a
                                    href={`tel:${businessConfig.phone}`}
                                    className="text-3xl font-bold text-purple-700 hover:text-purple-800 transition-colors block mb-3 tracking-tight"
                                >
                                    {businessConfig.phone}
                                </a>
                                <a
                                    href={`mailto:${businessConfig.email}`}
                                    className="text-sm text-purple-600 hover:text-purple-700 transition-colors inline-flex items-center gap-1 font-medium"
                                >
                                    <Mail className="w-4 h-4" />
                                    {businessConfig.email}
                                </a>
                            </div>

                            {/* Contact Method Buttons */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {/* Call Button */}
                                <a
                                    href={`tel:${businessConfig.phone}`}
                                    className="group bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 text-center"
                                >
                                    <Phone
                                        className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform"
                                    />
                                    <div className="text-sm">Call Now</div>
                                </a>

                                {/* Text/SMS Button */}
                                <a
                                    href={`sms:${businessConfig.phone}?&body=Hi! I need a quote for: DATE: _____ CITY: _____ ITEMS: _____`}
                                    className="group bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 text-center"
                                >
                                    <MessageSquare
                                        className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform"
                                    />
                                    <div className="text-sm">Text Message</div>
                                </a>

                                {/* WhatsApp Button */}
                                <a
                                    href={businessConfig.social.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 text-center"
                                >
                                    <svg
                                        className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    <div className="text-sm">WhatsApp</div>
                                </a>

                                {/* Email Button */}
                                <a
                                    href={`mailto:${businessConfig.email}?subject=Party Rental Quote Request&body=Hi Gran Fiesta Rentals!%0A%0AEvent Date: ______%0AEvent Time: ______%0ALocation/City: ______%0ANumber of guests: ______%0A%0AItems needed:%0A- ______%0A- ______%0A%0AAdditional details:%0A______%0A%0AThank you!`}
                                    className="group bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 text-center"
                                >
                                    <Mail
                                        className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform"
                                    />
                                    <div className="text-sm">Email Us</div>
                                </a>
                            </div>

                            {/* Business Hours */}
                            <div className="pt-6 border-t border-gray-100">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Clock className="w-5 h-5 text-gray-700" />
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                                        Business Hours
                                    </h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center max-w-sm mx-auto px-4">
                                        <span className="text-base font-medium text-gray-700">Monday - Friday:</span>
                                        <span className="text-base text-gray-600 font-light">{businessConfig.hours.weekdays}</span>
                                    </div>
                                    <div className="flex justify-between items-center max-w-sm mx-auto px-4">
                                        <span className="text-base font-medium text-gray-700">Saturday:</span>
                                        <span className="text-base text-gray-600 font-light">{businessConfig.hours.saturday}</span>
                                    </div>
                                    <div className="flex justify-between items-center max-w-sm mx-auto px-4">
                                        <span className="text-base font-medium text-gray-700">Sunday:</span>
                                        <span className="text-base text-gray-600 font-light">{businessConfig.hours.sunday}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Quote Form */}
                    <div
                        ref={formCardRef}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden"
                    >
                        <div className="p-8 lg:p-10">
                            <div className="text-center mb-8">
                                <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                                    Quick Quote Form
                                </h2>
                                <p className="text-lg text-gray-600 font-light">
                                    Fill out the details below
                                </p>
                            </div>

                            <form className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2 tracking-tight">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all font-light"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2 tracking-tight">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all font-light"
                                        placeholder="(956) 123-4567"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2 tracking-tight">
                                        Event Date *
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all font-light"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2 tracking-tight">
                                        City *
                                    </label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all font-light">
                                        <option value="">Select your city</option>
                                        {businessConfig.cities.map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                        <option value="other">Other - please specify in message</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-3 tracking-tight">
                                        Items Needed
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 text-purple-600 rounded focus:ring-2 focus:ring-purple-200" />
                                            <span className="text-base text-gray-700 font-light">Tables</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 text-purple-600 rounded focus:ring-2 focus:ring-purple-200" />
                                            <span className="text-base text-gray-700 font-light">Chairs</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2 tracking-tight">
                                        Additional Details
                                    </label>
                                    <textarea
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all h-28 resize-none font-light"
                                        placeholder="Number of guests, specific items, special requests..."
                                    ></textarea>
                                </div>

                                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200">
                                    <div className="flex gap-3">
                                        <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-amber-900 leading-relaxed">
                                            <strong className="font-bold">Note:</strong> This form will open your email client. For fastest response,
                                            call or text us directly at <strong className="font-bold">{businessConfig.phone}</strong>!
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="group w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    Send Quote Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
