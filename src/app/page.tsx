'use client'

import Link from 'next/link'
import { Package, MapPin, HelpCircle, Mail } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Home() {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gradientTextRef = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const title = titleRef.current
    const gradientText = gradientTextRef.current
    const subtitle = subtitleRef.current

    // Set initial state to ensure visibility
    gsap.set([title, gradientText, subtitle, cardsRef.current], { clearProps: 'all' })

    // GSAP Timeline for staggered entrance
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Animate title
    tl.fromTo(title,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
    )
    // Animate gradient text with bounce
    .fromTo(gradientText,
      { scale: 0, opacity: 0, rotation: -180 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.6)' },
      '-=0.3'
    )
    // Animate subtitle
    .fromTo(subtitle,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.5'
    )
    // Animate cards
    .fromTo(cardsRef.current,
      { y: 60, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)' },
      '-=0.4'
    )

    // Continuous floating animation for gradient text
    gsap.to(gradientText, {
      y: -10,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    })

    // Subtle shimmer effect on gradient text
    gsap.to(gradientText, {
      backgroundPosition: '200% center',
      duration: 3,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  const handleCardTilt = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    const card = cardsRef.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleCardReset = (index: number) => {
    const card = cardsRef.current[index]
    if (!card) return

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Title */}
          <div
            ref={heroRef}
            className="mb-12"
          >
            <h1
              ref={titleRef}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight"
              style={{ perspective: '1000px' }}
            >
              Your Perfect Party <br />
              <span
                ref={gradientTextRef}
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent inline-block"
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                Awaits!
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light max-w-2xl mx-auto"
            >
              Professional table and chair rentals for birthday parties throughout the Rio Grande Valley.
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            <Link
              href="/inventory"
              ref={(el) => { cardsRef.current[0] = el }}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 card-tilt"
              onMouseMove={(e) => handleCardTilt(e, 0)}
              onMouseLeave={() => handleCardReset(0)}
            >
              <Package className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="block font-bold text-gray-900 text-lg tracking-tight">Inventory</span>
            </Link>
            <Link
              href="/rental-info"
              ref={(el) => { cardsRef.current[1] = el }}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 card-tilt"
              onMouseMove={(e) => handleCardTilt(e, 1)}
              onMouseLeave={() => handleCardReset(1)}
            >
              <svg className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="block font-bold text-gray-900 text-lg tracking-tight">Rental Info</span>
            </Link>
            <Link
              href="/service-areas"
              ref={(el) => { cardsRef.current[2] = el }}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 card-tilt"
              onMouseMove={(e) => handleCardTilt(e, 2)}
              onMouseLeave={() => handleCardReset(2)}
            >
              <MapPin className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="block font-bold text-gray-900 text-lg tracking-tight">Service Areas</span>
            </Link>
            <Link
              href="/faq"
              ref={(el) => { cardsRef.current[3] = el }}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 card-tilt"
              onMouseMove={(e) => handleCardTilt(e, 3)}
              onMouseLeave={() => handleCardReset(3)}
            >
              <HelpCircle className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="block font-bold text-gray-900 text-lg tracking-tight">FAQ</span>
            </Link>
            <Link
              href="/contact"
              ref={(el) => { cardsRef.current[4] = el }}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 col-span-2 md:col-span-1 card-tilt"
              onMouseMove={(e) => handleCardTilt(e, 4)}
              onMouseLeave={() => handleCardReset(4)}
            >
              <Mail className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="block font-bold text-gray-900 text-lg tracking-tight">Contact</span>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .card-tilt {
          transform-style: preserve-3d;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}