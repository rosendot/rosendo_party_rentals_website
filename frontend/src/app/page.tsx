import Link from 'next/link'
import { businessConfig } from '@/lib/config'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl text-party mb-6 title-shadow animate-pulse">
            ¡Tu Fiesta Perfecta! 🎉
          </h1>
          <h2 className="font-display text-3xl md:text-4xl text-purple-800 mb-6">
            Your Perfect Party Awaits!
          </h2>
          <p className="font-body text-xl text-gray-700 mb-8 leading-relaxed">
            Professional bounce house and party rentals serving the Rio Grande Valley.
            Clean, safe, and always on time! <span className="font-body-bold text-fiesta-purple">¡Hacemos que tu fiesta sea perfecta!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={`tel:${businessConfig.phone}`}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-heading text-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 party-hover shadow-xl"
            >
              📞 Call Now: {businessConfig.phone}
            </a>
            <Link
              href="/inventory"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-800 px-8 py-4 rounded-full font-heading text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 party-hover shadow-xl"
            >
              🏰 See Our Inventory
            </Link>
          </div>

          <div className="text-center">
            <p className="font-body-bold text-green-600 text-lg mb-2">🌮 Proudly Serving the RGV:</p>
            <p className="font-body text-gray-600">
              {businessConfig.cities.slice(0, 6).join(' • ')} & more!
            </p>
          </div>
        </div>
      </section >

      {/* What We Offer */}
      < section className="container mx-auto px-4 py-16" >
        <h2 className="font-heading text-4xl md:text-5xl text-center text-purple-800 mb-12 title-shadow">
          🎪 What We Offer / Lo Que Ofrecemos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="text-6xl mb-4 animate-bounce">🏰</div>
            <h3 className="font-heading text-xl text-pink-700 mb-2">Bounce Houses</h3>
            <p className="font-body text-gray-600">Casas de brincos seguras y divertidas</p>
            <p className="font-body-bold text-sm text-pink-600 mt-2">From $110</p>
          </div>

          <div className="text-center bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="text-6xl mb-4 animate-bounce" style={{ animationDelay: '0.5s' }}>🛝</div>
            <h3 className="font-heading text-xl text-blue-700 mb-2">Combo Units</h3>
            <p className="font-body text-gray-600">Bounce + slide combinations</p>
            <p className="font-body-bold text-sm text-blue-600 mt-2">From $170</p>
          </div>

          <div className="text-center bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="text-6xl mb-4 animate-bounce" style={{ animationDelay: '1s' }}>🪑</div>
            <h3 className="font-heading text-xl text-green-700 mb-2">Tables & Chairs</h3>
            <p className="font-body text-gray-600">Mesas y sillas para todos</p>
            <p className="font-body-bold text-sm text-green-600 mt-2">From $2</p>
          </div>

          <div className="text-center bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="text-6xl mb-4 animate-bounce" style={{ animationDelay: '1.5s' }}>🍿</div>
            <h3 className="font-heading text-xl text-yellow-700 mb-2">Party Add-ons</h3>
            <p className="font-body text-gray-600">Popcorn, snow cones & more!</p>
            <p className="font-body-bold text-sm text-yellow-600 mt-2">From $40</p>
          </div>
        </div>
      </section >

      {/* Why Choose Us */}
      < section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16" >
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-12 text-yellow-300 title-shadow">
            ¿Por Qué Elegirnos? / Why Choose Us? ⭐
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl mb-4 animate-pulse">✅</div>
              <h3 className="font-heading text-2xl mb-3 text-yellow-300">Always Clean</h3>
              <p className="font-body text-purple-100">Sanitized and inspected before every rental</p>
            </div>

            <div className="p-6">
              <div className="text-5xl mb-4 animate-pulse" style={{ animationDelay: '0.5s' }}>🚚</div>
              <h3 className="font-heading text-2xl mb-3 text-yellow-300">Free Delivery</h3>
              <p className="font-body text-purple-100">Professional setup throughout the RGV</p>
            </div>

            <div className="p-6">
              <div className="text-5xl mb-4 animate-pulse" style={{ animationDelay: '1s' }}>💯</div>
              <h3 className="font-heading text-2xl mb-3 text-yellow-300">Reliable</h3>
              <p className="font-body text-purple-100">On-time delivery, every time - guaranteed!</p>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="container mx-auto px-4 py-16 text-center" >
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="font-heading text-4xl md:text-5xl text-purple-800 mb-6 title-shadow">
            Ready to Party? 🎊
          </h2>
          <p className="font-body text-xl text-gray-700 mb-8">
            <span className="font-body-bold text-fiesta-purple">¡Llámanos hoy!</span> Call us today for your free quote!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessConfig.phone}`}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-heading text-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 party-hover shadow-xl"
            >
              📞 {businessConfig.phone}
            </a>
            <a
              href={businessConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-heading text-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 party-hover shadow-xl"
            >
              💬 WhatsApp Us
            </a>
          </div >
        </div >
      </section >
    </div >
  )
}