import React, { useMemo } from 'react'
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  DirectionsRenderer,
  // Circle,
  // MarkerClusterer
} from '@react-google-maps/api';

import { useSelector } from 'react-redux';


const Map = (props) => {
  const { selectedRoute, mapRoutes } = useSelector(state => state.routes);
  const locationData  = useSelector(state => state.nodes.nodes);

  const containerStyle = {
    width: '100%',
    height: '410px'
  }
  const center = useMemo(() => ({ lat: 18.59, lng: 73.7 }), []);
  const options = useMemo(() => ({
    disableDefaultUI: false,
    clickableIcons: false
  }), []);
  const image = process.env.PUBLIC_URL + '/warehouse.png'

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY
  })
  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      options={options}
      zoom={10}
    >
      <MarkerF
        position={center}
        icon={image}
      />

      {
        locationData.map(node => <MarkerF
          key={node.pos.location.lat}
          position={node.pos.location}
          label={node.label}
        />)
      }

      {mapRoutes.map((route, index) => <DirectionsRenderer
          directions={selectedRoute===null ? route.dir : selectedRoute.dir}
          options={{
            polylineOptions: {
              strokeColor: selectedRoute===null ? route.clr : selectedRoute.clr
            },
            suppressMarkers: true,
          }}
          key={index} 
      />)} 

    </GoogleMap>
  )
}

export default Map