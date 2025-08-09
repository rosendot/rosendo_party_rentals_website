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
                                    <h3 className="text-xl font-bold text-green-600 mb-2">🏰 Bounce Houses</h3>
                                    <div className="flex justify-between">
                                        <span>Standard (13x13)</span>
                                        <span className="font-bold">$110 - $125</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Large (15x15)</span>
                                        <span className="font-bold">$120 - $140</span>
                                    </div>
                                </div>

                                <div className="border-b border-green-100 pb-4">
                                    <h3 className="text-xl font-bold text-green-600 mb-2">🛝 Combo Units</h3>
                                    <div className="flex justify-between">
                                        <span>Dry Combos</span>
                                        <span className="font-bold">$170 - $200</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Large Combos</span>
                                        <span className="font-bold">$180 - $220</span>
                                    </div>
                                </div>

                                <div className="border-b border-green-100 pb-4">
                                    <h3 className="text-xl font-bold text-green-600 mb-2">🪑 Tables & Chairs</h3>
                                    <div className="flex justify-between">
                                        <span>Round Tables (60")</span>
                                        <span className="font-bold">$12 each</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Folding Chairs</span>
                                        <span className="font-bold">$2 each</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-green-600 mb-2">🍿 Concessions</h3>
                                    <div className="flex justify-between">
                                        <span>Popcorn Machine</span>
                                        <span className="font-bold">$40 + supplies</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Snow Cone Machine</span>
                                        <span className="font-bold">$45 + supplies</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                                <p className="text-yellow-800 text-sm font-medium">
                                    💡 <strong>Package Deals Available!</strong> Save money by combining multiple items.
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
                                    <h3 className="text-xl font-bold text-purple-600 mb-3">🛡️ Safety & Supervision</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Adult supervision required at all times</li>
                                        <li>• No shoes, glasses, or sharp objects in bounce houses</li>
                                        <li>• Age/weight limits strictly enforced</li>
                                        <li>• Customer responsible for any damages</li>
                                        <li>• We provide safety rules with each rental</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Weather & Setup */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-orange-200">
                            <h2 className="text-3xl font-bold text-orange-700 mb-6 flex items-center">
                                <span className="mr-3">🌤️</span>
                                Weather & Setup / Clima y Instalación
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-orange-600 mb-3">☀️ Weather Policy</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Light rain: Events can continue (covered areas)</li>
                                        <li>• Heavy rain/storms: Free rescheduling available</li>
                                        <li>• Lightning: Immediate shutdown for safety</li>
                                        <li>• Wind over 25 mph: Units must be deflated</li>
                                        <li>• We monitor weather and will contact you</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-orange-600 mb-3">🏠 Setup Requirements</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Level ground with 3ft clearance on all sides</li>
                                        <li>• Access to electrical outlet within 100ft</li>
                                        <li>• Clear path for delivery (gates, doors)</li>
                                        <li>• No sprinkler systems in setup area</li>
                                        <li>• We provide extension cords and stakes</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-orange-600 mb-3">📏 Space Requirements</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• 13x13 Bounce House: 16x16 space minimum</li>
                                        <li>• 15x15 Bounce House: 18x18 space minimum</li>
                                        <li>• Combo Units: 23x18 space minimum</li>
                                        <li>• Tables: 8ft diameter clear space each</li>
                                        <li>• Ask us to help measure your space!</li>
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
                            Important Safety Notes
                        </h4>
                        <ul className="text-red-600 space-y-1 text-sm">
                            <li>• No food, drinks, or gum in bounce houses</li>
                            <li>• Separate smaller kids from bigger kids</li>
                            <li>• Maximum occupancy limits must be followed</li>
                            <li>• Adult must supervise at all times</li>
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
                            <li>• Extension cords and blowers</li>
                            <li>• Stakes or sandbags for anchoring</li>
                            <li>• Safety instructions and rules</li>
                            <li>• Pickup and breakdown service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}