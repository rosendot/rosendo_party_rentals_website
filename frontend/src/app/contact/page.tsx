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
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Quick Contact Card */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-200">
                        <h2 className="text-3xl font-bold text-purple-700 mb-2 text-center">
                            Get In Touch
                        </h2>
                        <p className="text-gray-600 text-center mb-6">
                            Ponte en Contacto - Choose your preferred method
                        </p>

                        {/* Contact Info Display */}
                        <div className="text-center mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Call or Text Us</p>
                            <a
                                href={`tel:${businessConfig.phone}`}
                                className="text-3xl font-bold text-purple-700 hover:text-purple-800 transition-colors block"
                            >
                                {businessConfig.phone}
                            </a>
                            <a
                                href={`mailto:${businessConfig.email}`}
                                className="text-sm text-purple-600 hover:text-purple-700 transition-colors mt-2 inline-block"
                            >
                                {businessConfig.email}
                            </a>
                        </div>

                        {/* Contact Method Buttons */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {/* Call Button */}
                            <a
                                href={`tel:${businessConfig.phone}`}
                                className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center"
                            >
                                <div className="text-3xl mb-1">📞</div>
                                <div className="text-sm">Call Now</div>
                                <div className="text-xs opacity-90">Llama</div>
                            </a>

                            {/* Text/SMS Button */}
                            <a
                                href={`sms:${businessConfig.phone}?&body=Hola! I need a quote for: DATE: _____ CITY: _____ ITEMS: _____`}
                                className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center"
                            >
                                <div className="text-3xl mb-1">💬</div>
                                <div className="text-sm">Text Message</div>
                                <div className="text-xs opacity-90">Manda Texto</div>
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href={businessConfig.social.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center"
                            >
                                <div className="text-3xl mb-1">💚</div>
                                <div className="text-sm">WhatsApp</div>
                                <div className="text-xs opacity-90">Chat Instant</div>
                            </a>

                            {/* Email Button */}
                            <a
                                href={`mailto:${businessConfig.email}?subject=Party Rental Quote Request&body=Hi Mi Fiesta Rentals!%0A%0AEvent Date: ______%0AEvent Time: ______%0ALocation/City: ______%0ANumber of guests: ______%0A%0AItems needed:%0A- ______%0A- ______%0A%0AAdditional details:%0A______%0A%0AThank you!`}
                                className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center"
                            >
                                <div className="text-3xl mb-1">📧</div>
                                <div className="text-sm">Email Us</div>
                                <div className="text-xs opacity-90">Correo</div>
                            </a>
                        </div>

                        {/* Business Hours */}
                        <div className="border-t-2 border-gray-200 pt-6">
                            <h3 className="text-lg font-bold text-gray-700 mb-3 text-center">
                                Business Hours / Horario
                            </h3>
                            <div className="space-y-2 text-center text-gray-600">
                                <div className="flex justify-between items-center max-w-xs mx-auto">
                                    <span className="font-medium">Monday - Friday:</span>
                                    <span>{businessConfig.hours.weekdays}</span>
                                </div>
                                <div className="flex justify-between items-center max-w-xs mx-auto">
                                    <span className="font-medium">Saturday:</span>
                                    <span>{businessConfig.hours.saturday}</span>
                                </div>
                                <div className="flex justify-between items-center max-w-xs mx-auto">
                                    <span className="font-medium">Sunday:</span>
                                    <span>{businessConfig.hours.sunday}</span>
                                </div>
                            </div>
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

            </div>
        </div>
    )
}