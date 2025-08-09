import Image from "next/image";
import Link from "next/link";
import { PHONE_E164, SMS_BODY_TEMPLATE } from "../lib/config";

type Item = {
    id: string;
    category: string;
    type: string;
    name: string;
    size: string;
    priceFrom: number;
    photo: string;
};

export default function ItemCard({ item }: { item: Item }) {
    return (
        <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
            <div className="relative h-44 w-full">
                <Image
                    src={`/images/${item.photo}`}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false}
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.size}</p>
                <p className="mt-2 text-sm">
                    From <span className="font-semibold">${item.priceFrom}</span>
                </p>
                <div className="mt-3 flex gap-2">
                    <Link
                        href={`sms:${PHONE_E164}&body=${SMS_BODY_TEMPLATE}`}
                        className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50"
                    >
                        Text for Quote
                    </Link>
                    <Link
                        href={`/contact?item=${encodeURIComponent(item.name)}`}
                        className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}
