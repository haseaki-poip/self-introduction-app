import { ChangeEvent } from "react";

type PropsType = {
  createObjectURL: string | undefined;
  setCreateObjectURL: (createObjectURL: string) => void;
  setImage: (image: File) => void;
};

const FileInput = (props: PropsType) => {
  const { createObjectURL, setImage, setCreateObjectURL } = props;
  const uploadToClient = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      setImage(file);
      const url = URL.createObjectURL(file); // 表示のためのURLを作成
      setCreateObjectURL(url);
    }
  };

  return (
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
  );
};

export default FileInput;
