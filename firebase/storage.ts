import { storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const postImage = async (image: File) => {
  // firebaseに画像をアップロード
  if (image.name) {
    const storageRef = ref(storage);
    const ext = image.name.split(".").pop();
    const hashName = Math.random().toString(36).slice(-8);
    const fullPath = "/images/" + hashName + "." + ext;
    const uploadRef = ref(storageRef, fullPath);

    await uploadBytes(uploadRef, image);
    const img_url = await getDownloadURL(uploadRef); // firebaseでの画像URL

    return img_url;
  }

  throw new Error("NoImageName");
};
