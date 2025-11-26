'use client'
import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'
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

    useEffect(() => {
        // Clear any previous animations
        gsap.set([mapSectionRef.current], { clearProps: 'all' })

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
    }, [])

    return (
        <div className="min-h-screen py-16">
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
            </div>
        </div>
    )
}
