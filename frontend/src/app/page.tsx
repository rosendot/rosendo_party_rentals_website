import Link from 'next/link'
import { businessConfig } from '@/lib/config'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-bounce">
            ¡Mi Fiesta Rentals!
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">
            Hacemos que tu fiesta sea perfecta 🎉
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Bounce Houses • Tables & Chairs • Party Supplies
          </p>
          <p className="text-lg mb-8">
            Serving the Rio Grande Valley with ❤️
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessConfig.phone}`}
              className="bg-yellow-400 hover:bg-yellow-300 text-purple-800 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              📞 Call Now: {businessConfig.phone}
            </a>
            <a
              href={`sms:${businessConfig.phone}?&body=Hola! I'm interested in party rentals. Date: ____ City: ____ Items needed: ____`}
              className="bg-green-400 hover:bg-green-300 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              💬 Text Us
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl animate-spin">🎈</div>
        <div className="absolute top-20 right-20 text-4xl animate-bounce">🎪</div>
        <div className="absolute bottom-10 left-20 text-5xl animate-pulse">🎉</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-spin">🎊</div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
            ¿Qué ofrecemos? / What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-6xl mb-4">🏰</div>
              <h3 className="text-xl font-bold text-pink-700 mb-2">Bounce Houses</h3>
              <p className="text-gray-600">Casas de brincos seguras y divertidas</p>
              <p className="text-sm text-pink-600 font-medium mt-2">From $110</p>
            </div>

            <div className="text-center bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-6xl mb-4">🛝</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Combo Units</h3>
              <p className="text-gray-600">Bounce + slide combinations</p>
              <p className="text-sm text-blue-600 font-medium mt-2">From $170</p>
            </div>

            <div className="text-center bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-6xl mb-4">🪑</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Tables & Chairs</h3>
              <p className="text-gray-600">Mesas y sillas para todos</p>
              <p className="text-sm text-green-600 font-medium mt-2">From $2</p>
            </div>

            <div className="text-center bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-6xl mb-4">🍿</div>
              <h3 className="text-xl font-bold text-yellow-700 mb-2">Party Add-ons</h3>
              <p className="text-gray-600">Popcorn, snow cones & more!</p>
              <p className="text-sm text-yellow-600 font-medium mt-2">From $40</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/inventory"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Ver Todo el Inventario 🎪
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-purple-800">
            Serving the Rio Grande Valley 🌮
          </h2>
          <p className="text-xl mb-6 text-gray-700">
            We deliver to: {businessConfig.cities.join(" • ")}
          </p>
          <p className="text-lg text-purple-600 font-medium">
            Professional delivery, setup & pickup included!
          </p>
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-purple-800">
              Clean, Safe & Reliable ✨
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <div className="text-4xl mb-4">🧼</div>
                <h3 className="text-xl font-bold text-green-700 mb-2">Sanitized</h3>
                <p>Every item cleaned and disinfected before delivery</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">Insured</h3>
                <p>Fully licensed and insured for your peace of mind</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">On Time</h3>
                <p>Professional delivery and setup when promised</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book Your Fiesta? 🎉
          </h2>
          <p className="text-xl mb-8">
            Call, text, or WhatsApp us for instant quotes!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessConfig.phone}`}
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              📞 {businessConfig.phone}
            </a>
            <a
              href={businessConfig.social.whatsapp}
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              💬 WhatsApp
            </a>
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-purple-800 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              📧 Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}