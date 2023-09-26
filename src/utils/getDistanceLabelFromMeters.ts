import { PathSliceType } from 'src/types';

export const getDistanceLabelFromMeters = (
  distance: PathSliceType['distance'],
) => {
  const kilometers = distance / 1000;

  return kilometers >= 1
    ? `${kilometers.toFixed(2)} km`
    : `${kilometers % 1} m`;
};
