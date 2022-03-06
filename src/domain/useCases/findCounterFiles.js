import restoreProjectStructure from "../../infrastructure/builders/restoreProjectStructure";
import getProjectInfo from "../../infrastructure/repositories/getProjectInfo";

const getExtensionsCounter = (files, level) => {
  const extensions = files.map((file) => file.split(".")[1]);
  const result = extensions.reduce((acc, curr) => {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  const arrayPos = [];
  arrayPos[level] = result;
  return arrayPos;
};

const recursiveFilesCounter = (data, level) => {
  const { files, folder } = data;

  if (!folder) {
    return getExtensionsCounter(files, level);
  }

  if (folder) {
    if (files) {
      const result = getExtensionsCounter(files, level);
      const combineResult = {
        ...result,
        ...recursiveFilesCounter(folder, level + 1),
      };
      return combineResult;
    }
  }
};

const counterFiles = async () => {
  const response = await getProjectInfo();

  // Recursive function
  const recResult = recursiveFilesCounter(response, 0);
  const arrayValues = Object.values(recResult);
  const fileStructure = {};

  arrayValues.forEach((item) => {
    Object.keys(item).forEach((extensionKey) => {
      if (extensionKey in fileStructure) {
        fileStructure[extensionKey] += item[extensionKey];
      } else {
        fileStructure[extensionKey] = item[extensionKey];
      }
    });
  });

  const Project =
    restoreProjectStructure(response).modFileStructure(fileStructure);

  return Project;
};

export default counterFiles;
