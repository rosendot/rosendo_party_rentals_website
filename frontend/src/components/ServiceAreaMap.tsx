'use client'
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'
import freeZonesGeoJSON from '@/data/free-zones.json'
import twentyDollarZonesGeoJSON from '@/data/20-dollar-zones.json'
import fortyDollarZonesGeoJSON from '@/data/40-dollar-zones.json'

// Delivery pricing zones with their regions
type DeliveryZone = {
    name: string
    fee: number
    color: string
    fillColor: string
    regions: string
    coordinates: [number, number][][] | [number, number][]
}

// Helper function to extract coordinates from GeoJSON (handles both Polygon and MultiPolygon)
const extractCoordinates = (feature: any): [number, number][][] | [number, number][] => {
    const geom = feature.geometry
    const coords = geom.coordinates

    if (geom.type === 'Polygon') {
        // Single polygon - convert outer ring from [lng, lat] to [lat, lng]
        return coords[0].map((coord: [number, number]) => [coord[1], coord[0]] as [number, number])
    } else if (geom.type === 'MultiPolygon') {
        // Multiple polygons - convert each outer ring
        return coords.map((polygon: any) =>
            polygon[0].map((coord: [number, number]) => [coord[1], coord[0]] as [number, number])
        )
    }
    return []
}

// Extract coordinates from merged GeoJSON
const freeZoneCoordinates = extractCoordinates((freeZonesGeoJSON as any).features[0])
const twentyDollarZoneCoordinates = extractCoordinates((twentyDollarZonesGeoJSON as any).features[0])
const fortyDollarZoneCoordinates = extractCoordinates((fortyDollarZonesGeoJSON as any).features[0])

// Extract region names from merged GeoJSON
const freeZoneNames = (freeZonesGeoJSON as any).features[0].properties.NAME
const twentyDollarZoneNames = (twentyDollarZonesGeoJSON as any).features[0].properties.NAME
const fortyDollarZoneNames = (fortyDollarZonesGeoJSON as any).features[0].properties.NAME

const deliveryZones: DeliveryZone[] = [
    {
        name: 'FREE Delivery',
        fee: 0,
        color: '#15803d',
        fillColor: '#86efac',
        regions: freeZoneNames,
        coordinates: freeZoneCoordinates
    },
    {
        name: '$20 Delivery Fee',
        fee: 20,
        color: '#d97706',
        fillColor: '#fcd34d',
        regions: twentyDollarZoneNames,
        coordinates: twentyDollarZoneCoordinates
    },
    {
        name: '$40 Delivery Fee',
        fee: 40,
        color: '#c2410c',
        fillColor: '#fed7aa',
        regions: fortyDollarZoneNames,
        coordinates: fortyDollarZoneCoordinates
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
                                    {zone.regions.split(', ').slice(0, 2).join(', ')}
                                    {zone.regions.split(', ').length > 2 && '...'}
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
                                        {zone.regions}
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
