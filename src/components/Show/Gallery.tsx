import { useContext } from "react";
import { GeolocationContext, ViewIdContext } from "../../../pages/_app";
import { gql, useQuery } from "@apollo/client";
import { IntroductionType } from "../../types/type";

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
  const { position } = useContext(GeolocationContext);
  const { viewId, setViewId } = useContext(ViewIdContext);

  let introductions: IntroductionType[] = [];

  const getIntroductions_graphql = () => {
    const { data, loading, error } = useQuery(GET_Introductions, {
      // データの追加後など古いキャッシュにより更新されていないデータとなるためfetchPolicyを設定し、最新データをとってくるようにする
      fetchPolicy: "network-only",
      variables: { lng: position.longitude, lat: position.latitude },
    });

    if (loading) return;
    if (error) return;
    const { Introductions } = data;
    introductions = Introductions;
  };

  getIntroductions_graphql();

  return (
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
  );
};

export default Gallery;
