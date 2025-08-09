import Link from "next/link";
import { PHONE_DISPLAY, PHONE_E164 } from "../lib/config";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Party Rentals in the Rio Grande Valley</h1>
        <p className="mt-3 text-gray-700">
          Bounce houses, combos (dry), tables & chairs, and add-ons. Delivery and setup available.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/inventory" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Browse Inventory
          </Link>
          <Link href={`tel:${PHONE_E164}`} className="rounded-md border px-4 py-2 hover:bg-gray-50">
            Call/Text {PHONE_DISPLAY}
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Service Area</h3>
          <p className="mt-2 text-sm text-gray-700">RGV cities. Delivery fees vary by distance.</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Safety</h3>
          <p className="mt-2 text-sm text-gray-700">Cleaned and sanitized after every rental.</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Easy Booking</h3>
          <p className="mt-2 text-sm text-gray-700">Message us with your date, city, and item.</p>
        </div>
      </div>
    </section>
  );
}
