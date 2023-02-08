import React, { useMemo, useEffect } from 'react'
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  DirectionsRenderer,
  Circle,
  MarkerClusterer
} from '@react-google-maps/api';

import locs from '../Output/locs';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../Store/index';


const Map = (props) => {
  const dispatch = useDispatch();
  const { storeRoutes, emptyRoutes } = bindActionCreators(actionCreators, dispatch);
  const { selectedRoute, mapRoutes } = useSelector(state => state.routes);
  const locationData  = useSelector(state => state.nodes.nodes);

  // console.log("mapRoutes - ", mapRoutes);
  // console.log("selectedRoutes - ", selectedRoute);
  const colors = [
    "#C70039 ",
    "#19AF3F",
    "#0A517F",
    "#7B0680",
    "#F96AE3",
    "#EC177E",
    "#FFC300"
  ]

  const calcRoutes = async (center) => {
    console.log('HELLOW WORLD') 
    const directionsService = new window.google.maps.DirectionsService();
    return Promise.all(locs.map(async (route, index) => {
      return await directionsService.route(
        {
          origin: center,
          destination: center,
          travelMode: window.google.maps.TravelMode.DRIVING,
          waypoints: route
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            storeRoutes({dir: result, clr: colors[index]});
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      )
    }))
  }

  useEffect(() => {
    emptyRoutes();
    // console.log('Use Effect ran')
    calcRoutes({ lat: 18.59, lng: 73.7 }); 
  }, []);

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