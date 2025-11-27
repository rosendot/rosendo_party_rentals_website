'use client'

import { useState, useEffect } from 'react'
import inventoryData from '@/data/inventory.json'
import { Calculator, Users, Calendar, MapPin, DollarSign, Minus, Plus } from 'lucide-react'

type DeliveryZone = {
    name: string
    cities: string[]
    fee: number
}

const deliveryZones: DeliveryZone[] = [
    {
        name: 'FREE Delivery',
        cities: ['Alamo', 'Donna', 'Edcouch', 'Edinburg', 'Elsa', 'Faysville', 'Hidalgo', 'Lopezville', 'McAllen', 'Mercedes', 'Murillo', 'North Alamo', 'Pharr', 'San Carlos', 'San Juan', 'Sharyland', 'Weslaco'].sort(),
        fee: 0
    },
    {
        name: '$20 Delivery Fee',
        cities: ['Alton', 'Combes', 'Hargill', 'Harlingen', 'La Feria', 'La Homa', 'Lasara', 'Los Fresnos', 'Lyford', 'Mission', 'Palm Valley', 'Palmhurst', 'Palmview', 'Primera', 'Progreso', 'Puerto Rico-San Manuel', 'Rangerville', 'Raymondville', 'Rio Hondo', 'San Benito', 'San Perlita', 'Sebastian', 'Sullivan City'].sort(),
        fee: 20
    }
]

export default function PriceCalculator() {
    const [guestCount, setGuestCount] = useState<number>(0)
    const [rentalDays, setRentalDays] = useState<number>(1)
    const [selectedCity, setSelectedCity] = useState<string>('')
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({
        'tb001': 0, // Round Table
        'tb002': 0, // Rectangular Table
        'ch001': 0  // Folding Chairs
    })

    // Calculate suggested quantities based on guest count
    useEffect(() => {
        if (guestCount > 0) {
            const seatedCount = Math.round(guestCount * 0.7) // 70% of guests will be seated at birthday parties
            const tablesNeeded = Math.ceil(seatedCount / 8) // Assuming 8 people per table
            const chairsNeeded = seatedCount

            setQuantities({
                'tb001': tablesNeeded,
                'tb002': 0,
                'ch001': chairsNeeded
            })
        }
    }, [guestCount])

    const updateQuantity = (itemId: string, change: number) => {
        setQuantities(prev => ({
            ...prev,
            [itemId]: Math.max(0, prev[itemId] + change)
        }))
    }

    const setQuantity = (itemId: string, value: number) => {
        setQuantities(prev => ({
            ...prev,
            [itemId]: Math.max(0, value)
        }))
    }

    // Calculate delivery fee based on selected city
    const getDeliveryFee = (): number => {
        if (!selectedCity) return 0
        const zone = deliveryZones.find(z => z.cities.includes(selectedCity))
        return zone?.fee || 0
    }

    // Calculate totals
    const calculateItemTotal = (itemId: string): number => {
        const item = [...inventoryData.tables, ...inventoryData.chairs].find(i => i.id === itemId)
        if (!item) return 0
        return item.priceFrom * quantities[itemId] * rentalDays
    }

    const subtotal = Object.keys(quantities).reduce((sum, itemId) => sum + calculateItemTotal(itemId), 0)
    const deliveryFee = getDeliveryFee()
    const total = subtotal + deliveryFee

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
                <div className="flex items-center gap-3 text-white">
                    <Calculator className="w-8 h-8" strokeWidth={2} />
                    <h2 className="text-3xl font-extrabold tracking-tight">Price Calculator</h2>
                </div>
                <p className="text-purple-100 mt-2 font-light">
                    Get an instant quote for your party rental
                </p>
            </div>

            <div className="p-6 lg:p-8 space-y-8">
                {/* Guest Count Helper */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <div className="flex items-center gap-2 mb-4">
                        <Users className="w-5 h-5 text-amber-700" />
                        <h3 className="text-lg font-bold text-gray-900">Quick Start: Guest Count</h3>
                    </div>
                    <p className="text-sm text-amber-900 mb-4 font-light">
                        Enter your expected guest count and we&apos;ll suggest the right quantities
                    </p>
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-semibold text-gray-700">Number of Guests:</label>
                        <input
                            type="number"
                            min="0"
                            value={guestCount || ''}
                            onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
                            className="w-32 px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="0"
                        />
                    </div>
                </div>

                {/* Tables Section */}
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-emerald-500 rounded"></div>
                        Tables
                    </h3>
                    <div className="space-y-4">
                        {inventoryData.tables.map((table) => (
                            <div key={table.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors">
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900">{table.englishName}</h4>
                                    <p className="text-sm text-gray-600">{table.size} • {table.capacity}</p>
                                    <p className="text-sm font-semibold text-emerald-600 mt-1">
                                        ${table.priceFrom}/day
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => updateQuantity(table.id, -1)}
                                        className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus className="w-4 h-4 text-gray-600" />
                                    </button>
                                    <input
                                        type="number"
                                        min="0"
                                        value={quantities[table.id]}
                                        onChange={(e) => setQuantity(table.id, parseInt(e.target.value) || 0)}
                                        className="w-16 px-2 py-2 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                    />
                                    <button
                                        onClick={() => updateQuantity(table.id, 1)}
                                        className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                                        aria-label="Increase quantity"
                                    >
                                        <Plus className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chairs Section */}
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-blue-500 rounded"></div>
                        Chairs
                    </h3>
                    <div className="space-y-4">
                        {inventoryData.chairs.map((chair) => (
                            <div key={chair.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900">{chair.englishName}</h4>
                                    <p className="text-sm text-gray-600">{chair.capacity}</p>
                                    <p className="text-sm font-semibold text-blue-600 mt-1">
                                        ${chair.priceFrom}/day
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => updateQuantity(chair.id, -1)}
                                        className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus className="w-4 h-4 text-gray-600" />
                                    </button>
                                    <input
                                        type="number"
                                        min="0"
                                        value={quantities[chair.id]}
                                        onChange={(e) => setQuantity(chair.id, parseInt(e.target.value) || 0)}
                                        className="w-16 px-2 py-2 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <button
                                        onClick={() => updateQuantity(chair.id, 1)}
                                        className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                                        aria-label="Increase quantity"
                                    >
                                        <Plus className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rental Duration */}
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-5 h-5 text-purple-700" />
                        <h3 className="text-lg font-bold text-gray-900">Rental Duration</h3>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-semibold text-gray-700">Number of Days:</label>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setRentalDays(Math.max(1, rentalDays - 1))}
                                className="w-8 h-8 flex items-center justify-center bg-white border border-purple-300 rounded-lg hover:bg-purple-100 transition-colors"
                                aria-label="Decrease days"
                            >
                                <Minus className="w-4 h-4 text-purple-600" />
                            </button>
                            <input
                                type="number"
                                min="1"
                                value={rentalDays}
                                onChange={(e) => setRentalDays(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-20 px-2 py-2 text-center border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <button
                                onClick={() => setRentalDays(rentalDays + 1)}
                                className="w-8 h-8 flex items-center justify-center bg-white border border-purple-300 rounded-lg hover:bg-purple-100 transition-colors"
                                aria-label="Increase days"
                            >
                                <Plus className="w-4 h-4 text-purple-600" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Delivery Location */}
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-5 h-5 text-blue-700" />
                        <h3 className="text-lg font-bold text-gray-900">Delivery Location</h3>
                    </div>
                    <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                        <option value="">Select your city...</option>
                        {deliveryZones.map((zone) => (
                            <optgroup key={zone.name} label={zone.name}>
                                {zone.cities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                    {selectedCity && (
                        <p className="mt-3 text-sm text-blue-900">
                            <span className="font-semibold">Delivery Fee:</span> {deliveryFee === 0 ? 'FREE' : `$${deliveryFee}`}
                        </p>
                    )}
                </div>

                {/* Price Breakdown */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-300">
                    <div className="flex items-center gap-2 mb-4">
                        <DollarSign className="w-6 h-6 text-gray-700" />
                        <h3 className="text-xl font-bold text-gray-900">Price Breakdown</h3>
                    </div>

                    <div className="space-y-3">
                        {/* Item breakdown */}
                        {[...inventoryData.tables, ...inventoryData.chairs].map((item) => {
                            const itemTotal = calculateItemTotal(item.id)
                            if (quantities[item.id] === 0) return null

                            return (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-gray-600">
                                        {item.englishName} × {quantities[item.id]} × {rentalDays} {rentalDays === 1 ? 'day' : 'days'}
                                    </span>
                                    <span className="font-semibold text-gray-900">${itemTotal}</span>
                                </div>
                            )
                        })}

                        {subtotal > 0 && (
                            <>
                                <div className="border-t border-gray-300 pt-3 flex justify-between">
                                    <span className="font-semibold text-gray-700">Subtotal:</span>
                                    <span className="font-semibold text-gray-900">${subtotal}</span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">
                                        Delivery Fee {selectedCity && `(${selectedCity})`}:
                                    </span>
                                    <span className="font-semibold text-gray-900">
                                        {deliveryFee === 0 ? 'FREE' : `$${deliveryFee}`}
                                    </span>
                                </div>

                                <div className="border-t-2 border-gray-400 pt-4 flex justify-between items-baseline">
                                    <span className="text-2xl font-bold text-gray-900">Total:</span>
                                    <span className="text-4xl font-extrabold text-purple-600">
                                        ${total}
                                    </span>
                                </div>
                            </>
                        )}

                        {subtotal === 0 && (
                            <p className="text-center text-gray-500 py-4 font-light">
                                Select items above to see your quote
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
