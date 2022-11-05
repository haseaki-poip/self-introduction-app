import { useRouter } from "next/router";

const SelectStartType = () => {
  const router = useRouter();
  const movePage = (path: string) => {
    router.push(path); // hrefによる移動だとcontextが保持されない
  };

  return (
    <div>
      <div
        className="inline-flex items-center px-8 py-3 text-white transition bg-green-900 rounded-full shadow-lg focus:outline-none focus:ring focus:bg-teal-600 hover:bg-gray-800"
        onClick={() => movePage("/create")}
      >
        <span className="text-sm font-medium"> 自己紹介作成 →</span>
      </div>
      <div
        className="ml-3 inline-flex items-center px-8 py-3 text-white transition bg-green-900 rounded-full shadow-lg focus:outline-none focus:ring focus:bg-teal-600 hover:bg-gray-800"
        onClick={() => movePage("/show")}
      >
        <span className="text-sm font-medium"> カード取得 → </span>
      </div>
    </div>
  );
};

export default SelectStartType;
