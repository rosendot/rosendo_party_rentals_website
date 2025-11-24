'use client'
import { useState, useEffect } from 'react'
import { businessConfig } from '@/lib/config'
import { ChevronDown, Phone, MessageSquare, Lightbulb, PartyPopper, Zap, HelpCircle } from 'lucide-react'

const faqData = [
    {
        question: "How far in advance should I book?",
        answer: "We recommend booking 1-2 weeks in advance, especially for weekends and popular dates. However, we often have same-day availability - just call us!"
    },
    {
        question: "What's included in the rental price?",
        answer: "All rentals include professional delivery, setup, and pickup. We'll bring everything to your location and set it up for you!"
    },
    {
        question: "Do you require a deposit?",
        answer: "No deposit needed! Full payment is due on delivery day. We accept cash or digital payments like Zelle, CashApp, and PayPal."
    },
    {
        question: "How many tables and chairs do I need?",
        answer: "A good rule of thumb: our round tables seat 8 people comfortably. Count your guests and we'll help you plan the perfect setup for your event!"
    },
    {
        question: "Do you deliver to apartments/condos?",
        answer: "Yes! We deliver to apartments, condos, and community centers. Just let us know about any access restrictions, stairs, or gates we should know about."
    },
    {
        question: "Are your tables and chairs clean?",
        answer: "Absolutely! Every item is cleaned and sanitized before each rental. We take pride in providing quality, clean equipment for your events."
    },
    {
        question: "What types of events do you cater to?",
        answer: "We specialize in birthday parties and celebrations! Our day-by-day rentals with overnight use are perfect for parties, family gatherings, and special occasions."
    },
    {
        question: "Can I pick up instead of delivery?",
        answer: "We primarily offer delivery and setup service to ensure everything is set up properly. Contact us to discuss your specific needs!"
    },
    {
        question: "What are your delivery areas?",
        answer: `We deliver throughout the Rio Grande Valley including: ${businessConfig.cities.join(', ')}. Delivery fees may apply based on distance.`
    }
]

export default function FAQ() {
    const [openItems, setOpenItems] = useState<number[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        )
    }

    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                {/* Page Header */}
                <div
                    className="text-center mb-12"
                    style={{
                        animation: mounted ? 'fadeInUp 0.6s ease-out both' : 'none'
                    }}
                >
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-600 font-light">
                        Everything you need to know about our party rental service
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 mb-16">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                            style={{
                                animation: mounted ? `fadeInUp 0.5s ease-out ${0.1 + index * 0.05}s both` : 'none'
                            }}
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full p-6 lg:p-8 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-200 group"
                            >
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-purple-600 transition-colors">
                                        {item.question}
                                    </h3>
                                    <ChevronDown
                                        className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${openItems.includes(index) ? 'rotate-180' : ''}`}
                                    />
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openItems.includes(index) ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="px-6 lg:px-8 pb-6 border-t border-gray-100">
                                    <p className="text-base text-gray-600 leading-relaxed pt-6 font-light">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions */}
                <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg overflow-hidden mb-12"
                    style={{
                        animation: mounted ? `fadeInUp 0.6s ease-out ${0.6 + faqData.length * 0.05}s both` : 'none'
                    }}
                >
                    <div className="p-8 lg:p-10 text-center">
                        <div className="inline-flex p-4 bg-white bg-opacity-20 rounded-2xl mb-4">
                            <HelpCircle className="w-12 h-12 text-white" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight">
                            Still Have Questions?
                        </h3>
                        <p className="text-xl mb-8 font-light">
                            We're here to help make your party perfect!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`tel:${businessConfig.phone}`}
                                className="group bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Call: {businessConfig.phone}
                            </a>
                            <a
                                href={`sms:${businessConfig.phone}?&body=Hi! I have a question about: ______`}
                                className="group bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                            >
                                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Text Your Question
                            </a>
                            <a
                                href={businessConfig.social.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                WhatsApp Chat
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Tips */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div
                        className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        style={{
                            animation: mounted ? `fadeInUp 0.5s ease-out ${0.7 + faqData.length * 0.05}s both` : 'none'
                        }}
                    >
                        <div className="inline-flex p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Lightbulb className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Pro Tip</h4>
                        <p className="text-base text-gray-600 font-light leading-relaxed">
                            Book early for popular weekend dates, especially during party season (spring/summer)!
                        </p>
                    </div>

                    <div
                        className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        style={{
                            animation: mounted ? `fadeInUp 0.5s ease-out ${0.75 + faqData.length * 0.05}s both` : 'none'
                        }}
                    >
                        <div className="inline-flex p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            <PartyPopper className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Party Planning</h4>
                        <p className="text-base text-gray-600 font-light leading-relaxed">
                            Need both tables and chairs? We've got you covered! Mix and match to fit your event perfectly.
                        </p>
                    </div>

                    <div
                        className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        style={{
                            animation: mounted ? `fadeInUp 0.5s ease-out ${0.8 + faqData.length * 0.05}s both` : 'none'
                        }}
                    >
                        <div className="inline-flex p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Zap className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Last Minute?</h4>
                        <p className="text-base text-gray-600 font-light leading-relaxed">
                            Call us! We often have same-day availability and love helping with urgent celebrations.
                        </p>
                    </div>
                </div>
            </div>

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