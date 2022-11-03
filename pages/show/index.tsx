import { NextPage } from "next";
import { useContext } from "react";
import { GeolocationContext } from "../_app";
import { gql, useQuery, useMutation } from "@apollo/client";
import Image from "next/image";

const GET_Introductions = gql`
  query ($lng: Float!, $lat: Float!) {
    getIntroductions(lng: $lng, lat: $lat) {
      id
      name
      introduction
    }
  }
`;

const Show: NextPage = () => {
  const { position } = useContext(GeolocationContext);

  const { data, loading, error } = useQuery(GET_Introductions, {
    variables: { lng: position.longitude, lat: position.latitude },
  });

  console.log(data);

  if (loading) return <p>ローディング中です</p>;
  if (error) return <p>エラーが発生しています</p>;

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
          Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
          <a
            href="#"
            className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <Image
              src={"/images/NoImage.png"}
              layout="fill"
              objectFit="contain"
              alt={""}
            />
            {/* <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            /> */}

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              VR
            </span>
          </a>

          <a
            href="#"
            className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
              }
              layout="fill"
              objectFit="contain"
              alt={""}
            />
            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              Tech
            </span>
          </a>

          <a
            href="#"
            className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              Dev
            </span>
          </a>

          <a
            href="#"
            className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              Retro
            </span>
          </a>
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
