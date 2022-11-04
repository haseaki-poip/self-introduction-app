import { NextPage } from "next";
import { useContext } from "react";
import { GeolocationContext } from "../_app";
import { gql, useQuery } from "@apollo/client";
import { IntroductionType } from "../../src/types/type";

const GET_Introductions = gql`
  query ($lng: Float!, $lat: Float!) {
    getIntroductions(lng: $lng, lat: $lat) {
      id
      name
      img_url
    }
  }
`;

const Show: NextPage = () => {
  const { position } = useContext(GeolocationContext);
  let introductions: IntroductionType[] = [];

  const getIntroductions_graphql = () => {
    const { data, loading, error } = useQuery(GET_Introductions, {
      variables: { lng: position.longitude, lat: position.latitude },
    });

    if (loading) return;
    if (error) return;
    const { getIntroductions } = data;
    introductions = getIntroductions;
  };

  getIntroductions_graphql();

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
          {introductions.map((introduction, key) => (
            <div
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

        <div className="flex justify-between items-start sm:items-center gap-8">
          <p className="max-w-screen-sm text-gray-500 text-sm lg:text-base">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>

          <a
            href="#"
            className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Show;
