import { useContext, useEffect, useState } from "react";
import { GeolocationContext, ViewIdContext } from "../../../pages/_app";
import { gql, useQuery } from "@apollo/client";
import { IntroductionType } from "../../types/type";
import { useRedirect } from "../../hooks/useRedirect";

const GET_Introductions = gql`
  query ($lng: Float!, $lat: Float!) {
    Introductions(lng: $lng, lat: $lat) {
      id
      name
      img_url
    }
  }
`;

const Gallery = () => {
  useRedirect();
  const { position } = useContext(GeolocationContext);
  const { setViewId } = useContext(ViewIdContext);
  const [isLoading, setIsLoading] = useState(true);

  let introductions: IntroductionType[] = [];

  const getIntroductions_graphql = () => {
    const { data, loading, error } = useQuery(GET_Introductions, {
      // データの追加後など古いキャッシュにより更新されていないデータとなるためfetchPolicyを設定し、最新データをとってくるようにする
      fetchPolicy: "network-only",
      variables: { lng: position.longitude, lat: position.latitude },
    });

    if (loading) return;

    if (error) return alert("エラーが発生しデータが取得できませんでした。");

    const { Introductions } = data;
    introductions = Introductions;
    return;
  };

  if (position.latitude && position.longitude) {
    getIntroductions_graphql();
  }

  useEffect(() => {
    // getIntroductions_graphql()のなかでsetIsLoading(false)をすると無限ループが起こる。
    // その対処としてアロー関数を用い() => setIsLoading(false)とすると、set後にレンダリングが行われないため
    // 反映されずLoadingマークが消えない。よってuseEffect内でsetする。
    if (!introductions.length) return;
    setIsLoading(false);
  }, [introductions]);

  return (
    <div>
      {isLoading ? (
        <div className="w-full flex items-center justify-center">
          <div className="my-auto animate-spin h-20 w-20 border-4 border-gray-500 rounded-full border-t-transparent"></div>
        </div>
      ) : null}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
        {introductions.map((introduction, key) => (
          <div
            onClick={() => setViewId(introduction.id)}
            key={key}
            className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src={introduction.img_url ?? "/images/NoImage.png"}
              loading="lazy"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />
            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              {introduction.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
