import {
    APIProvider,
    Map,
    useMap,
    useMapsLibrary,
  } from '@vis.gl/react-google-maps';
  import { useEffect, useState } from 'react';
  
  export default function BusMap({ selectedRoute }) {
    const position = selectedRoute
      ? { lat: selectedRoute.waypoints[0].lat, lng: selectedRoute.waypoints[0].lng }
      : { lat: 9.971853, lng: 76.323342 }; // Default position (Vyttila)

      const mapOptions = {
        disableDefaultUI: true, // Disable all default UI
        zoomControl: false, // Disable zoom controls
        mapTypeControl: false, // Disable map type control
        streetViewControl: false, // Disable street view
        fullscreenControl: false, // Disable fullscreen control
      };
  
    return (
      <div className="h-screen w-[75%]">
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
          <Map center={position} zoom={13} mapId={process.env.REACT_APP_MAP_ID} options={mapOptions}></Map>
          {selectedRoute && <Directions selectedRoute={selectedRoute} />}
        </APIProvider>
      </div>
    );
  }
  
  function Directions({ selectedRoute }) {
    const map = useMap();
    const routesLibrary = useMapsLibrary('routes');
    const [directionsService, setDirectionsService] = useState(null);
    const [directionsRenderer, setDirectionsRenderer] = useState(null);
  
    useEffect(() => {
      if (!routesLibrary || !map) return;
  
      setDirectionsService(new routesLibrary.DirectionsService());
      setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
    }, [routesLibrary, map]);
  
    useEffect(() => {
      if (!directionsService || !directionsRenderer || !selectedRoute) return;
  
      const waypoints = selectedRoute.waypoints.map((waypoint) => ({
        location: new window.google.maps.LatLng(waypoint.lat, waypoint.lng),
        stopover: true,
      }));
  
      directionsService
        .route({
          origin: selectedRoute.startPoint,
          destination: selectedRoute.endPoint,
          travelMode: window.google.maps.TravelMode.DRIVING,
          waypoints: waypoints,
          provideRouteAlternatives: true,
        })
        .then((response) => {
          directionsRenderer.setDirections(response);
        })
        .catch((error) => {
          console.error('Error fetching directions:', error);
        });
    }, [directionsService, directionsRenderer, selectedRoute]);
  
    return null;
  }
  