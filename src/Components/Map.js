import React, { useMemo } from 'react'
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  DirectionsRenderer,
  Circle,
  MarkerClusterer
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '410px'
};

const generateNodes = (position) => {
  const nodes = []
  for (let i = 0; i < 10; i++) {
    const direction = Math.random() < 0.5 ? -2 : 2;
    nodes.push({
      pos: {
        lat: position.lat + Math.random() / direction,
        lng: position.lng - Math.random() / direction
      },
      label: i.toString()
    })
  }
  return nodes;
}

const LoadMap = () => {
  const center = useMemo(() => ({ lat: 18.59, lng: 73.7 }), []);
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false
  }), []);
  const image = process.env.PUBLIC_URL + '/warehouse.png'

  const nodes = useMemo(() => generateNodes(center), [center]);

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
      {nodes.map((node) => <MarkerF label={node.label} key={node.pos.lat} position={node.pos} />)}
    </GoogleMap>
  );
}

const Map = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY
  });
  if (!isLoaded) return <div>Loading...</div>
  return <LoadMap />
}

export default Map;