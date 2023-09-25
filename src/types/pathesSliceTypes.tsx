export interface PathMarkerType {
  lat: number;
  lng: number;
}

export interface PathSliceType {
  id: number;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  isFavorite?: boolean;
  markers: PathMarkerType[];
}

export type AddPathToSliceType = Omit<PathSliceType, 'id' | 'isFavorite'>;

export interface SwitchIsPathFavoriteInSliceType {
  id: PathSliceType['id'];
}

export interface RemovePathFromSliceType {
  id: PathSliceType['id'];
}
