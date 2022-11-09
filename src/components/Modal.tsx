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
      <div className="sticky">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-28 lg:my-0">
          {children}
          <span
            className="mx-auto my-6 lg:mx-0 flex justify-center items-center p-6 cursor-pointer rounded-full bg-gray-600 lg:rounded-none lg:rounded-r-full transform duration-500 hover:scale-125"
            onClick={() => closeModal()}
          >
            <svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 fill-current text-white"
            >
              <g>
                <polygon points={iconPathList.cross}></polygon>
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
