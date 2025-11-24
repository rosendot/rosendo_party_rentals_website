'use client'

import Link from 'next/link'
import { DollarSign, Truck, FileText, Calendar, Clock, Package, Sparkles, CheckCircle, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function RentalInfo() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
                    {/* Pricing & Packages */}
                    <div className="space-y-8">
                        <div
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                            style={{
                                animation: mounted ? 'fadeInUp 0.6s ease-out both' : 'none'
                            }}
                        >
                            <div className="p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-emerald-50 rounded-xl">
                                        <DollarSign className="w-8 h-8 text-emerald-600" strokeWidth={2} />
                                    </div>
                                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                                        Pricing
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="pb-6 border-b border-gray-100">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Tables</h3>
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-base text-gray-600 font-light">Round Tables 60"</span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-3xl font-bold text-emerald-600 tracking-tight">$12</span>
                                                <span className="text-sm text-gray-500 font-light">/day</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pb-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Chairs</h3>
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-base text-gray-600 font-light">Folding Chairs</span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-3xl font-bold text-emerald-600 tracking-tight">$2</span>
                                                <span className="text-sm text-gray-500 font-light">/day</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200">
                                    <div className="flex gap-3">
                                        <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-amber-900 text-sm font-medium leading-relaxed">
                                                <strong className="font-bold">Package Deals Available!</strong> Save money by renting multiple tables and chairs together.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Delivery Areas */}
                        <div
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                            style={{
                                animation: mounted ? 'fadeInUp 0.6s ease-out 0.1s both' : 'none'
                            }}
                        >
                            <div className="p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-blue-50 rounded-xl">
                                        <MapPin className="w-8 h-8 text-blue-600" strokeWidth={2} />
                                    </div>
                                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                                        Delivery Areas
                                    </h2>
                                </div>

                                <p className="text-base text-gray-600 leading-relaxed font-light">
                                    We serve various cities across the Rio Grande Valley. View our complete service area map and delivery pricing on our{' '}
                                    <Link href="/service-areas" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2 transition-colors">
                                        Service Areas page
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Policies & Requirements */}
                    <div className="space-y-8">
                        <div
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                            style={{
                                animation: mounted ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none'
                            }}
                        >
                            <div className="p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-purple-50 rounded-xl">
                                        <FileText className="w-8 h-8 text-purple-600" strokeWidth={2} />
                                    </div>
                                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                                        Rental Policies
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Calendar className="w-5 h-5 text-purple-600" />
                                            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Booking & Payment</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>No deposit needed to reserve your rental</span>
                                            </li>
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Full payment due at delivery</span>
                                            </li>
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Cash or digital payments accepted: Zelle, CashApp, PayPal</span>
                                            </li>
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Cancel 2+ days in advance at no charge</span>
                                            </li>
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Late cancellations: $20 fee</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Clock className="w-5 h-5 text-purple-600" />
                                            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Rental Times</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Priced per day with overnight use included</span>
                                            </li>
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Perfect for birthday parties and celebrations</span>
                                            </li>
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Delivery & setup between 12pm - 5pm</span>
                                            </li>
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Pickup window: 12pm - 5pm next day</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Setup & Delivery */}
                        <div
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                            style={{
                                animation: mounted ? 'fadeInUp 0.6s ease-out 0.3s both' : 'none'
                            }}
                        >
                            <div className="p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-orange-50 rounded-xl">
                                        <Truck className="w-8 h-8 text-orange-600" strokeWidth={2} />
                                    </div>
                                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                                        Setup & Delivery
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Truck className="w-5 h-5 text-orange-600" />
                                            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Delivery & Setup</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>We deliver and set up everything for you</span>
                                            </li>
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>All items arrive sanitized and party-ready</span>
                                            </li>
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Setup at your preferred location on-site</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Package className="w-5 h-5 text-orange-600" />
                                            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Teardown & Pickup</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>We take care of all breakdown and removal</span>
                                            </li>
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Just wipe down the tables and chairs after your event</span>
                                            </li>
                                            <li className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Leave everything out - we'll pack it all up</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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