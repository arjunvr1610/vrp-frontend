import React, { useMemo, useState, useEffect } from 'react'
import {
  useLoadScript,
} from '@react-google-maps/api';

import LoadMap from './LoadMap';
import locs from '../Output/locs';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../Store/index';

const Map = (props) => { 
  const dispatch = useDispatch();
  const { storeRoutes } = bindActionCreators(actionCreators, dispatch);

  const calcRoutes = async(center) => {
    const directionsService = new window.google.maps.DirectionsService();
    await locs.forEach(route => {
        directionsService.route(
        {
        origin: center,
        destination: center,
        travelMode: window.google.maps.TravelMode.DRIVING,
        waypoints: route
        },
        (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          storeRoutes(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
        }
    )})
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY
  });

  useEffect(() => {
    // setDirections([])
    calcRoutes({ lat: 18.59, lng: 73.7 });
  }, []);
  
  if (!isLoaded) return <div>Loading...</div>
  return <LoadMap />
}

export default Map;