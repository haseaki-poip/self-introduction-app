import { useEffect, useRef, useState } from "react";

type GeolocationType = {
  latitude: number | null;
  longitude: number | null;
};
export const useGeolocation = () => {
  const [isAvailable, setAvailable] = useState(false);
  const [position, setPosition] = useState<GeolocationType>({
    latitude: null,
    longitude: null,
  });

  // useEffectが実行されているかどうかを判定するために用意しています
  const isFirstRef = useRef(true);

  /*
   * ページ描画時にGeolocation APIが使えるかどうかをチェックしています
   * もし使えなければその旨のエラーメッセージを表示させます
   */
  useEffect(() => {
    isFirstRef.current = false;
    if ("geolocation" in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude: latitude, longitude: longitude });
    });
  };

  return {
    position,
    getCurrentPosition,
  };
};
