import React, { useCallback, useState } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsService,
} from '@react-google-maps/api';
import { CircularProgress } from '@chakra-ui/react';
import { PathMarkerType, PathSliceType } from 'src/types';
import { getSumDistanceFromDirectionsService } from 'src/utils';

interface Props {
  setMarker?: (marker: PathMarkerType) => void;
  removeMarker?: (index: number) => void;
  distanceAction?: (distance: PathSliceType['distance']) => void;
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
  removeMarker,
  distanceAction,
  markers,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY as string,
  });

  const [, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(setMap, []);
  const onUnmount = useCallback(() => setMap(null), []);

  if (!isLoaded) return <CircularProgress />;

  const handleSetMarker = (e: google.maps.MapMouseEvent) => {
    if (!setMarker || !e.latLng) return;

    const { lat, lng } = e.latLng;
    setMarker({ lat: lat(), lng: lng() });
  };
  const handleRemoveMarker = (index: number) => {
    if (!removeMarker) return () => {};

    return () => removeMarker(index);
  };

  const getDistance = (
    result: google.maps.DirectionsResult | null,
    status: google.maps.DirectionsStatus,
  ) => {
    if (distanceAction) {
      if (result && status === 'OK') {
        const distance = getSumDistanceFromDirectionsService(result);
        distanceAction(distance);
      } else {
        // FIXME: add alerter
        console.error('Something wrong with Google Maps');
      }
    }
  };

  const directionServiceOptions: google.maps.DirectionsRequest = {
    origin: markers[0],
    destination: markers[markers.length - 1],
    waypoints: markers
      .slice(1, markers.length - 1)
      .map(marker => ({ location: marker, stopover: true })),
    travelMode: google.maps.TravelMode['WALKING'],
  };

  return (
    <GoogleMap
      zoom={ZOOM}
      center={markers[0] || DEFAULT_CENTER}
      mapContainerStyle={MAP_CONTAINER_STYLE}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleSetMarker}
    >
      {markers.map((marker, index) => (
        <Marker
          key={`${marker.lat}${marker.lng}`}
          position={marker}
          onClick={handleRemoveMarker(index)}
        />
      ))}

      {markers.length > 1 && (
        <DirectionsService
          options={directionServiceOptions}
          callback={getDistance}
        />
      )}
    </GoogleMap>
  );
};
