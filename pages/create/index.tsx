import { NextPage } from "next";
import { useContext, useState } from "react";
import { InputIntroductionType } from "../../src/types/type";
import { GeolocationContext } from "../_app";
import SendButton from "../../src/components/Create/SendButton";
import FileInput from "../../src/components/Create/FileInput";
import Header from "../../src/components/Header";
import { useRedirect } from "../../src/hooks/useRedirect";
import { iconPathList } from "../../src/lib/IconPathList";

const Create: NextPage = () => {
  useRedirect();
  const { position } = useContext(GeolocationContext);
  const [image, setImage] = useState<File>();
  const [createObjectURL, setCreateObjectURL] = useState<string>();
  const [inputData, setInputData] = useState<InputIntroductionType>({
    // img_urlを入れないのはset関数によってimg_urlを入れる時遅延が生じ、setで入れられる前に次の処理が行われるため
    name: "",
    affiliation: "",
    introduction: "",
    hobby: "",
    twitter_url: null,
    Instagram_url: null,
    github_url: null,
    lng: position.longitude!,
    lat: position.latitude!,
  });

  return (
    <div>
      <Header />
      <div className="h-screen px-2">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-lg">
          <div className="md:flex">
            <div className="w-full px-4 py-6">
              <div className="mb-2 flex flex-wrap flex-row">
                <FileInput
                  {...{ createObjectURL, setCreateObjectURL, setImage }}
                />

                <div className="mb-1">
                  <div className="text-sm">
                    名前<span className="text-red-600">*</span>
                  </div>
                  <input
                    value={inputData.name}
                    onChange={(e) => {
                      setInputData({ ...inputData, name: e.target.value });
                    }}
                    type="text"
                    className="h-10 px-3 w-full border-green-600 border-2 rounded focus:outline-none focus:border-green-800"
                  />
                </div>
              </div>
              <div className="mb-1">
                <div className="text-sm pl-7">所属</div>
                <div className="flex justify-center items-center">
                  <svg
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-5 fill-current text-green-700 pr-2"
                  >
                    <g>
                      <path d={iconPathList.pin}></path>
                    </g>
                  </svg>
                  <input
                    value={inputData.affiliation}
                    onChange={(e) => {
                      setInputData({
                        ...inputData,
                        affiliation: e.target.value,
                      });
                    }}
                    type="text"
                    className="h-10 px-3 w-full border-green-600 border-2 rounded focus:outline-none focus:border-green-800"
                  />
                </div>
              </div>
              <div className="mb-1">
                <div className="text-sm pl-7">趣味</div>
                <div className="flex justify-center items-center">
                  <svg
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-5 fill-current text-green-700 pr-2"
                  >
                    <g>
                      <path d={iconPathList.heart}></path>
                    </g>
                  </svg>
                  <input
                    value={inputData.hobby}
                    onChange={(e) => {
                      setInputData({ ...inputData, hobby: e.target.value });
                    }}
                    type="text"
                    className="h-10 px-3 w-full border-green-600 border-2 rounded focus:outline-none focus:border-green-800"
                  />
                </div>
              </div>
              <div className="mb-1">
                <div className="text-sm pl-7">自己紹介</div>
                <div className="flex justify-center items-center">
                  <svg
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-5 fill-current text-green-700 pr-2"
                  >
                    <g>
                      <path d={iconPathList.List}></path>
                    </g>
                  </svg>
                  <textarea
                    value={inputData.introduction}
                    onChange={(e) => {
                      setInputData({
                        ...inputData,
                        introduction: e.target.value,
                      });
                    }}
                    className="h-20 py-1 px-3 w-full border-2 border-green-600 rounded focus:outline-none focus:border-green-800 resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="pt-3 pb-1">
                <div className="text-sm pl-7">SNS ユーザーネーム</div>
                <div className="flex  w-full">
                  <div className="flex items-center w-1/2">
                    <svg
                      version="1.1"
                      id="_x32_"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 fill-current text-green-700 pr-2"
                    >
                      <g>
                        <path d={iconPathList.twitter}></path>
                      </g>
                    </svg>
                    <input
                      value={inputData.twitter_url ?? ""}
                      onChange={(e) => {
                        setInputData({
                          ...inputData,
                          twitter_url: e.target.value,
                        });
                      }}
                      placeholder="twitter"
                      type="text"
                      className="my-1 h-9 px-3 w-full border-green-600 border-2 rounded focus:outline-none focus:border-green-800 mr-3"
                    />
                  </div>
                  <div className="flex items-center w-1/2">
                    <svg
                      version="1.1"
                      id="_x32_"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 fill-current text-green-700 pr-2"
                    >
                      <g>
                        <path d={iconPathList.Instagram}></path>
                      </g>
                    </svg>
                    <input
                      value={inputData.Instagram_url ?? ""}
                      onChange={(e) => {
                        setInputData({
                          ...inputData,
                          Instagram_url: e.target.value,
                        });
                      }}
                      placeholder="Instagram"
                      type="text"
                      className="my-1 h-9 w-full px-3 border-green-600 border-2 rounded focus:outline-none focus:border-green-800"
                    />
                  </div>
                </div>
                <div className="flex items-center w-1/2">
                  <svg
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 fill-current text-green-700 pr-2"
                  >
                    <g>
                      <path d={iconPathList.github}></path>
                    </g>
                  </svg>
                  <input
                    value={inputData.github_url ?? ""}
                    onChange={(e) => {
                      setInputData({
                        ...inputData,
                        github_url: e.target.value,
                      });
                    }}
                    placeholder="github"
                    type="text"
                    className="my-1 mr-3 h-9 w-full px-3 border-green-600 border-2 rounded focus:outline-none focus:border-green-800"
                  />
                </div>
              </div>
              <SendButton {...{ image, inputData }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
