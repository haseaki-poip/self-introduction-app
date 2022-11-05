import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GeolocationContext } from "../../pages/_app";

export const useRedirect = () => {
  const { position } = useContext(GeolocationContext);
  const router = useRouter();

  useEffect(() => {
    if (position.latitude == null || position.longitude == null) {
      router.push("/");
    }
  }, []);

  return;
};
