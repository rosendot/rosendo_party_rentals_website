'use client'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import { businessConfig } from '@/lib/config'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'

// Fix for default marker icon in react-leaflet
const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

// Approximate coordinates for RGV cities
const cityCoordinates: Record<string, [number, number]> = {
    "McAllen": [26.2034, -98.2300],
    "Edinburg": [26.3017, -98.1633],
    "Mission": [26.2159, -98.3253],
    "Pharr": [26.1948, -98.1836],
    "Brownsville": [25.9017, -97.4975],
    "Harlingen": [26.1906, -97.6961],
    "Weslaco": [26.1595, -97.9908],
    "Mercedes": [26.1498, -97.9142],
    "La Joya": [26.2459, -98.4753],
    "Alamo": [26.1837, -98.1228]
}

export default function ServiceAreaMap() {
    useEffect(() => {
        // Fix for Leaflet in Next.js
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        })
    }, [])

    // Center of RGV (approximately McAllen)
    const center: [number, number] = [26.2034, -98.2300]

    return (
        <div className="w-full h-[500px] rounded-lg overflow-hidden border-2 border-gray-300">
            <MapContainer
                center={center}
                zoom={9}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
                className="z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Service area circle overlay */}
                <Circle
                    center={center}
                    radius={50000} // 50km radius
                    pathOptions={{
                        color: '#9333ea',
                        fillColor: '#c084fc',
                        fillOpacity: 0.1,
                        weight: 2
                    }}
                />

                {/* City markers */}
                {businessConfig.cities.map(city => {
                    const coords = cityCoordinates[city]
                    if (!coords) return null

                    return (
                        <Marker key={city} position={coords} icon={icon}>
                            <Popup>
                                <div className="text-center p-2">
                                    <h3 className="font-bold text-purple-700 text-lg mb-2">
                                        {city}
                                    </h3>
                                    <p className="text-green-600 font-semibold mb-2">
                                        ✓ We deliver here!
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Professional delivery, setup & pickup included
                                    </p>
                                    <a
                                        href={`tel:${businessConfig.phone}`}
                                        className="inline-block mt-3 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-purple-700 transition-colors"
                                    >
                                        📞 Call to Book
                                    </a>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </div>
    )
}
