import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Create: NextPage = () => {
  const [image, setImage] = useState<File>();
  const [createObjectURL, setCreateObjectURL] = useState<string>();

  const postImage = async (image: File) => {
    if (image.name) {
      const storageRef = ref(storage);
      const ext = image.name.split(".").pop();
      const hashName = Math.random().toString(36).slice(-8);
      const fullPath = "/images/" + hashName + "." + ext;
      const uploadRef = ref(storageRef, fullPath);

      await uploadBytes(uploadRef, image);
      const img_url = await getDownloadURL(uploadRef);

      return img_url;
    }

    throw new Error("NoImageName");
  };

  const uploadToClient = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      setImage(file);
      const url = URL.createObjectURL(file);
      setCreateObjectURL(url);
    }
  };

  const uploadToServer = async () => {
    try {
      if (image) {
        const img_url = await postImage(image!);
        console.log(img_url);
      }
    } catch (e) {
      let alertMessage = "";
      switch (e) {
        case "NoImageName":
          alertMessage = "画像を読み込むことができませんでした。";
          break;
        case "NoName":
          alertMessage = "名前を入力してください。";
          break;
        default:
          alertMessage = "予期せぬエラーが発生しました。";
      }

      alert(alertMessage);
    }
  };

  return (
    <div className="py-20 h-screen bg-gray-300 px-2">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full px-4 py-6">
            <div className="mb-2 flex flex-wrap flex-row">
              <div className="mr-2 sm:mr-8 md:10 relative h-32 w-32 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                <div className="absolute">
                  <div className="flex flex-col items-center">
                    <label
                      htmlFor="file-input"
                      className="bg-primary-900 text-white-900 dark:bg-dark-900 flex justify-center items-center px-10 py-10"
                    >
                      <img
                        className="w-full h-full object-cover object-center absolute inset-0 rounded-lg"
                        src={createObjectURL}
                      />
                      <input
                        id="file-input"
                        className="hidden"
                        type="file"
                        accept="image/*"
                        name="myImage"
                        onChange={(e) => uploadToClient(e)}
                      />

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 hover:cursor-pointer rounded-lg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-1">
                <div className="text-sm">
                  名前<span className="text-red-600">*</span>
                </div>
                <input
                  type="text"
                  className="h-10 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>
            <div className="mb-1">
              <div className="text-sm">所属</div>
              <input
                type="text"
                className="h-10 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="mb-1">
              <div className="text-sm">趣味</div>
              <input
                type="text"
                className="h-10 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="mb-1">
              <div className="text-sm">自己紹介</div>
              <textarea className="h-20 py-1 px-3 w-full border-2 border-blue-400 rounded focus:outline-none focus:border-blue-600 resize-none"></textarea>
            </div>
            <div className="mb-1">
              <div className="text-sm">SNS ユーザーネーム</div>
              <div>
                <input
                  placeholder="twitter"
                  type="text"
                  className="mb-2 mr-3 h-9 w-5/12 px-3 border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                />

                <input
                  placeholder="Instagram"
                  type="text"
                  className="mb-2 mr-3 h-9 w-5/12 px-3 border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                />
                <input
                  placeholder="github"
                  type="text"
                  className="mb-2 mr-3 h-9 w-5/12 px-3 border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="mt-3 text-right">
              <button
                className="ml-2 h-10 w-32 bg-blue-600 rounded text-white hover:bg-blue-700"
                onClick={() => uploadToServer()}
              >
                作成
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
