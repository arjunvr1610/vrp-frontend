import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '410px'
};

// const calculateRoute = () => {
//   const directionServices = new google.maps.DirectionsService();
//   const result = directionServices.route({
//     origin: { lat: 44, lng: -80 },
//     destination: { lat: 44, lng: -80.17678 },
//     travelMode: google.maps.TravelMode.DRIVING
//   })
// }

const LoadMap = () => {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <MarkerF position={{ lat: 44, lng: -80 }} />
      <MarkerF position={{ lat: 44, lng: -80.124353 }} />
      <MarkerF position={{ lat: 44, lng: -80.17678 }} />
    </GoogleMap>
  );
}

const Map = () => {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY
  });
  if (!isLoaded) return <div>Loading...</div>
  console.log(process.env.mapApiKey)
  return <LoadMap />
}

export default Map;