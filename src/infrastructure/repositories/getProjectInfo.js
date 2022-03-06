import { projectStructureMock } from "./__mocks__/ProjectStructureMock";

const getProjectInfo = async () => {
  return await new Promise((resolve) => {
    resolve(projectStructureMock);
  });
};

export default getProjectInfo;
