import { useState } from "react";
import { postImage } from "../../../firebase/storage";
import { InputIntroductionType } from "../../types/type";

type PropsType = {
  image: File | undefined;
  inputData: InputIntroductionType;
};

const SendButton = ({ image, inputData }: PropsType) => {
  const [isPush, setIsPush] = useState(false);

  const uploadToServer = async () => {
    try {
      if (!inputData.name) {
        throw new Error("NoName");
      }
      const img_url = image ? await postImage(image!) : null;
      const sendData = {
        ...inputData,
        img_url: img_url,
      };
      console.log(sendData);
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

      return alert(alertMessage);
    }
  };

  return (
    <div className="mt-3 text-right">
      <button
        className="ml-2 h-10 w-32 bg-blue-600 rounded text-white hover:bg-blue-700"
        onClick={() => uploadToServer()}
      >
        作成
      </button>
    </div>
  );
};

export default SendButton;
