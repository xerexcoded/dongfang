"use client"
import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader';
const Map = () => {
    const mapRef = React.useRef<HTMLDivElement>(null)
    useEffect(() => {
        const initMap = async () => {

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                version: 'weekly'
            })
            const { Map } = await loader.importLibrary('maps')
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;


            const position = {
                lat: 46.51762600326437,
                lng: 6.633401905736067
            }

            // options for the map
            const options: google.maps.MapOptions = {
                center: position,
                zoom: 15,
                mapId: 'DONG_FANG_LOCATION'
            }
            const map = new Map(mapRef.current as HTMLDivElement, options)
            // The marker, positioned at Uluru
            const marker = new AdvancedMarkerElement({
                map: map,
                position: position,
                title: 'Uluru'
            });

        }
        initMap()


    }, [])
    return (
        <div style={{ height: '300px' }} ref={mapRef} />
    )
}

export default Map