import { useRouter } from "next/router";
import { iconPathList } from "../lib/IconPathList";

const Header = () => {
  return (
    <header className="border-b mb-8">
      <div className="max-w-screen-2xl flex justify-between items-center px-4 md:px-8 mx-auto">
        <a
          href="/"
          className="text-green-900 inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
        >
          E-SInt
        </a>

        <div className="flex border-l border-r divide-x">
          <MoveTag menuName="Create" />
          <MoveTag menuName="List" />
        </div>
      </div>
    </header>
  );
};

export default Header;

const MoveTag = ({ menuName }: { menuName: "Create" | "List" }) => {
  const router = useRouter();
  const movePage = () => {
    const page_des = menuName == "Create" ? "/create" : "/show";
    router.push(page_des);
  };

  return (
    <div
      className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5"
      onClick={() => movePage()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 fill-current text-green-900"
        viewBox="0 0 512 512"
      >
        <path d={iconPathList[menuName]} />
      </svg>

      <span className="hidden sm:block text-green-900 text-xs font-semibold">
        {menuName}
      </span>
    </div>
  );
};
