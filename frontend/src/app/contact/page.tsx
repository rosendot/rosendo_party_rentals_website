import { businessConfig } from '@/lib/config'

export default function Contact() {
    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-purple-800 mb-4">
                        Contact Us 📞
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        ¡Contáctanos hoy! Ready to plan your perfect fiesta?
                    </p>
                    <div className="text-6xl mb-4">🎉</div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Methods */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-purple-700 mb-6">
                            Get In Touch / Ponte en Contacto
                        </h2>

                        {/* Phone */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
                            <div className="flex items-center mb-4">
                                <span className="text-4xl mr-4">📞</span>
                                <div>
                                    <h3 className="text-xl font-bold text-green-700">Call / Llama</h3>
                                    <p className="text-gray-600">Fastest way to get a quote!</p>
                                </div>
                            </div>
                            <a
                                href={`tel:${businessConfig.phone}`}
                                className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                            >
                                {businessConfig.phone}
                            </a>
                            <p className="text-sm text-gray-500 mt-2">
                                Hours: {businessConfig.hours.weekdays} (Mon-Fri)<br />
                                {businessConfig.hours.saturday} (Saturday)<br />
                                {businessConfig.hours.sunday} (Sunday)
                            </p>
                        </div>

                        {/* Text/SMS */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
                            <div className="flex items-center mb-4">
                                <span className="text-4xl mr-4">💬</span>
                                <div>
                                    <h3 className="text-xl font-bold text-blue-700">Text / Manda Texto</h3>
                                    <p className="text-gray-600">Quick and easy messaging</p>
                                </div>
                            </div>
                            <a
                                href={`sms:${businessConfig.phone}?&body=Hola! I need a quote for: DATE: _____ CITY: _____ ITEMS: _____`}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors inline-block"
                            >
                                📱 Text {businessConfig.phone}
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
                            <div className="flex items-center mb-4">
                                <span className="text-4xl mr-4">💚</span>
                                <div>
                                    <h3 className="text-xl font-bold text-green-700">WhatsApp</h3>
                                    <p className="text-gray-600">Chat with us instantly</p>
                                </div>
                            </div>
                            <a
                                href={businessConfig.social.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors inline-block"
                            >
                                💬 WhatsApp Chat
                            </a>
                        </div>

                        {/* Email */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
                            <div className="flex items-center mb-4">
                                <span className="text-4xl mr-4">📧</span>
                                <div>
                                    <h3 className="text-xl font-bold text-purple-700">Email / Correo</h3>
                                    <p className="text-gray-600">Send us detailed requests</p>
                                </div>
                            </div>
                            <a
                                href={`mailto:${businessConfig.email}?subject=Party Rental Quote Request&body=Hi Mi Fiesta Rentals!%0A%0AEvent Date: ______%0AEvent Time: ______%0ALocation/City: ______%0ANumber of guests: ______%0A%0AItems needed:%0A- ______%0A- ______%0A%0AAdditional details:%0A______%0A%0AThank you!`}
                                className="text-lg font-bold text-purple-600 hover:text-purple-700 transition-colors"
                            >
                                {businessConfig.email}
                            </a>
                        </div>
                    </div>

                    {/* Quick Quote Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-200">
                        <h2 className="text-3xl font-bold text-yellow-700 mb-6 text-center">
                            Quick Quote Form 📝
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Name / Nombre *
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Phone / Teléfono *
                                </label>
                                <input
                                    type="tel"
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                                    placeholder="(956) 123-4567"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Event Date / Fecha *
                                </label>
                                <input
                                    type="date"
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    City / Ciudad *
                                </label>
                                <select className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none">
                                    <option value="">Select your city</option>
                                    {businessConfig.cities.map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                    <option value="other">Other (please specify in message)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Items Needed / Artículos Necesarios
                                </label>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Bounce Houses
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Combo Units
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Tables & Chairs
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Concessions
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Additional Details / Detalles Adicionales
                                </label>
                                <textarea
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none h-24"
                                    placeholder="Number of guests, specific items, special requests..."
                                ></textarea>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                                <p className="text-sm text-yellow-800">
                                    <strong>Note:</strong> This form will open your email client. For fastest response,
                                    call or text us directly at <strong>{businessConfig.phone}</strong>!
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            >
                                📧 Send Quote Request
                            </button>
                        </form>
                    </div>
                </div>

                {/* Service Area */}
                <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-xl text-center">
                    <h3 className="text-3xl font-bold mb-4">
                        We Serve the Entire Rio Grande Valley! 🌮
                    </h3>
                    <div className="grid md:grid-cols-5 gap-4 text-center">
                        {businessConfig.cities.map(city => (
                            <div key={city} className="bg-white/20 p-3 rounded-lg">
                                <span className="font-medium">{city}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-lg">
                        Professional delivery, setup, and pickup included in all rentals!
                    </p>
                </div>

                {/* Emergency/Last Minute */}
                <div className="mt-12 bg-red-100 border-2 border-red-300 p-6 rounded-xl text-center">
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                        🚨 Last Minute Party? No Problem!
                    </h3>
                    <p className="text-red-600 mb-4">
                        Call us for same-day and next-day availability (subject to availability)
                    </p>
                    <a
                        href={`tel:${businessConfig.phone}`}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
                    >
                        📞 Call for Emergency Bookings
                    </a>
                </div>
            </div>
        </div>
    )
}