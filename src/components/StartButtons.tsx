import { useGeolocation } from "../hooks/useGeolocation";

const StartButtons = () => {
  const { position, getCurrentPosition } = useGeolocation();
  console.log(position.latitude);
  return (
    <div className="pt-8">
      {position.latitude != null && position.longitude != null ? (
        <div>
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:bg-teal-600 hover:bg-gray-800"
          >
            <span className="text-sm font-medium"> 自己紹介作成 →</span>
          </a>
          <a
            href="#"
            className="ml-3 inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:bg-teal-600 hover:bg-gray-800"
          >
            <span className="text-sm font-medium"> カード取得 → </span>
          </a>
        </div>
      ) : (
        <div
          className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:bg-teal-600 hover:bg-gray-800"
          onClick={() => getCurrentPosition()}
        >
          <span className="text-sm font-medium"> 位置情報取得　↓ </span>
        </div>
      )}
    </div>
  );
};

export default StartButtons;
