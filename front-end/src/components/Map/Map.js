import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Map.css'

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 55.9533,
  lng: -3.1883
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: process.env.REACT_APP_GOOGLE_API_ID,
    googleMapsApiKey:  process.env.REACT_APP_GOOGLE_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      </GoogleMap>
  </div>
  ) : <></>
}

export default React.memo(Map)