const createImage = async (url) => {
    return new Promise((resolve, reject) => {
        var image = new Image();
        image.addEventListener("load", () => resolve(image));
        image.addEventListener("error", (error) => reject(error));
        image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
        image.src = url;
    });
  }

export const getCanvasImage = async (imageSrc) => {
  const myImage = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = myImage.width;
  canvas.height = myImage.height;
  // draw rotated image and store data.
  ctx.drawImage(
      myImage,
      0, 0, myImage.width, myImage.height
  );
  const data = ctx.getImageData(0, 0, 100,100);
  // paste generated rotate image with correct offsets for x,y crop values.
  ctx.putImageData(
      data, 150, 0, 0, 0, 0, 0
  );
  // As Base64 string
  // return canvas.toDataURL("image/jpeg");
  return canvas;
}

export function dataUrlToFile (dataurl, filename) {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) u8arr[n] = bstr.charCodeAt(n);

    return new File([u8arr], filename, { type: mime });
};

export async function imageToFormData(imageArray) {
    var formData = new FormData();
    const imgArr = imageArray
    for (const image of imgArr) {   //await kullanımı için for...of döngüsü
      const canvas = await getCanvasImage(image.data);
      const canvasDataUrl = canvas.toDataURL("image/jpeg");
      const convertedUrltoFile = dataUrlToFile(canvasDataUrl, image.name);
      formData.append("annonceImages", convertedUrltoFile);
    }
    return formData;
}

const convertToBase64 = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve({ name: file.name, data: reader.result });
    };
  });
};