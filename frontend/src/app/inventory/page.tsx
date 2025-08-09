import inventory from "../../data/inventory.json";
import ItemCard from "../../components/ItemCard";

type Item = typeof inventory[number];

const ORDER = ["Bounce Houses", "Combos (Dry)", "Tables & Chairs", "Add-ons"];

function groupByCategory(items: Item[]) {
    const map = new Map<string, Item[]>();
    items.forEach(i => {
        const arr = map.get(i.category) || [];
        arr.push(i);
        map.set(i.category, arr);
    });
    // sort categories in the desired order
    return Array.from(map.entries()).sort(
        (a, b) => ORDER.indexOf(a[0]) - ORDER.indexOf(b[0])
    );
}

export default function InventoryPage() {
    const groups = groupByCategory(inventory as Item[]);

    return (
        <section className="space-y-10">
            <header>
                <h1 className="text-2xl font-bold">Inventory</h1>
                <p className="mt-2 text-gray-700">Pricing shown is “from” and may vary by date/city.</p>
            </header>

            {groups.map(([category, items]) => (
                <div key={category}>
                    <h2 className="text-xl font-semibold">{category}</h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map(item => <ItemCard key={item.id} item={item} />)}
                    </div>
                </div>
            ))}
        </section>
    );
}
