'use client'

import inventoryData from '@/data/inventory.json'
import { Table2, Armchair, Users, Ruler } from 'lucide-react'
import { useState, useEffect } from 'react'

// Skeleton loader component
function InventoryCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 animate-pulse">
            <div className="h-56 bg-gray-200"></div>
            <div className="p-8">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="flex gap-3 mb-4">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
                <div className="h-8 bg-gray-200 rounded w-32"></div>
            </div>
        </div>
    )
}

export default function Inventory() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading for demonstration
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Tables Section */}
                <section className="mb-24">
                    <div className="mb-12">
                        <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
                            Tables
                        </h2>
                        <p className="text-lg text-gray-600 font-light">
                            Perfect seating solutions for any event size
                        </p>
                    </div>

                    {isLoading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                            {[...Array(3)].map((_, i) => (
                                <InventoryCardSkeleton key={i} />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                            {inventoryData.tables.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200 hover:-translate-y-1"
                                    style={{
                                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    <div className="relative h-56 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                        <Table2 className="w-24 h-24 text-emerald-600 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                                            {item.englishName || item.name}
                                        </h3>
                                        <div className="flex flex-wrap gap-3 mb-5">
                                            {item.size && (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-200">
                                                    <Ruler className="w-4 h-4" />
                                                    {item.size}
                                                </span>
                                            )}
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-lg border border-emerald-200">
                                                <Users className="w-4 h-4" />
                                                {item.capacity}
                                            </span>
                                        </div>
                                        <p className="text-base text-gray-600 mb-6 leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                        <div className="pt-4 border-t border-gray-100">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-4xl font-bold text-emerald-600 tracking-tight">
                                                    ${item.priceFrom}
                                                </span>
                                                <span className="text-lg text-gray-500 font-light">
                                                    / day
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Chairs Section */}
                <section className="mb-16">
                    <div className="mb-12">
                        <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
                            Chairs
                        </h2>
                        <p className="text-lg text-gray-600 font-light">
                            Comfortable and stylish seating options
                        </p>
                    </div>

                    {isLoading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                            {[...Array(3)].map((_, i) => (
                                <InventoryCardSkeleton key={i} />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                            {inventoryData.chairs.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
                                    style={{
                                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    <div className="relative h-56 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                        <Armchair className="w-24 h-24 text-blue-600 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                                            {item.englishName || item.name}
                                        </h3>
                                        <div className="flex flex-wrap gap-3 mb-5">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-200">
                                                <Users className="w-4 h-4" />
                                                {item.capacity}
                                            </span>
                                        </div>
                                        <p className="text-base text-gray-600 mb-6 leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                        <div className="pt-4 border-t border-gray-100">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-4xl font-bold text-blue-600 tracking-tight">
                                                    ${item.priceFrom}
                                                </span>
                                                <span className="text-lg text-gray-500 font-light">
                                                    / day
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
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