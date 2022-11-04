import { NextPage } from "next";
import { useContext, useState } from "react";
import { InputIntroductionType } from "../../src/types/type";
import { GeolocationContext } from "../_app";
import SendButton from "../../src/components/Create/SendButton";
import FileInput from "../../src/components/Create/FileInput";

const Create: NextPage = () => {
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
    <div className="py-20 h-screen bg-gray-300 px-2">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
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
                  className="h-10 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>
            <div className="mb-1">
              <div className="text-sm">所属</div>
              <input
                value={inputData.affiliation}
                onChange={(e) => {
                  setInputData({ ...inputData, affiliation: e.target.value });
                }}
                type="text"
                className="h-10 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="mb-1">
              <div className="text-sm">趣味</div>
              <input
                value={inputData.hobby}
                onChange={(e) => {
                  setInputData({ ...inputData, hobby: e.target.value });
                }}
                type="text"
                className="h-10 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="mb-1">
              <div className="text-sm">自己紹介</div>
              <textarea
                value={inputData.introduction}
                onChange={(e) => {
                  setInputData({ ...inputData, introduction: e.target.value });
                }}
                className="h-20 py-1 px-3 w-full border-2 border-blue-400 rounded focus:outline-none focus:border-blue-600 resize-none"
              ></textarea>
            </div>
            <div className="mb-1">
              <div className="text-sm">SNS ユーザーネーム</div>
              <div>
                <input
                  value={inputData.twitter_url ?? ""}
                  onChange={(e) => {
                    setInputData({ ...inputData, twitter_url: e.target.value });
                  }}
                  placeholder="twitter"
                  type="text"
                  className="mb-2 mr-3 h-9 w-5/12 px-3 border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                />

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
                  className="mb-2 mr-3 h-9 w-5/12 px-3 border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                />
                <input
                  value={inputData.github_url ?? ""}
                  onChange={(e) => {
                    setInputData({ ...inputData, github_url: e.target.value });
                  }}
                  placeholder="github"
                  type="text"
                  className="mb-2 mr-3 h-9 w-5/12 px-3 border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <SendButton {...{ image, inputData }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
