type Context = {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >;
};

export type GeolocationType = {
  latitude: number | null;
  longitude: number | null;
};

export type GeolocationContextType = {
  position: GeolocationType;
  setPosition: (position: GeolocationType) => void;
};

export type ViewIdContextType = {
  viewId: number | null;
  setViewId: (viewId: number | null) => void;
};

export type IntroductionType = {
  id: number;
  name: string;
  affiliation: string;
  introduction: string;
  hobby: string;
  img_url: string | null;
  twitter_url: string | null;
  Instagram_url: string | null;
  github_url: string | null;
  lng?: number;
  lat?: number;
};

export type InputIntroductionType = {
  name: string;
  affiliation: string;
  introduction: string;
  hobby: string;
  twitter_url: string | null;
  Instagram_url: string | null;
  github_url: string | null;
  lng: number;
  lat: number;
};

export type SendIntroductionType = InputIntroductionType & {
  img_url: string | null;
};
