export default function FAQPage() {
    const faqs = [
        { q: "How long is a rental?", a: "Typical daily rentals are 6–8 hours. Ask if you need overnight." },
        { q: "Do you clean the inflatables?", a: "Yes, sanitized after every rental." },
        { q: "What power do I need?", a: "Standard 110V outlet within 50ft. Generators available." },
        { q: "What if it rains or is windy?", a: "We’ll reschedule or refund if unsafe due to weather." }
    ];

    return (
        <section className="space-y-6">
            <h1 className="text-2xl font-bold">FAQ</h1>
            <div className="space-y-3">
                {faqs.map((f, i) => (
                    <details key={i} className="rounded-xl bg-white p-4 shadow-sm">
                        <summary className="cursor-pointer font-medium">{f.q}</summary>
                        <p className="mt-2 text-sm text-gray-700">{f.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
