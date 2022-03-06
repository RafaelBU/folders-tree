import { projectStructureMock } from "./__mocks__/ProjectStructureMock";

export const sleep = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const getProjectInfo = async () => {
  await sleep(2000);
  return await new Promise((resolve) => {
    resolve(projectStructureMock);
  });
};

export default getProjectInfo;
