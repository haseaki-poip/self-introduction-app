import { NextPage } from "next";
import { useContext } from "react";
import { GeolocationContext, ViewIdContext } from "../_app";
import Modal from "../../src/components/Modal";
import IntroductionCard from "../../src/components/Card/IntroductionCard";
import Gallery from "../../src/components/Show/Gallery";

const Show: NextPage = () => {
  const { position } = useContext(GeolocationContext);
  const { viewId, setViewId } = useContext(ViewIdContext);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      {viewId ? (
        <Modal closeModal={() => setViewId(null)}>
          <IntroductionCard />
        </Modal>
      ) : null}

      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-green-900 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
          Introductions
        </h2>
        <Gallery />

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
