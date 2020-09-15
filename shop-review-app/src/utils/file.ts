export const getExtention = (path: string) => {
  return path.split(".").pop();
};
