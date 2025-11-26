'use client'
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'
import { Truck, Settings, MapPin } from 'lucide-react'
import freeZonesGeoJSON from '@/data/free-zones.json'
import twentyDollarZonesGeoJSON from '@/data/20-dollar-zones.json'

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
const extractCoordinates = (feature: { geometry: { type: string; coordinates: number[][][] | number[][][][] } }): [number, number][][] | [number, number][] => {
    const geom = feature.geometry
    const coords = geom.coordinates

    if (geom.type === 'Polygon') {
        // Single polygon - convert outer ring from [lng, lat] to [lat, lng]
        return (coords as number[][][])[0].map((coord: number[]) => [coord[1], coord[0]] as [number, number])
    } else if (geom.type === 'MultiPolygon') {
        // Multiple polygons - convert each outer ring
        return (coords as number[][][][]).map((polygon: number[][][]) =>
            polygon[0].map((coord: number[]) => [coord[1], coord[0]] as [number, number])
        )
    }
    return []
}

// Extract coordinates from merged GeoJSON
const freeZoneCoordinates = extractCoordinates((freeZonesGeoJSON as { features: Array<{ geometry: { type: string; coordinates: number[][][] | number[][][][] }; properties: { NAME: string } }> }).features[0])
const twentyDollarZoneCoordinates = extractCoordinates((twentyDollarZonesGeoJSON as { features: Array<{ geometry: { type: string; coordinates: number[][][] | number[][][][] }; properties: { NAME: string } }> }).features[0])

// Extract region names from merged GeoJSON
const freeZoneNames = (freeZonesGeoJSON as { features: Array<{ properties: { NAME: string } }> }).features[0].properties.NAME
const twentyDollarZoneNames = (twentyDollarZonesGeoJSON as { features: Array<{ properties: { NAME: string } }> }).features[0].properties.NAME

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
    }
]

// Service features included with delivery
const includedFeatures = [
    {
        icon: Truck,
        label: 'Delivery & Pickup',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        icon: Settings,
        label: 'Setup Included',
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50'
    },
    {
        icon: MapPin,
        label: 'Based in Edinburg',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    }
]

export default function ServiceAreaMap() {
    useEffect(() => {
        // Fix for Leaflet in Next.js
        delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl
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

                {/* Existing zone grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
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

                {/* Subtle separator */}
                <div className="border-t border-gray-200 mb-3"></div>

                {/* Included features row - subtle and compact */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                    {includedFeatures.map((feature, index) => (
                        <div key={feature.label} className="flex items-center gap-1.5">
                            {/* Divider between items (not before first) */}
                            {index > 0 && (
                                <div className="w-px h-3 bg-gray-300 mr-2"></div>
                            )}

                            {/* Small icon with subtle background */}
                            <div className={`${feature.bgColor} p-1 rounded`}>
                                <feature.icon className={`w-3.5 h-3.5 ${feature.color}`} strokeWidth={2} />
                            </div>

                            {/* Compact text label */}
                            <span className="text-gray-700 font-medium whitespace-nowrap">
                                {feature.label}
                            </span>
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
