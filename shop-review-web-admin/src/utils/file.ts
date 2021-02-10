export const getExtension = (path: string) => {
  return path.split(".").pop();
};

type Dimension = { width: number; height: number };

export const getImageDimension = (file: File) => {
  return new Promise<Dimension>(function (resolve, reject) {
    if (!file) {
      reject();
    }
    const ext = getExtension(file.name);
    if (!ext?.match(/png|jpg|jpeg/i)) {
      reject();
    }
    var _URL = window.URL || window.webkitURL;
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.src = _URL.createObjectURL(file);
  });
};
