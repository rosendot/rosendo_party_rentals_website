import inventoryData from '@/data/inventory.json'

export default function Inventory() {
    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
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
            </div>
        </div>
    )
}