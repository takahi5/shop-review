import firebase from "../firebase";

export const uploadFileToStorage = async (file: File, path: string) => {
  var storageRef = firebase.storage().ref(path);

  let downloadUrl = "";
  try {
    await storageRef.put(file);
    downloadUrl = await storageRef.getDownloadURL();
  } catch (err) {
    console.log(err);
  }
  return downloadUrl;
};
