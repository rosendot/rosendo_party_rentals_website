'use client'

import Link from 'next/link'
import { DollarSign, Truck, FileText, Calendar, Clock, Package, Sparkles, CheckCircle, MapPin } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import inventoryData from '@/data/inventory.json'

export default function RentalInfo() {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const iconsRef = useRef<(SVGSVGElement | null)[]>([])
    const pricesRef = useRef<(HTMLSpanElement | null)[]>([])
    const listItemsRef = useRef<(HTMLLIElement | null)[]>([])
    const highlightBoxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Clear any previous animations
        gsap.set([cardsRef.current, listItemsRef.current], { clearProps: 'all' })

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Staggered card entrance with 3D rotation
        tl.fromTo(cardsRef.current,
            { y: 80, opacity: 0, scale: 0.95, rotateX: -15 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                rotateX: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'back.out(1.4)'
            }
        )

        // Animate list items with stagger
        .fromTo(listItemsRef.current,
            { x: -20, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.05,
                ease: 'power2.out'
            },
            '-=0.4'
        )

        // Highlight box special effect
        if (highlightBoxRef.current) {
            tl.fromTo(highlightBoxRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'back.out(1.7)'
                },
                '-=0.6'
            )

            // Continuous gentle pulse
            gsap.to(highlightBoxRef.current, {
                scale: 1.02,
                duration: 2,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true
            })
        }

        // Floating animations for header icons
        iconsRef.current.forEach((icon, index) => {
            if (icon) {
                gsap.to(icon, {
                    y: -6,
                    duration: 2 + (index * 0.3),
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    delay: index * 0.2
                })
            }
        })

        // Counter animation for prices (dynamically based on inventory count)
        pricesRef.current.forEach((priceEl, index) => {
            if (priceEl) {
                const priceText = priceEl.getAttribute('data-price')
                const finalPrice = priceText ? parseInt(priceText) : 0
                gsap.fromTo(priceEl,
                    { textContent: 0 },
                    {
                        textContent: finalPrice,
                        duration: 1.5,
                        delay: 0.5,
                        snap: { textContent: 1 },
                        onUpdate: function() {
                            priceEl.textContent = '$' + Math.round(parseFloat(priceEl.textContent || '0'))
                        }
                    }
                )
            }
        })
    }, [])

    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
                    {/* Pricing & Packages */}
                    <div className="space-y-8">
                        <div
                            ref={(el) => { cardsRef.current[0] = el }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden card-3d"
                        >
                            <div className="p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-emerald-50 rounded-xl">
                                        <DollarSign
                                            ref={(el) => { iconsRef.current[0] = el }}
                                            className="w-8 h-8 text-emerald-600"
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                                        Pricing
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    {/* Tables Section */}
                                    <div className="pb-6 border-b border-gray-100">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Tables</h3>
                                        <div className="space-y-3">
                                            {inventoryData.tables.map((table, index) => (
                                                <div key={table.id} className="flex justify-between items-baseline">
                                                    <span className="text-base text-gray-600 font-light">
                                                        {table.englishName} {table.size}
                                                    </span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span
                                                            ref={(el) => { pricesRef.current[index] = el }}
                                                            data-price={table.priceFrom}
                                                            className="text-3xl font-bold text-emerald-600 tracking-tight"
                                                        >
                                                            ${table.priceFrom}
                                                        </span>
                                                        <span className="text-sm text-gray-500 font-light">/day</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Chairs Section */}
                                    <div className="pb-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Chairs</h3>
                                        <div className="space-y-3">
                                            {inventoryData.chairs.map((chair, index) => (
                                                <div key={chair.id} className="flex justify-between items-baseline">
                                                    <span className="text-base text-gray-600 font-light">{chair.englishName}</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span
                                                            ref={(el) => { pricesRef.current[inventoryData.tables.length + index] = el }}
                                                            data-price={chair.priceFrom}
                                                            className="text-3xl font-bold text-emerald-600 tracking-tight"
                                                        >
                                                            ${chair.priceFrom}
                                                        </span>
                                                        <span className="text-sm text-gray-500 font-light">/day</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    ref={highlightBoxRef}
                                    className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200"
                                >
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
                            ref={(el) => { cardsRef.current[1] = el }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden card-3d"
                        >
                            <div className="p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-blue-50 rounded-xl">
                                        <MapPin
                                            ref={(el) => { iconsRef.current[1] = el }}
                                            className="w-8 h-8 text-blue-600"
                                            strokeWidth={2}
                                        />
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
                            ref={(el) => { cardsRef.current[2] = el }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden card-3d"
                        >
                            <div className="p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-purple-50 rounded-xl">
                                        <FileText
                                            ref={(el) => { iconsRef.current[2] = el }}
                                            className="w-8 h-8 text-purple-600"
                                            strokeWidth={2}
                                        />
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
                                            <li ref={(el) => { listItemsRef.current[0] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>No deposit needed to reserve your rental</span>
                                            </li>
                                            <li ref={(el) => { listItemsRef.current[1] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Full payment due at delivery</span>
                                            </li>
                                            <li ref={(el) => { listItemsRef.current[2] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Cash or digital payments accepted: Zelle, CashApp, PayPal</span>
                                            </li>
                                            <li ref={(el) => { listItemsRef.current[3] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Cancel 2+ days in advance at no charge</span>
                                            </li>
                                            <li ref={(el) => { listItemsRef.current[4] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
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
                                            <li ref={(el) => { listItemsRef.current[5] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Priced per day with overnight use included</span>
                                            </li>
                                            <li ref={(el) => { listItemsRef.current[6] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Perfect for birthday parties and celebrations</span>
                                            </li>
                                            <li ref={(el) => { listItemsRef.current[7] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Delivery & setup between 12pm - 5pm</span>
                                            </li>
                                            <li ref={(el) => { listItemsRef.current[8] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
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
                            ref={(el) => { cardsRef.current[3] = el }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden card-3d"
                        >
                            <div className="p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-orange-50 rounded-xl">
                                        <Truck
                                            ref={(el) => { iconsRef.current[3] = el }}
                                            className="w-8 h-8 text-orange-600"
                                            strokeWidth={2}
                                        />
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
                                            <li ref={(el) => { listItemsRef.current[9] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>We deliver and set up everything for you</span>
                                            </li>
                                            <li ref={(el) => { listItemsRef.current[10] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>All items arrive sanitized and party-ready</span>
                                            </li>
                                            <li ref={(el) => { listItemsRef.current[11] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
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
                                            <li ref={(el) => { listItemsRef.current[12] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>We take care of all breakdown and removal</span>
                                            </li>
                                            <li ref={(el) => { listItemsRef.current[13] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Just wipe down the tables and chairs after your event</span>
                                            </li>
                                            <li ref={(el) => { listItemsRef.current[14] = el }} className="flex gap-3 text-base text-gray-600 font-light leading-relaxed">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>Leave everything out - we&apos;ll pack it all up</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .card-3d {
                    transform-style: preserve-3d;
                }
            `}</style>
        </div>
    )
}
