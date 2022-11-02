import { useState } from "react";

type PropsType = {
  getCurrentPosition: () => void;
};
const GeolocationButton = ({ getCurrentPosition }: PropsType) => {
  const [isPush, setIsPush] = useState(false);

  return (
    <div className="flex">
      <div
        className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:bg-teal-600 hover:bg-gray-800"
        onClick={() => {
          getCurrentPosition();
          setIsPush(true);
        }}
      >
        <span className="text-sm font-medium"> 位置情報取得　↓ </span>
      </div>

      {isPush ? (
        <div className="flex justify-center">
          <div className="my-auto ml-5 animate-spin h-8 w-8 border-2 border-gray-500 rounded-full border-t-transparent"></div>
        </div>
      ) : null}
    </div>
  );
};

export default GeolocationButton;
