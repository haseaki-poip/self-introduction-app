import { useContext, useEffect, useState } from "react";
import { GeolocationContext, ViewIdContext } from "../../../pages/_app";
import { gql, useQuery } from "@apollo/client";
import { IntroductionType } from "../../types/type";
import { useRedirect } from "../../hooks/useRedirect";
import { iconPathList } from "../../lib/IconPathList";

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
  const [isReloading, setIsReloading] = useState(false);
  if (position.latitude == null || position.longitude == null) {
    return null;
  }

  let introductions: IntroductionType[] = [];

  const { data, loading, error, refetch } = useQuery(GET_Introductions, {
    // データの追加後など古いキャッシュにより更新されていないデータとなるためfetchPolicyを設定し、最新データをとってくるようにする
    fetchPolicy: "network-only",
    variables: { lng: position.longitude, lat: position.latitude },
  });

  if (loading || isReloading) {
    return (
      <div className="w-full flex items-center justify-center">
        <div className="my-auto animate-spin h-20 w-20 border-4 border-gray-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    alert("エラーが発生し読み込むことができませんした。");
    return null;
  }

  const { Introductions } = data;
  introductions = Introductions;

  const reload = async () => {
    setIsReloading(true);
    const data = await refetch({
      // refetchを使用することでどこでもuseQueryと同様に最新のデータを取得できる。
      lng: position.longitude!,
      lat: position.latitude!,
    });
    const { Introductions } = data.data;
    introductions = Introductions;
    setIsReloading(false);
  };

  return (
    <div>
      <div
        className="flex justify-center mb-4 md:mb-8 xl:mb-12"
        onClick={() => reload()}
      >
        <h2 className="text-green-900 text-3xl font-bold text-center items-center">
          Introductions
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-5 w-8 h-8 fill-current text-green-900"
          viewBox="0 0 512 512"
        >
          <path d={iconPathList.reload} />
        </svg>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
        {introductions.map((introduction, key) => (
          <div
            onClick={() => setViewId(introduction.id!)}
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
