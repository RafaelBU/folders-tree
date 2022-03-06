export default class Project {
  name;

  author;

  url;

  filesStructure;

  constructor({ name = "", author = "", url = "", filesStructure = {} }) {
    this.name = name;
    this.author = author;
    this.url = url;
    this.filesStructure = filesStructure;
  }

  modFileStructure(filesStructure) {
    return new Project({
      ...this,
      filesStructure,
    });
  }
}
