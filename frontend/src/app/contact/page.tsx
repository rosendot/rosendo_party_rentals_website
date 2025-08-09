"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { EMAIL, PHONE_DISPLAY, PHONE_E164, WHATSAPP_E164, SMS_BODY_TEMPLATE } from "../../lib/config";

export default function ContactPage() {
    const params = useSearchParams();
    const item = params.get("item") || "";

    const smsBody = encodeURIComponent(
        item ? `Hi! Date: ____  City: ____  Item(s): ${item}` : decodeURIComponent(SMS_BODY_TEMPLATE)
    );

    return (
        <section className="space-y-6">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <div className="rounded-xl bg-white p-6 shadow-sm space-y-3 text-sm">
                <p>
                    <strong>Phone:</strong>{" "}
                    <Link href={`tel:${PHONE_E164}`} className="text-blue-600 hover:underline">
                        {PHONE_DISPLAY}
                    </Link>
                </p>
                <p>
                    <strong>Text:</strong>{" "}
                    <Link href={`sms:${PHONE_E164}&body=${smsBody}`} className="text-blue-600 hover:underline">
                        Open SMS with template
                    </Link>
                </p>
                <p>
                    <strong>WhatsApp:</strong>{" "}
                    <Link href={`https://wa.me/${WHATSAPP_E164}?text=${smsBody}`} className="text-blue-600 hover:underline">
                        Message on WhatsApp
                    </Link>
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    <Link
                        href={`mailto:${EMAIL}?subject=Party%20Quote&body=${smsBody}`}
                        className="text-blue-600 hover:underline"
                    >
                        {EMAIL}
                    </Link>
                </p>
            </div>
            <p className="text-gray-600 text-sm">
                Tip: include your date, city, surface (grass/concrete), and item(s) you want.
            </p>
        </section>
    );
}
