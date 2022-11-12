import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { ViewIdContext } from "../../../pages/_app";
import { IntroductionType } from "../../types/type";
import IntroductionCard from "../Card/IntroductionCard";

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

const ShowIntroduction = () => {
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

  return <IntroductionCard Introduction={Introduction} />;
};

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="my-auto animate-spin h-20 w-20 border-4 border-white rounded-full border-t-transparent"></div>
    </div>
  );
};

export default ShowIntroduction;
