export type GeolocationType = {
  latitude: number | null;
  longitude: number | null;
};

export type GeolocationContextType = {
  position: GeolocationType;
  setPosition: (position: GeolocationType) => void;
};

export type IntroductionType = {
  id: number;
  name: string;
  affiliation?: string;
  introduction?: string;
  hobby?: string;
  img_url: string;
  twitter_url?: string;
  Instagram_url?: string;
  github_url?: string;
  lng?: number;
  lat?: number;
};
