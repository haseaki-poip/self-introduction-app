import SnsTag from "./SnsTag";

type PropsType = {
  twitter_url: string | null;
  github_url: string | null;
  Instagram_url: string | null;
};

const SnsLinks = ({ twitter_url, github_url, Instagram_url }: PropsType) => {
  return (
    <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center lg:justify-start">
      <SnsTag sns_url={twitter_url} snsName="twitter" />
      <SnsTag sns_url={github_url} snsName="github" />
      <SnsTag sns_url={Instagram_url} snsName="Instagram" />
    </div>
  );
};

export default SnsLinks;
