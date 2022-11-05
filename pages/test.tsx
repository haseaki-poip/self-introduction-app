import { NextPage } from "next";
import IntroductionCard from "../src/components/Card/IntroductionCard";
import Header from "../src/components/Header";
import Modal from "../src/components/Modal";

const Test: NextPage = () => {
  return (
    <div>
      <Header />
      <Modal closeModal={() => console.log("s")}>
        <IntroductionCard />
      </Modal>
      qqq
    </div>
  );
};

export default Test;
