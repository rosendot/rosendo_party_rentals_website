import { businessConfig } from '@/lib/config'

export default function RentalInfo() {
    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-purple-800 mb-4">
                        Rental Information 📋
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        Everything you need to know / Todo lo que necesitas saber
                    </p>
                    <div className="text-6xl mb-4">📝</div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Pricing & Packages */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-200">
                            <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                <span className="mr-3">💰</span>
                                Pricing / Precios
                            </h2>

                            <div className="space-y-4">
                                <div className="border-b border-green-100 pb-4">
                                    <h3 className="text-xl font-bold text-green-600 mb-2">🪑 Tables / Mesas</h3>
                                    <div className="flex justify-between">
                                        <span>Round Tables (60") / Mesas Redondas</span>
                                        <span className="font-bold">$12 each</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-green-600 mb-2">🪑 Chairs / Sillas</h3>
                                    <div className="flex justify-between">
                                        <span>Folding Chairs / Sillas Plegables</span>
                                        <span className="font-bold">$2 each</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                                <p className="text-yellow-800 text-sm font-medium">
                                    💡 <strong>Package Deals Available!</strong> Save money by renting multiple tables and chairs together.
                                </p>
                            </div>
                        </div>

                        {/* Delivery Areas */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200">
                            <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center">
                                <span className="mr-3">🚚</span>
                                Delivery Areas / Áreas de Entrega
                            </h2>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {businessConfig.cities.map(city => (
                                    <div key={city} className="bg-blue-50 p-3 rounded-lg text-center">
                                        <span className="font-medium text-blue-700">{city}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-blue-100 pb-2">
                                    <span>McAllen, Mission, Edinburg, Pharr</span>
                                    <span className="font-bold text-green-600">FREE Delivery</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-100 pb-2">
                                    <span>Weslaco, Mercedes, Alamo</span>
                                    <span className="font-bold">$15 Delivery</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-100 pb-2">
                                    <span>Brownsville, Harlingen</span>
                                    <span className="font-bold">$25 Delivery</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Other RGV areas</span>
                                    <span className="font-bold">Call for Quote</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Policies & Requirements */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-200">
                            <h2 className="text-3xl font-bold text-purple-700 mb-6 flex items-center">
                                <span className="mr-3">📜</span>
                                Rental Policies / Políticas
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-purple-600 mb-3">📅 Booking & Payment</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• 50% deposit required to secure booking</li>
                                        <li>• Remaining balance due on delivery day</li>
                                        <li>• We accept cash, check, and all major credit cards</li>
                                        <li>• Cancellations 48+ hours: full refund of deposit</li>
                                        <li>• Cancellations less than 48 hours: 50% deposit fee</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-purple-600 mb-3">⏰ Rental Times</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Standard rental: 6-8 hours</li>
                                        <li>• Delivery: Usually 8-10 AM</li>
                                        <li>• Pickup: Usually 6-8 PM</li>
                                        <li>• Extended rentals available for additional fee</li>
                                        <li>• Overnight rentals: +50% of daily rate</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-purple-600 mb-3">🛡️ Care & Safety</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Please use tables and chairs as intended</li>
                                        <li>• Do not stand on tables or chairs</li>
                                        <li>• Maximum weight capacity: 250 lbs per chair</li>
                                        <li>• Customer responsible for any damages</li>
                                        <li>• Report any issues immediately</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Setup & Delivery */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-orange-200">
                            <h2 className="text-3xl font-bold text-orange-700 mb-6 flex items-center">
                                <span className="mr-3">🚚</span>
                                Setup & Delivery / Instalación y Entrega
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-orange-600 mb-3">🏠 Delivery Requirements</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Clear path for delivery (gates, doors, walkways)</li>
                                        <li>• Access to setup area for unloading</li>
                                        <li>• Someone must be present for delivery and pickup</li>
                                        <li>• Notify us of any stairs or difficult access</li>
                                        <li>• We handle all setup and breakdown</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-orange-600 mb-3">📏 Space Requirements</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Round Tables (60"): 8ft diameter clear space each</li>
                                        <li>• Chairs: Allow 2-3 feet per chair</li>
                                        <li>• Indoor or outdoor setup available</li>
                                        <li>• We recommend measuring your space beforehand</li>
                                        <li>• Call us to help plan your layout!</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-orange-600 mb-3">⚡ Setup Details</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Tables and chairs arrive clean and ready to use</li>
                                        <li>• We set up at your preferred location</li>
                                        <li>• Setup typically takes 15-30 minutes</li>
                                        <li>• Pickup scheduled after your event ends</li>
                                        <li>• No cleaning required - we handle it all!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact for Custom Quotes */}
                <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl text-center">
                    <h3 className="text-3xl font-bold mb-4">
                        Need a Custom Quote? 🎯
                    </h3>
                    <p className="text-xl mb-6">
                        Every party is different! Call us for personalized pricing and packages.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${businessConfig.phone}`}
                            className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            📞 Call for Quote: {businessConfig.phone}
                        </a>
                        <a
                            href={`sms:${businessConfig.phone}?&body=Hi! I need a custom quote for: DATE: _____ LOCATION: _____ ITEMS: _____`}
                            className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-full transition-colors"
                        >
                            💬 Text for Quote
                        </a>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="mt-12 grid md:grid-cols-2 gap-6">
                    <div className="bg-red-100 border-2 border-red-300 p-6 rounded-xl">
                        <h4 className="text-xl font-bold text-red-700 mb-3 flex items-center">
                            <span className="mr-2">⚠️</span>
                            Important Care Notes
                        </h4>
                        <ul className="text-red-600 space-y-1 text-sm">
                            <li>• Use tables and chairs as intended only</li>
                            <li>• Do not drag furniture on rough surfaces</li>
                            <li>• Keep away from open flames or heat sources</li>
                            <li>• Maximum weight capacity: 250 lbs per chair</li>
                            <li>• Report any damage immediately</li>
                        </ul>
                    </div>

                    <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl">
                        <h4 className="text-xl font-bold text-green-700 mb-3 flex items-center">
                            <span className="mr-2">✅</span>
                            What's Included
                        </h4>
                        <ul className="text-green-600 space-y-1 text-sm">
                            <li>• Professional delivery and setup</li>
                            <li>• Clean, sanitized tables and chairs</li>
                            <li>• Setup at your preferred location</li>
                            <li>• Pickup and breakdown service</li>
                            <li>• No cleaning required from you</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}