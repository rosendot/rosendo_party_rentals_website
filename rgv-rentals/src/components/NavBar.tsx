import Link from "next/link";
import { BUSINESS_NAME } from "../lib/config";

export default function NavBar() {
    const links = [
        { href: "/", label: "Home" },
        { href: "/inventory", label: "Inventory" },
        { href: "/rental-info", label: "Rental Info" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" }
    ];

    return (
        <header className="border-b bg-white/70 backdrop-blur">
            <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <Link href="/" className="font-semibold text-lg">
                    {BUSINESS_NAME}
                </Link>
                <ul className="flex gap-4 text-sm">
                    {links.map(l => (
                        <li key={l.href}>
                            <Link href={l.href} className="hover:text-blue-600">
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
