import Project from "../../domain/entities/Project";

const restoreProjectStructure = (data) => {
  const { project_name, project_author, project_url } = data;
  return new Project({
    name: project_name,
    author: project_author,
    url: project_url,
  });
};

export default restoreProjectStructure;
