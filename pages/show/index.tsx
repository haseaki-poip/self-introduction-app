import { NextPage } from "next";
import { useContext } from "react";
import { GeolocationContext, ViewIdContext } from "../_app";
import Modal from "../../src/components/Modal";
import Gallery from "../../src/components/Show/Gallery";
import Header from "../../src/components/Header";
import ShowIntroduction from "../../src/components/Show/ShowIntroduction";

const Show: NextPage = () => {
  const { position } = useContext(GeolocationContext);
  const { viewId, setViewId } = useContext(ViewIdContext);

  return (
    <div>
      <Header />

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        {viewId ? (
          <Modal closeModal={() => setViewId(null)}>
            <ShowIntroduction />
          </Modal>
        ) : null}

        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Show;
