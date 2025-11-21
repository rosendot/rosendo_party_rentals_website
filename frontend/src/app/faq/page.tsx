'use client'
import { useState } from 'react'
import { businessConfig } from '@/lib/config'

const faqData = [
    {
        question: "How far in advance should I book?",
        questionSpanish: "¿Con cuánta anticipación debo reservar?",
        answer: "We recommend booking 1-2 weeks in advance, especially for weekends and popular dates. However, we often have same-day availability - just call us!"
    },
    {
        question: "What's included in the rental price?",
        questionSpanish: "¿Qué incluye el precio del alquiler?",
        answer: "All rentals include professional delivery, setup, and pickup. We'll bring everything to your location and set it up for you!"
    },
    {
        question: "Do you require a deposit?",
        questionSpanish: "¿Requieren un depósito?",
        answer: "Yes, we require a 50% deposit to secure your booking. The remaining balance is due on delivery day. We accept cash, check, or card."
    },
    {
        question: "How many tables and chairs do I need?",
        questionSpanish: "¿Cuántas mesas y sillas necesito?",
        answer: "A good rule of thumb: our round tables seat 8 people comfortably. Count your guests and we'll help you plan the perfect setup for your event!"
    },
    {
        question: "Do you deliver to apartments/condos?",
        questionSpanish: "¿Entregan a apartamentos/condominios?",
        answer: "Yes! We deliver to apartments, condos, and community centers. Just let us know about any access restrictions, stairs, or gates we should know about."
    },
    {
        question: "Are your tables and chairs clean?",
        questionSpanish: "¿Están limpias las mesas y sillas?",
        answer: "Absolutely! Every item is cleaned and sanitized before each rental. We take pride in providing quality, clean equipment for your events."
    },
    {
        question: "What types of events do you cater to?",
        questionSpanish: "¿Qué tipos de eventos atienden?",
        answer: "We serve all types of events! Birthdays, graduations, weddings, family reunions, quinceañeras, corporate events, and more. If you need seating, we've got you covered!"
    },
    {
        question: "Can I pick up instead of delivery?",
        questionSpanish: "¿Puedo recoger en lugar de entrega?",
        answer: "We primarily offer delivery and setup service to ensure everything is set up properly. Contact us to discuss your specific needs!"
    },
    {
        question: "What are your delivery areas?",
        questionSpanish: "¿Cuáles son sus áreas de entrega?",
        answer: `We deliver throughout the Rio Grande Valley including: ${businessConfig.cities.join(', ')}. Delivery fees may apply based on distance.`
    }
]

export default function FAQ() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        )
    }

    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-purple-800 mb-4">
                        Frequently Asked Questions ❓
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        Preguntas Frecuentes - Everything you need to know!
                    </p>
                    <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 max-w-2xl mx-auto">
                        <p className="text-yellow-800 font-medium">
                            Can't find your answer? Call us at <a href={`tel:${businessConfig.phone}`} className="font-bold underline">{businessConfig.phone}</a>
                        </p>
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg border-2 border-purple-100 overflow-hidden">
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full p-6 text-left hover:bg-purple-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-bold text-purple-700 mb-1">
                                            {item.question}
                                        </h3>
                                        <p className="text-sm text-gray-600 italic">
                                            {item.questionSpanish}
                                        </p>
                                    </div>
                                    <span className={`text-2xl transition-transform ${openItems.includes(index) ? 'rotate-180' : ''}`}>
                                        ⬇️
                                    </span>
                                </div>
                            </button>

                            {openItems.includes(index) && (
                                <div className="px-6 pb-6 border-t border-purple-100">
                                    <p className="text-gray-700 leading-relaxed pt-4">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Still Have Questions */}
                <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl text-center">
                    <h3 className="text-3xl font-bold mb-4">
                        Still Have Questions? 🤔
                    </h3>
                    <p className="text-xl mb-6">
                        We're here to help make your party perfect!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${businessConfig.phone}`}
                            className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            📞 Call Us: {businessConfig.phone}
                        </a>
                        <a
                            href={`sms:${businessConfig.phone}?&body=Hi! I have a question about: ______`}
                            className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-full transition-colors"
                        >
                            💬 Text Your Question
                        </a>
                        <a
                            href={businessConfig.social.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full transition-colors"
                        >
                            💚 WhatsApp Chat
                        </a>
                    </div>
                </div>

                {/* Quick Tips */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-200 text-center">
                        <div className="text-4xl mb-3">💡</div>
                        <h4 className="text-lg font-bold text-blue-700 mb-2">Pro Tip</h4>
                        <p className="text-blue-600 text-sm">
                            Book early for popular weekend dates, especially during party season (spring/summer)!
                        </p>
                    </div>

                    <div className="bg-green-100 p-6 rounded-xl border-2 border-green-200 text-center">
                        <div className="text-4xl mb-3">🎉</div>
                        <h4 className="text-lg font-bold text-green-700 mb-2">Party Planning</h4>
                        <p className="text-green-600 text-sm">
                            Need both tables and chairs? We've got you covered! Mix and match to fit your event perfectly.
                        </p>
                    </div>

                    <div className="bg-yellow-100 p-6 rounded-xl border-2 border-yellow-200 text-center">
                        <div className="text-4xl mb-3">⚡</div>
                        <h4 className="text-lg font-bold text-yellow-700 mb-2">Last Minute?</h4>
                        <p className="text-yellow-600 text-sm">
                            Call us! We often have same-day availability and love helping with urgent celebrations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}