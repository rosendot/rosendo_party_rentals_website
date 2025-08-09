export default function RentalInfoPage() {
    return (
        <section className="space-y-8">
            <h1 className="text-2xl font-bold">Rental Information</h1>

            <div className="rounded-xl bg-white p-6 shadow-sm space-y-4">
                <h2 className="font-semibold">Pricing</h2>
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                    <li>Bounce Houses: $119–$159</li>
                    <li>Combos (Dry): $169–$229</li>
                    <li>Tables: from $8 • Chairs: from $1.25</li>
                    <li>Add-ons: cords, generators, etc.</li>
                </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm space-y-2">
                <h2 className="font-semibold">Delivery Areas & Fees</h2>
                <p className="text-sm text-gray-700">RGV cities. Fee based on distance—quoted at booking.</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm space-y-2">
                <h2 className="font-semibold">Setup Rules</h2>
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                    <li>Flat, clear space with power within 50ft (or add a generator).</li>
                    <li>Grass preferred; concrete requires sandbags/straps.</li>
                    <li>Adults must supervise inflatables at all times.</li>
                </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm space-y-2">
                <h2 className="font-semibold">Weather & Cancellation</h2>
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                    <li>High winds or lightning = safety first; we can reschedule or refund.</li>
                    <li>Free weather reschedule if unsafe conditions on delivery day.</li>
                </ul>
            </div>
        </section>
    );
}
