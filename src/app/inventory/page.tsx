'use client'

import inventoryData from '@/data/inventory.json'
import { Table2, Armchair, Users, Ruler } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import PriceCalculator from '@/components/PriceCalculator'

export default function Inventory() {
    const tableHeaderRef = useRef<HTMLDivElement>(null)
    const chairHeaderRef = useRef<HTMLDivElement>(null)
    const tableCardsRef = useRef<(HTMLDivElement | null)[]>([])
    const chairCardsRef = useRef<(HTMLDivElement | null)[]>([])
    const tableIconsRef = useRef<(SVGSVGElement | null)[]>([])
    const chairIconsRef = useRef<(SVGSVGElement | null)[]>([])
    const tablePricesRef = useRef<(HTMLSpanElement | null)[]>([])
    const chairPricesRef = useRef<(HTMLSpanElement | null)[]>([])
    const calculatorSectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Clear any previous animations
        gsap.set([tableHeaderRef.current, chairHeaderRef.current, tableCardsRef.current, chairCardsRef.current, calculatorSectionRef.current], { clearProps: 'all' })

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Animate Tables header with slide & reveal
        tl.fromTo(tableHeaderRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
        )
        // Staggered grid entrance for table cards
        .fromTo(tableCardsRef.current,
            { y: 80, opacity: 0, scale: 0.9, rotateX: -15 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                rotateX: 0,
                duration: 0.7,
                stagger: {
                    amount: 0.6,
                    from: 'start',
                    grid: 'auto'
                },
                ease: 'back.out(1.4)'
            },
            '-=0.4'
        )
        // Animate Chairs header
        .fromTo(chairHeaderRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
            '-=0.3'
        )
        // Staggered grid entrance for chair cards
        .fromTo(chairCardsRef.current,
            { y: 80, opacity: 0, scale: 0.9, rotateX: -15 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                rotateX: 0,
                duration: 0.7,
                stagger: {
                    amount: 0.6,
                    from: 'start',
                    grid: 'auto'
                },
                ease: 'back.out(1.4)'
            },
            '-=0.4'
        )

        // Continuous floating animation for all icons
        tableIconsRef.current.forEach((icon, index) => {
            if (icon) {
                gsap.to(icon, {
                    y: -8,
                    duration: 2 + (index * 0.2),
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    delay: index * 0.1
                })
            }
        })

        chairIconsRef.current.forEach((icon, index) => {
            if (icon) {
                gsap.to(icon, {
                    y: -8,
                    duration: 2 + (index * 0.2),
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    delay: index * 0.1
                })
            }
        })

        // Counter animation for prices
        tablePricesRef.current.forEach((priceEl, index) => {
            if (priceEl) {
                const finalPrice = inventoryData.tables[index].priceFrom
                gsap.fromTo(priceEl,
                    { textContent: 0 },
                    {
                        textContent: finalPrice,
                        duration: 1.5,
                        delay: 0.5 + (index * 0.1),
                        snap: { textContent: 1 },
                        onUpdate: function() {
                            priceEl.textContent = '$' + Math.round(parseFloat(priceEl.textContent || '0'))
                        }
                    }
                )
            }
        })

        chairPricesRef.current.forEach((priceEl, index) => {
            if (priceEl) {
                const finalPrice = inventoryData.chairs[index].priceFrom
                gsap.fromTo(priceEl,
                    { textContent: 0 },
                    {
                        textContent: finalPrice,
                        duration: 1.5,
                        delay: 1 + (index * 0.1),
                        snap: { textContent: 1 },
                        onUpdate: function() {
                            priceEl.textContent = '$' + Math.round(parseFloat(priceEl.textContent || '0'))
                        }
                    }
                )
            }
        })

        // Animate calculator section with special entrance
        if (calculatorSectionRef.current) {
            tl.fromTo(calculatorSectionRef.current,
                { y: 80, opacity: 0, scale: 0.95, rotateX: -10 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    duration: 1,
                    ease: 'back.out(1.4)'
                },
                '-=0.3'
            )

            // Gentle floating effect for calculator
            gsap.to(calculatorSectionRef.current, {
                y: -8,
                duration: 3,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
                delay: 1
            })
        }
    }, [])

    const handleCardTilt = (e: React.MouseEvent<HTMLDivElement>, cardRef: HTMLDivElement) => {
        const rect = cardRef.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 10

        gsap.to(cardRef, {
            rotateX,
            rotateY,
            transformPerspective: 1000,
            duration: 0.3,
            ease: 'power2.out',
        })
    }

    const handleCardReset = (cardRef: HTMLDivElement) => {
        gsap.to(cardRef, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out',
        })
    }

    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Tables Section */}
                <section className="mb-24">
                    <div ref={tableHeaderRef} className="mb-12">
                        <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
                            Tables
                        </h2>
                        <p className="text-lg text-gray-600 font-light">
                            Perfect seating solutions for any event size
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        {inventoryData.tables.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => { tableCardsRef.current[index] = el }}
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200 card-tilt"
                                onMouseMove={(e) => {
                                    const card = tableCardsRef.current[index]
                                    if (card) handleCardTilt(e, card)
                                }}
                                onMouseLeave={() => {
                                    const card = tableCardsRef.current[index]
                                    if (card) handleCardReset(card)
                                }}
                            >
                                <div className="relative h-56 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                    <Table2
                                        ref={(el) => { tableIconsRef.current[index] = el }}
                                        className="w-24 h-24 text-emerald-600 group-hover:scale-110 transition-transform duration-300"
                                        strokeWidth={1.5}
                                    />
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
                                            <span
                                                ref={(el) => { tablePricesRef.current[index] = el }}
                                                className="text-4xl font-bold text-emerald-600 tracking-tight"
                                            >
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
                </section>

                {/* Chairs Section */}
                <section className="mb-16">
                    <div ref={chairHeaderRef} className="mb-12">
                        <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
                            Chairs
                        </h2>
                        <p className="text-lg text-gray-600 font-light">
                            Comfortable and stylish seating options
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        {inventoryData.chairs.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => { chairCardsRef.current[index] = el }}
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 card-tilt"
                                onMouseMove={(e) => {
                                    const card = chairCardsRef.current[index]
                                    if (card) handleCardTilt(e, card)
                                }}
                                onMouseLeave={() => {
                                    const card = chairCardsRef.current[index]
                                    if (card) handleCardReset(card)
                                }}
                            >
                                <div className="relative h-56 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                    <Armchair
                                        ref={(el) => { chairIconsRef.current[index] = el }}
                                        className="w-24 h-24 text-blue-600 group-hover:scale-110 transition-transform duration-300"
                                        strokeWidth={1.5}
                                    />
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
                                            <span
                                                ref={(el) => { chairPricesRef.current[index] = el }}
                                                className="text-4xl font-bold text-blue-600 tracking-tight"
                                            >
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
                </section>

                {/* Price Calculator Section */}
                <section ref={calculatorSectionRef} id="calculator" className="mb-16 scroll-mt-20">
                    <PriceCalculator />
                </section>
            </div>

            <style jsx>{`
                .card-tilt {
                    transform-style: preserve-3d;
                    will-change: transform;
                }
            `}</style>
        </div>
    )
}
