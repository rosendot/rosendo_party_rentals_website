'use client'
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'
import freeDeliveryGeoJSON from '@/data/free-delivery-zones.json'

// Delivery pricing zones with their regions
type DeliveryZone = {
    name: string
    fee: number
    color: string
    fillColor: string
    regions: string[]
    coordinates: [number, number][] | [number, number][][]
}

// Extract all city names and coordinates from the GeoJSON
const freeCities = freeDeliveryGeoJSON.features.map((feature: any) => feature.properties.NAME)
const freeCoordinates = freeDeliveryGeoJSON.features.flatMap((feature: any) =>
    feature.geometry.coordinates.map((ring: number[][]) =>
        ring.map(([lng, lat]: number[]) => [lat, lng] as [number, number])
    )
)

const deliveryZones: DeliveryZone[] = [
    {
        name: 'FREE Delivery',
        fee: 0,
        color: '#15803d',
        fillColor: '#86efac',
        regions: freeCities,
        // Actual city boundaries from GeoJSON
        coordinates: freeCoordinates
    },
    {
        name: '$15 Delivery Fee',
        fee: 15,
        color: '#ca8a04',
        fillColor: '#fde047',
        regions: ['Weslaco', 'Donna', 'Mercedes', 'Harlingen', 'San Benito'],
        // Polygon covering Weslaco/Harlingen area
        coordinates: [
            [26.4000, -98.0500], // NW (continues from free zone)
            [26.4000, -97.5000], // NE
            [26.0500, -97.5000], // SE
            [26.0500, -98.0500], // SW
        ]
    },
    {
        name: '$30 Delivery Fee',
        fee: 30,
        color: '#ea580c',
        fillColor: '#fdba74',
        regions: ['Brownsville', 'Los Fresnos', 'Rio Grande City', 'Roma', 'Raymondville'],
        // Polygon covering Brownsville/Roma/Raymondville area
        coordinates: [
            [26.5000, -99.0000], // NW (Roma area)
            [26.5000, -97.0000], // NE
            [25.8000, -97.0000], // SE (Brownsville area)
            [25.8000, -99.0000], // SW
        ]
    },
    {
        name: '$50 Delivery Fee',
        fee: 50,
        color: '#dc2626',
        fillColor: '#fca5a5',
        regions: ['South Padre Island', 'Port Isabel', 'Extended areas'],
        // Polygon covering outer areas
        coordinates: [
            [26.5000, -97.0000], // NW
            [26.5000, -96.5000], // NE (SPI area)
            [25.8000, -96.5000], // SE
            [25.8000, -97.0000], // SW
        ]
    }
]

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

    // Center on Edinburg (business base)
    const center: [number, number] = [26.3017, -98.1633]

    return (
        <div className="w-full space-y-4">
            {/* Map Legend */}
            <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                <h3 className="font-bold text-gray-700 mb-3">Delivery Pricing Zones</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {deliveryZones.map(zone => (
                        <div key={zone.name} className="flex items-center gap-2">
                            <div
                                className="w-6 h-6 rounded border-2"
                                style={{
                                    backgroundColor: zone.fillColor,
                                    borderColor: zone.color
                                }}
                            />
                            <div>
                                <div className="font-bold text-sm" style={{ color: zone.color }}>
                                    {zone.fee === 0 ? 'FREE' : `$${zone.fee}`}
                                </div>
                                <div className="text-xs text-gray-600">
                                    {zone.regions.slice(0, 2).join(', ')}
                                    {zone.regions.length > 2 && '...'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Interactive Map */}
            <div className="w-full h-[500px] rounded-lg overflow-hidden border-2 border-gray-300">
                <MapContainer
                    center={center}
                    zoom={10}
                    scrollWheelZoom={false}
                    style={{ height: '100%', width: '100%' }}
                    className="z-0"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Delivery zone polygons */}
                    {deliveryZones.map(zone => (
                        <Polygon
                            key={zone.name}
                            positions={zone.coordinates}
                            pathOptions={{
                                color: zone.color,
                                fillColor: zone.fillColor,
                                fillOpacity: 0.3,
                                weight: 2
                            }}
                        >
                            <Popup>
                                <div className="text-center p-2">
                                    <h3 className="font-bold text-lg mb-2" style={{ color: zone.color }}>
                                        {zone.name}
                                    </h3>
                                    <p className="text-2xl font-bold mb-2">
                                        {zone.fee === 0 ? 'FREE' : `$${zone.fee}`}
                                    </p>
                                    <div className="text-sm text-gray-600 mb-2">
                                        <strong>Covers:</strong>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        {zone.regions.join(', ')}
                                    </div>
                                </div>
                            </Popup>
                        </Polygon>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}
