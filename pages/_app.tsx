import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type {
  GeolocationContextType,
  GeolocationType,
  ViewIdContextType,
} from "../src/types/type";

export const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

const initGeolocation = {
  latitude: null,
  longitude: null,
};

export const GeolocationContext = createContext<GeolocationContextType>({
  position: initGeolocation,
  setPosition: (position) => {},
});
export const ViewIdContext = createContext<ViewIdContextType>({
  viewId: null,
  setViewId: (viewId) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [position, setPosition] = useState<GeolocationType>(initGeolocation);
  const [viewId, setViewId] = useState<number | null>(null);

  return (
    <ApolloProvider client={client}>
      <GeolocationContext.Provider value={{ position, setPosition }}>
        <ViewIdContext.Provider value={{ viewId, setViewId }}>
          <Component {...pageProps} />
        </ViewIdContext.Provider>
      </GeolocationContext.Provider>
    </ApolloProvider>
  );
}
