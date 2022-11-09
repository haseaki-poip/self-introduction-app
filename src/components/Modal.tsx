import { ReactNode } from "react";
import { iconPathList } from "../lib/IconPathList";
type PropsType = {
  children: ReactNode;
  closeModal: () => void;
};
const Modal = ({ children, closeModal }: PropsType) => {
  return (
    <div
      id="target"
      className="w-full h-full fixed top-0 left-0 inset-0 z-50 bg-no-repeat bg-center bg-cover"
    >
      <div
        className="absolute bg-black opacity-20 inset-0 z-0"
        onClick={() => closeModal()}
      ></div>
      <div className="sticky">{children}</div>
    </div>
  );
};

export default Modal;
