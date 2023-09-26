export const getSumDistanceFromDirectionsService = (
  result: google.maps.DirectionsResult,
) => {
  let distance = 0;

  result.routes.map(route => {
    route.legs.map(leg => {
      if (leg?.distance?.value) distance = distance + leg.distance.value;
    });
  });

  return distance;
};
