export type GeolocationType = {
  latitude: number | null;
  longitude: number | null;
};

export type GeolocationContextType = {
  position: GeolocationType;
  setPosition: (position: GeolocationType) => void;
};
