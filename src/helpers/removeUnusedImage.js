import { unlink } from "node:fs/promises";

const removeLocalFile = async (localPath) => {
  try {
    await unlink(localPath);
    console.log("Removed local: ", localPath);
  } catch (error) {
    console.log("Error while removing local files: ", err);
  }
};

const removeUnusedMulterImageFileOnError = async (req) => {
  try {
    const multerFile = req.file;

    if (multerFile) {
      // If there is file uploaded and there is validation error
      // We want to remove that file
      await removeLocalFile(multerFile.path);
    }
  } catch (error) {
    // fail silently
    console.log("Error while removing image files: ", error);
  }
};
export default removeUnusedMulterImageFileOnError;
