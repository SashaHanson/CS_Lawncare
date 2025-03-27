
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as turf from '@turf/turf';

// Mapbox public access token
// Note: In production, you would store this in an environment variable
// This token has been updated to a valid token
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FzaGFoYW5zb24iLCJhIjoiY2x0MGIyOTFlMHRpbDJrcWZ4bHdkN3g5aCJ9.3OdWZG2c1iS1dq2Gon_dtg';

// Oakville approximate boundaries (simplified polygon)
const OAKVILLE_COORDINATES = [
  [-79.7274, 43.5099],  // Southwest corner
  [-79.7274, 43.5639],  // Northwest corner
  [-79.5631, 43.5639],  // Northeast corner
  [-79.5631, 43.5099],  // Southeast corner
  [-79.7274, 43.5099],  // Close the polygon
];

const ServiceAreaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Initialize map
    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    try {
      const initializeMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-79.6439, 43.5339], // Center on Oakville
        zoom: 11,
        scrollZoom: false
      });
      
      map.current = initializeMap;

      // Add zoom and rotation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Create Oakville polygon for service area
      map.current.on('load', () => {
        if (!map.current) return;
        
        // Add service area polygon source
        map.current.addSource('service-area', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [OAKVILLE_COORDINATES]
            },
            properties: {}
          }
        });
        
        // Add fill layer
        map.current.addLayer({
          id: 'service-area-fill',
          type: 'fill',
          source: 'service-area',
          layout: {},
          paint: {
            'fill-color': '#5D8F6C',
            'fill-opacity': 0.1
          }
        });
        
        // Add outline layer with dashed red line
        map.current.addLayer({
          id: 'service-area-outline',
          type: 'line',
          source: 'service-area',
          layout: {},
          paint: {
            'line-color': '#FF0000',
            'line-width': 2,
            'line-dasharray': [2, 2] // Creates a dashed line
          }
        });

        // Add a marker for the center of Oakville
        new mapboxgl.Marker({ color: '#5D8F6C' })
          .setLngLat([-79.6439, 43.5339])
          .setPopup(new mapboxgl.Popup().setHTML("<h3>CS Lawncare</h3><p>Serving all of Oakville</p>"))
          .addTo(map.current);
          
        setMapLoaded(true);
      });
    } catch (error) {
      console.error("Map initialization error:", error);
    }

    // Clean up
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full">
      <div 
        ref={mapContainer} 
        className="w-full h-[400px] rounded-lg shadow-md"
      />
      <p className="text-sm text-muted-foreground mt-2 text-center italic">
        Red dashed line indicates our service area in Oakville, Ontario
      </p>
    </div>
  );
};

export default ServiceAreaMap;
