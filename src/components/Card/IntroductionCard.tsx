import { iconPathList } from "../../lib/IconPathList";
import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { ViewIdContext } from "../../../pages/_app";
import { IntroductionType } from "../../types/type";
import SnsLinks from "./SnsLinks";

const GET_Introduction = gql`
  query ($introductionId: Int!) {
    Introduction(id: $introductionId) {
      id
      name
      affiliation
      introduction
      hobby
      img_url
      twitter_url
      Instagram_url
      github_url
    }
  }
`;

const IntroductionCard = () => {
  const { viewId, setViewId } = useContext(ViewIdContext);
  const { data, loading, error } = useQuery(GET_Introduction, {
    variables: { introductionId: viewId },
  });

  if (loading) return <Loading />;
  if (error) {
    alert("エラーが発生しました。");
    setViewId(null);
    return <div></div>; // IntroductionCardはpropsのchildrenとして使用されるためnullは許されない
  }

  const { Introduction }: { Introduction: IntroductionType } = data;

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-28 lg:my-0">
      <div
        id="profile"
        className="w-full lg:w-11/12 lg:flex rounded-lg lg:rounded-lg shadow-2xl bg-white mx-6 lg:mx-0 lg:py-10"
      >
        <div className="lg:w-8/12 p-4 md:p-12 text-center lg:text-left">
          <div className="h-48 w-48 relative mx-auto -mt-16 flex lg:hidden">
            <img
              src={Introduction.img_url ?? "/images/NoImage.png"}
              className="w-full h-full object-cover object-center absolute inset-0 rounded-full"
            />
          </div>

          <h1 className="text-3xl font-bold pt-8 lg:pt-0">
            {Introduction.name}
          </h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
          <p className="pt-4 text-gray-600 text-base lg:text-xl flex items-center justify-center lg:justify-start">
            <svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-6 fill-current text-green-700 pr-4"
            >
              <g>
                <path d={iconPathList.pin}></path>
              </g>
            </svg>
            {Introduction.affiliation}
          </p>
          <p className="pt-4 text-base lg:text-xl flex items-center justify-center lg:justify-start">
            <svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-6 fill-current text-green-700 pr-4"
            >
              <g>
                <path d={iconPathList.heart}></path>
              </g>
            </svg>
            {Introduction.hobby}
          </p>

          <p className="pt-8 text-xl">{Introduction.introduction}</p>

          <SnsLinks
            twitter_url={Introduction.twitter_url}
            github_url={Introduction.github_url}
            Instagram_url={Introduction.Instagram_url}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full lg:w-[240px] lg:h-[240px] relative">
            <img
              src={Introduction.img_url ?? "/images/NoImage.png"}
              className="w-full h-full object-cover object-center absolute inset-0 rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      </div>

      <CloseButton handleButton={() => setViewId(null)} />
    </div>
  );
};

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="my-auto animate-spin h-20 w-20 border-4 border-white rounded-full border-t-transparent"></div>
    </div>
  );
};

const CloseButton = ({ handleButton }: { handleButton: () => void }) => {
  return (
    <span
      className="mx-auto my-6 lg:mx-0 flex justify-center items-center p-6 cursor-pointer rounded-full bg-gray-600 lg:rounded-none lg:rounded-r-full transform duration-500 hover:scale-125"
      onClick={() => handleButton()}
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
  );
};
export default IntroductionCard;
