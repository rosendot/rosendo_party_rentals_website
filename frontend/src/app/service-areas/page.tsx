'use client'
import { businessConfig } from '@/lib/config'
import dynamic from 'next/dynamic'
import { MapPin, Truck, Settings, CheckCircle, Loader2 } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// Dynamically import map to avoid SSR issues
const Map = dynamic(() => import('@/components/ServiceAreaMap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[500px] bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
            <div className="text-center">
                <Loader2 className="w-12 h-12 text-purple-600 animate-spin mx-auto mb-3" />
                <p className="text-gray-600 font-light">Loading map...</p>
            </div>
        </div>
    )
})

export default function ServiceAreas() {
    const mapSectionRef = useRef<HTMLDivElement>(null)
    const mapHeaderRef = useRef<HTMLDivElement>(null)
    const citiesSectionRef = useRef<HTMLDivElement>(null)
    const citiesHeaderRef = useRef<HTMLDivElement>(null)
    const cityCardsRef = useRef<(HTMLDivElement | null)[]>([])
    const includedCardsRef = useRef<(HTMLDivElement | null)[]>([])
    const iconsRef = useRef<(SVGSVGElement | null)[]>([])

    useEffect(() => {
        // Clear any previous animations
        gsap.set([mapSectionRef.current, citiesSectionRef.current, cityCardsRef.current, includedCardsRef.current], { clearProps: 'all' })

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Animate map section
        tl.fromTo(mapSectionRef.current,
            { y: 60, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
        )
        // Animate map header
        .fromTo(mapHeaderRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            '-=0.4'
        )
        // Animate cities section
        .fromTo(citiesSectionRef.current,
            { y: 60, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
            '-=0.3'
        )
        // Animate cities header
        .fromTo(citiesHeaderRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            '-=0.4'
        )
        // Staggered city cards
        .fromTo(cityCardsRef.current,
            { y: 30, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.4,
                stagger: 0.03,
                ease: 'back.out(1.4)'
            },
            '-=0.4'
        )
        // Animate included cards
        .fromTo(includedCardsRef.current,
            { y: 40, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'back.out(1.4)'
            },
            '-=0.2'
        )

        // Floating animations for icons
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
    }, [])

    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Interactive Map */}
                <div ref={mapSectionRef} className="mb-12">
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden">
                        <div className="p-8 lg:p-10">
                            <div ref={mapHeaderRef} className="text-center mb-8">
                                <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                                    Delivery Pricing Map
                                </h2>
                                <p className="text-lg text-gray-600 font-light">
                                    Click on colored zones to see pricing and cities covered
                                </p>
                            </div>
                            <Map />
                        </div>
                    </div>
                </div>

                {/* Cities Grid */}
                <div ref={citiesSectionRef} className="mb-12">
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden">
                        <div className="p-8 lg:p-10">
                            <div ref={citiesHeaderRef} className="text-center mb-10">
                                <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                                    Cities We Serve
                                </h2>
                                <p className="text-lg text-gray-600 font-light">
                                    Proudly serving communities across the Rio Grande Valley
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
                                {businessConfig.cities.map((city, index) => (
                                    <div
                                        key={city}
                                        ref={(el) => { cityCardsRef.current[index] = el }}
                                        className="group bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl text-center border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <CheckCircle className="w-6 h-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                        <span className="font-bold text-gray-900 text-sm tracking-tight">{city}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center tracking-tight">
                                    What's Included
                                </h3>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div
                                        ref={(el) => { includedCardsRef.current[0] = el }}
                                        className="text-center group"
                                    >
                                        <div className="inline-flex p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Truck
                                                ref={(el) => { iconsRef.current[0] = el }}
                                                className="w-10 h-10 text-blue-600"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-3 text-lg tracking-tight">Delivery & Pickup</h4>
                                        <p className="text-base text-gray-600 font-light leading-relaxed">
                                            Professional delivery to your location (pricing varies by zone)
                                        </p>
                                    </div>
                                    <div
                                        ref={(el) => { includedCardsRef.current[1] = el }}
                                        className="text-center group"
                                    >
                                        <div className="inline-flex p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Settings
                                                ref={(el) => { iconsRef.current[1] = el }}
                                                className="w-10 h-10 text-emerald-600"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-3 text-lg tracking-tight">Setup Included</h4>
                                        <p className="text-base text-gray-600 font-light leading-relaxed">
                                            We set everything up for you
                                        </p>
                                    </div>
                                    <div
                                        ref={(el) => { includedCardsRef.current[2] = el }}
                                        className="text-center group"
                                    >
                                        <div className="inline-flex p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <MapPin
                                                ref={(el) => { iconsRef.current[2] = el }}
                                                className="w-10 h-10 text-purple-600"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-3 text-lg tracking-tight">Based in Edinburg</h4>
                                        <p className="text-base text-gray-600 font-light leading-relaxed">
                                            Serving the entire Rio Grande Valley region
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
