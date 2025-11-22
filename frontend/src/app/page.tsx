import Link from 'next/link'
import { businessConfig } from '@/lib/config'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl text-party mb-6 title-shadow animate-pulse">
            Your Perfect Party Awaits! 🎉
          </h1>
          <h2 className="font-display text-3xl md:text-4xl text-purple-800 mb-6">
            Quality Table & Chair Rentals
          </h2>
          <p className="font-body text-xl text-gray-700 mb-8 leading-relaxed">
            Professional table and chair rentals for birthday parties and celebrations throughout the Rio Grande Valley.
            Clean, quality furniture delivered on time!
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
              🪑 See Our Inventory
            </Link>
          </div>

          <div className="text-center">
            <p className="font-body-bold text-green-600 text-lg mb-2">Proudly Serving the RGV:</p>
            <p className="font-body text-gray-600">
              {businessConfig.cities.slice(0, 6).join(' • ')} & more!
            </p>
          </div>
        </div>
      </section >

      {/* What We Offer */}
      < section className="container mx-auto px-4 py-16" >
        <h2 className="font-heading text-4xl md:text-5xl text-center text-purple-800 mb-12 title-shadow">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="text-center bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="text-7xl mb-4 animate-bounce">🪑</div>
            <h3 className="font-heading text-2xl text-green-700 mb-2">Round Tables</h3>
            <p className="font-body text-gray-600 mb-2">60" diameter</p>
            <p className="font-body text-sm text-gray-500 mb-3">Perfect for 8 people</p>
            <p className="font-body-bold text-lg text-green-600 mt-2">$12/day</p>
          </div>

          <div className="text-center bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="text-7xl mb-4 animate-bounce" style={{ animationDelay: '0.5s' }}>🪑</div>
            <h3 className="font-heading text-2xl text-blue-700 mb-2">Folding Chairs</h3>
            <p className="font-body text-gray-600 mb-2">Comfortable seating</p>
            <p className="font-body text-sm text-gray-500 mb-3">Adults & kids</p>
            <p className="font-body-bold text-lg text-blue-600 mt-2">$2/day</p>
          </div>
        </div>
      </section >

      {/* Why Choose Us */}
      < section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16" >
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-12 text-yellow-300 title-shadow">
            Why Choose Us?
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
            Ready to Book?
          </h2>
          <p className="font-body text-xl text-gray-700 mb-8">
            Call us today for your free quote on tables and chairs!
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