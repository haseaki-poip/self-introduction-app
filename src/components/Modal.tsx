import { ReactNode } from "react";
type PropsType = {
  children: ReactNode;
  closeModal: () => void;
};
const Modal = ({ children, closeModal }: PropsType) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 inset-0 z-50 bg-no-repeat bg-center bg-cover">
      <div
        className="absolute bg-black opacity-20 inset-0 z-0"
        onClick={() => closeModal()}
      ></div>
      <p className="text-right p-5 text-base">✖️</p>
      <div className="sticky">{children}</div>
    </div>
  );
};

export default Modal;
