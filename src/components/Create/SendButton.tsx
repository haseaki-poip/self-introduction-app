import { useState } from "react";
import { postImage } from "../../../firebase/storage";
import { InputIntroductionType } from "../../types/type";
import { gql, useMutation } from "@apollo/client";

type PropsType = {
  image: File | undefined;
  inputData: InputIntroductionType;
};

const Add_Introduction = gql`
  mutation ($input: AddIntroductionInput!) {
    addIntroduction(input: $input) {
      id
    }
  }
`;

const SendButton = ({ image, inputData }: PropsType) => {
  const [isSend, setIsSend] = useState(false);
  const [addIntroductionData] = useMutation(Add_Introduction);

  const uploadToServer = async () => {
    try {
      setIsSend(true); // loadingマークを表示させる

      if (!inputData.name) {
        throw new Error("NoName");
      }
      const img_url = image ? await postImage(image!) : null;
      const sendData = {
        ...inputData,
        img_url: img_url,
      };

      const { data } = await addIntroductionData({
        variables: {
          input: sendData,
        },
      });

      console.log(data.addIntroduction.id);
    } catch (e) {
      // throwされたものの型はunknowである。e instanceof Errorがtureとなればthrowされたもの
      if (!(e instanceof Error)) {
        return alert("予期せぬエラーが発生しました。");
      }

      let alertMessage = "";
      // throwされたもののエラー処理
      switch (e.message) {
        case "NoImageName":
          alertMessage = "画像を読み込むことができませんでした。";
          break;
        case "NoName":
          alertMessage = "名前を入力してください。";
          break;
        default:
          alertMessage = "予期せぬエラーが発生しました。";
      }

      setIsSend(false);
      return alert(alertMessage);
    }
  };

  return (
    <div className="mt-3 text-right">
      <button
        className="ml-2 h-10 w-32 bg-blue-600 rounded text-white hover:bg-blue-700"
        onClick={() => uploadToServer()}
      >
        {isSend ? (
          <div className="flex justify-center">
            <div className="my-auto animate-spin h-6 w-6 border-2 border-white rounded-full border-t-transparent"></div>
          </div>
        ) : (
          "作成"
        )}
      </button>
    </div>
  );
};

export default SendButton;
