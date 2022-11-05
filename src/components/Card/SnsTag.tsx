import { iconPathList } from "../../lib/IconPathList";

type PropsType = {
  sns_url: string | null;
  snsName: "twitter" | "github" | "Instagram";
};

const snsUrlList = {
  twitter: "https://twitter.com/",
  github: "https://github.com/",
  Instagram: "https://www.instagram.com/",
};

const SnsTag = ({ sns_url, snsName }: PropsType) => {
  if (!sns_url) return null;

  const sns_href = snsUrlList[snsName] + sns_url;

  return (
    <a className="link px-3" href={sns_href}>
      <svg
        className="h-6 fill-current text-gray-600 hover:text-green-700"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Twitter</title>
        <path d={iconPathList[snsName]} />
      </svg>
    </a>
  );
};

export default SnsTag;
