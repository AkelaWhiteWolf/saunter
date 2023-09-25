import React, { useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { CircularProgress } from '@chakra-ui/react';
import { PathMarkerType } from 'src/types';

interface Props {
  setMarker?: (marker: PathMarkerType) => void;
  removeMarker?: (index: number) => void;
  markers: PathMarkerType[];
}

const MAP_CONTAINER_STYLE = {
  width: '100%',
  height: '100%',
};
const ZOOM = 10;
const DEFAULT_CENTER = {
  lat: -3.745,
  lng: -38.523,
};

export const CustomGoogleMap: React.FC<Props> = ({
  setMarker = () => {},
  removeMarker = () => {},
  markers,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY as string,
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);
  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  const handleSetMarker = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const { lat, lng } = e.latLng;
      setMarker({ lat: lat(), lng: lng() });
    }
  };

  return isLoaded ? (
    <GoogleMap
      zoom={ZOOM}
      center={DEFAULT_CENTER}
      mapContainerStyle={MAP_CONTAINER_STYLE}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleSetMarker}
    >
      {markers.map((marker, index) => (
        <Marker
          key={`${marker.lat}${marker.lng}`}
          position={marker}
          onClick={() => removeMarker(index)}
        />
      ))}
    </GoogleMap>
  ) : (
    <CircularProgress />
  );
};
