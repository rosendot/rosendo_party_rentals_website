import inventoryData from '@/data/inventory.json'
import { businessConfig } from '@/lib/config'

export default function Inventory() {
    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-purple-800 mb-4">
                        Our Inventory
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        Quality tables and chairs for your event
                    </p>
                    <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 max-w-2xl mx-auto">
                        <p className="text-yellow-800 font-medium">
                            📞 Call <a href={`tel:${businessConfig.phone}`} className="font-bold underline">{businessConfig.phone}</a> for instant quotes and availability!
                        </p>
                    </div>
                </div>

                {/* Tables */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-green-600 mb-8 text-center">
                        Tables
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {inventoryData.tables.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden border-2 border-green-200">
                                <div className="h-48 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                                    <span className="text-6xl">🪑</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-green-700 mb-2">
                                        {item.englishName || item.name}
                                    </h3>
                                    <div className="flex justify-between items-center mb-3">
                                        {item.size && <span className="text-sm text-gray-500">{item.size}</span>}
                                        <span className="text-sm text-gray-500">{item.capacity}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                                    <div className="text-2xl font-bold text-green-600">
                                        ${item.priceFrom}/day
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Chairs */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">
                        Chairs
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {inventoryData.chairs.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden border-2 border-blue-200">
                                <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                                    <span className="text-6xl">🪑</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                                        {item.englishName || item.name}
                                    </h3>
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm text-gray-500">{item.capacity}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                                    <div className="text-2xl font-bold text-blue-600">
                                        ${item.priceFrom}/day
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact CTA */}
                <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl">
                    <h3 className="text-3xl font-bold mb-4">Ready to Book? 🎉</h3>
                    <p className="text-xl mb-6">Call us now for availability and custom quotes!</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${businessConfig.phone}`}
                            className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            📞 {businessConfig.phone}
                        </a>
                        <a
                            href={`sms:${businessConfig.phone}?&body=Hi! I'm interested in: ______ for date: ______ in city: ______`}
                            className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-full transition-colors"
                        >
                            💬 Text Quote
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}