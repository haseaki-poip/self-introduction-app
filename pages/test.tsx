import { NextPage } from "next";
import IntroductionCard from "../src/components/Card/IntroductionCard";
import Modal from "../src/components/Modal";

const Test: NextPage = () => {
  return (
    <div>
      <Modal>
        <IntroductionCard />
      </Modal>
      qqq
    </div>
  );
};

export default Test;
