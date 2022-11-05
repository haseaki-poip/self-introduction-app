import html2canvas from "html2canvas";
import fileDownload from "js-file-download";

export const downloadCard = async () => {
  const componentElement = document.getElementById("target");
  if (!componentElement) {
    return alert("画像をダウンロードできませんでした。");
  }
  const canvas = await html2canvas(componentElement!, {
    useCORS: true,
  });
  canvas.toBlob((blob) => {
    if (!blob) {
      return alert("画像をダウンロードできませんでした。");
    }
    fileDownload(blob!, "a.png");
  });
  return;
};
