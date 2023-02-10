import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Map.css'

const containerStyle = {
  width: '650px',
  height: '570px'
};

const center = {
  lat: 55.9533,
  lng: -3.1883
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBhLpj32t1z_5hAMqQaXUyAJvEi-v1hfw4"
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
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)