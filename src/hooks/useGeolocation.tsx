import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GeolocationContext } from "../../pages/_app";

export const useGeolocation = () => {
  const [isAvailable, setAvailable] = useState(false);
  const { position, setPosition } = useContext(GeolocationContext);

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

  const getCurrentPosition = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude: latitude, longitude: longitude });
    });
  }, []);

  if (!isFirstRef && !isAvailable) {
    alert("位置情報が取得できないためアプリを続けることができません");
  }

  return {
    position,
    getCurrentPosition,
  };
};
