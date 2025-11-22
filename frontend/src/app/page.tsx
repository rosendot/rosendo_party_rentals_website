import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-[calc(100vh-4rem)]">
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl text-party mb-4 title-shadow">
            Your Perfect Party Awaits! 🎉
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
            Professional table and chair rentals for birthday parties throughout the Rio Grande Valley.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Link
              href="/inventory"
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-heading text-purple-800 hover:bg-purple-50"
            >
              🪑 Inventory
            </Link>
            <Link
              href="/rental-info"
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-heading text-purple-800 hover:bg-purple-50"
            >
              💰 Rental Info
            </Link>
            <Link
              href="/service-areas"
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-heading text-purple-800 hover:bg-purple-50"
            >
              📍 Service Areas
            </Link>
            <Link
              href="/faq"
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-heading text-purple-800 hover:bg-purple-50"
            >
              ❓ FAQ
            </Link>
            <Link
              href="/contact"
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-heading text-purple-800 hover:bg-purple-50"
            >
              ✉️ Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}