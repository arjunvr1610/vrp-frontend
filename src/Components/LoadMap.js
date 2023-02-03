import React, { useMemo, useState, useEffect } from 'react'
import {
  GoogleMap,
  MarkerF,
  DirectionsRenderer,
  Circle,
  MarkerClusterer
} from '@react-google-maps/api';
import locs from '../Output/locs';
import { useSelector } from 'react-redux';

const LoadMap = (props) => {
    const mapRoutes = useSelector(state => state.routes.mapRoutes);

    console.log("mapRoutes - ", mapRoutes);
    const containerStyle = {
        width: '100%',
        height: '410px'
    };
    const center = useMemo(() => ({ lat: 18.59, lng: 73.7 }), []);
    const options = useMemo(() => ({
      disableDefaultUI: false,
      clickableIcons: false
    }), []);
    const image = process.env.PUBLIC_URL + '/warehouse.png'

    let nodes = [];
    let label = 0;
    for (let index = 0; index < locs.length; index++) {
      const arr = locs[index];     
      for(let j = 0; j < arr.length; j++) {
        label++;
        nodes.push({pos: arr[j], label: label.toString() })
      }      
    }
    
    const colors = [
      "#C70039 ", 
      "#19AF3F", 
      "#0A517F", 
      "#7B0680", 
      "#F96AE3",
      "#EC177E",
      "#FFC300" 
    ]

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
          nodes.map(node => <MarkerF 
            key={node.pos.location.lat} 
            position={node.pos.location} 
            label={node.label} 
          />)
        }

        {mapRoutes.map((route, index) => <DirectionsRenderer 
          directions={route} 
          options={{
            polylineOptions: {
              strokeColor: colors[index],
            },
            suppressMarkers: true,
          }}
        />)}
      </GoogleMap>
    );
  }

  export default LoadMap;