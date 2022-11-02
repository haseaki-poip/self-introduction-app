import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import type {
  GeolocationContextType,
  GeolocationType,
} from "../src/types/type";

const initGeolocation = {
  latitude: null,
  longitude: null,
};
export const GeolocationContext = createContext<GeolocationContextType>({
  position: initGeolocation,
  setPosition: (position) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [position, setPosition] = useState<GeolocationType>(initGeolocation);

  return (
    <GeolocationContext.Provider value={{ position, setPosition }}>
      <Component {...pageProps} />
    </GeolocationContext.Provider>
  );
}
