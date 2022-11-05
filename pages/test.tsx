import { NextPage } from "next";
import IntroductionCard from "../src/components/Card/IntroductionCard";
import Modal from "../src/components/Modal";

const Test: NextPage = () => {
  return (
    <div>
      <Modal closeModal={() => console.log("s")}>
        <IntroductionCard />
      </Modal>
      qqq
    </div>
  );
};

export default Test;
