import Link from 'next/link'

export default function RentalInfo() {
    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-purple-800 mb-4">
                        Rental Information
                    </h1>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Pricing & Packages */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-200">
                            <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                <span className="mr-3">💰</span>
                                Pricing
                            </h2>

                            <div className="space-y-4">
                                <div className="border-b border-green-100 pb-4">
                                    <h3 className="text-xl font-bold text-green-600 mb-2">Tables</h3>
                                    <div className="flex justify-between">
                                        <span>Round Tables 60"</span>
                                        <span className="font-bold">$12/day</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-green-600 mb-2">Chairs</h3>
                                    <div className="flex justify-between">
                                        <span>Folding Chairs</span>
                                        <span className="font-bold">$2/day</span>
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
                                Delivery Areas
                            </h2>

                            <p className="text-gray-700 mb-4">
                                We serve various cities across the Rio Grande Valley. View our complete service area map and delivery pricing on our{' '}
                                <Link href="/service-areas" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                                    Service Areas page
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    {/* Policies & Requirements */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-200">
                            <h2 className="text-3xl font-bold text-purple-700 mb-6 flex items-center">
                                <span className="mr-3">📜</span>
                                Rental Policies
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-purple-600 mb-3">📅 Booking & Payment</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• No deposit needed to reserve your rental</li>
                                        <li>• Full payment due at delivery</li>
                                        <li>• Cash or digital payments accepted: Zelle, CashApp, PayPal</li>
                                        <li>• Cancel 2+ days in advance at no charge</li>
                                        <li>• Late cancellations: $20 fee</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-purple-600 mb-3">⏰ Rental Times</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Priced per day with overnight use included</li>
                                        <li>• Perfect for birthday parties and celebrations</li>
                                        <li>• Delivery & setup between 12pm - 5pm</li>
                                        <li>• Pickup window: 12pm - 5pm next day</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Setup & Delivery */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-orange-200">
                            <h2 className="text-3xl font-bold text-orange-700 mb-6 flex items-center">
                                <span className="mr-3">🚚</span>
                                Setup & Delivery
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-orange-600 mb-3">Delivery & Setup</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• We deliver and set up everything for you</li>
                                        <li>• All items arrive sanitized and party-ready</li>
                                        <li>• Setup at your preferred location on-site</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-orange-600 mb-3">Teardown & Pickup</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• We take care of all breakdown and removal</li>
                                        <li>• Just wipe down the tables and chairs after your event</li>
                                        <li>• Leave everything out - we'll pack it all up</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}