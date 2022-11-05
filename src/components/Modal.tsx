import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 inset-0 z-50 bg-no-repeat bg-center bg-cover">
      <div className="absolute bg-black opacity-20 inset-0 z-0"></div>
      <div className="relative ">{children}</div>
    </div>
  );
};

export default Modal;
