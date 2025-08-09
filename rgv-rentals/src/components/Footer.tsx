import Link from "next/link";
import { PHONE_DISPLAY, PHONE_E164, EMAIL } from "../lib/config";

export default function Footer() {
    return (
        <footer className="mt-16 border-t">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} RGV Party Rentals. All rights reserved.</p>
                    <p className="space-x-4">
                        <Link href={`tel:${PHONE_E164}`} className="hover:text-blue-600">
                            Call/Text: {PHONE_DISPLAY}
                        </Link>
                        <Link href={`mailto:${EMAIL}?subject=Party%20Quote`} className="hover:text-blue-600">
                            Email
                        </Link>
                    </p>
                </div>
                <p className="mt-2">Serving the Rio Grande Valley. Delivery available—fees vary by city.</p>
            </div>
        </footer>
    );
}
