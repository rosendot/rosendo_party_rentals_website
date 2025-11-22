'use client'
import { businessConfig } from '@/lib/config'
import dynamic from 'next/dynamic'

// Dynamically import map to avoid SSR issues
const Map = dynamic(() => import('@/components/ServiceAreaMap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[500px] bg-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-gray-600">Loading map...</p>
        </div>
    )
})

export default function ServiceAreas() {
    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-purple-800 mb-4">
                        Service Areas
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        We proudly serve the entire Rio Grande Valley!
                    </p>
                </div>

                {/* Interactive Map */}
                <div className="max-w-6xl mx-auto mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
                        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
                            Interactive Coverage Map
                        </h2>
                        <p className="text-center text-gray-600 mb-6">
                            Click on any marker to see city details
                        </p>
                        <Map />
                    </div>
                </div>

                {/* Cities Grid */}
                <div className="max-w-6xl mx-auto mb-12">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-200">
                        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
                            Cities We Serve
                        </h2>
                        <div className="grid md:grid-cols-5 gap-4 mb-8">
                            {businessConfig.cities.map(city => (
                                <div
                                    key={city}
                                    className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg text-center border-2 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105"
                                >
                                    <div className="text-2xl mb-2">✓</div>
                                    <span className="font-bold text-purple-700">{city}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t-2 border-purple-200 pt-6">
                            <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">
                                What's Included
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl mb-2">🚚</div>
                                    <h4 className="font-bold text-gray-700 mb-2">Free Delivery</h4>
                                    <p className="text-sm text-gray-600">
                                        Professional delivery to your location
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-2">🔧</div>
                                    <h4 className="font-bold text-gray-700 mb-2">Setup Included</h4>
                                    <p className="text-sm text-gray-600">
                                        We set everything up for you
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-2">📦</div>
                                    <h4 className="font-bold text-gray-700 mb-2">Pickup Service</h4>
                                    <p className="text-sm text-gray-600">
                                        We'll pick everything up when you're done
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl text-center shadow-lg">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Book?
                        </h3>
                        <p className="text-xl mb-6">
                            Don't see your city? Give us a call - we may be able to help!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`tel:${businessConfig.phone}`}
                                className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                📞 Call Us: {businessConfig.phone}
                            </a>
                            <a
                                href="/contact"
                                className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-full transition-colors"
                            >
                                💬 Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
