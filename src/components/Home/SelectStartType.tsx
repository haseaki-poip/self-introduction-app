const SelectStartType = () => {
  return (
    <div>
      <a
        href="/create"
        className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:bg-teal-600 hover:bg-gray-800"
      >
        <span className="text-sm font-medium"> 自己紹介作成 →</span>
      </a>
      <a
        href="/show"
        className="ml-3 inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:bg-teal-600 hover:bg-gray-800"
      >
        <span className="text-sm font-medium"> カード取得 → </span>
      </a>
    </div>
  );
};

export default SelectStartType;
