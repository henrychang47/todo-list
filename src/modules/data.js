import Project from "./project";

export default new class {
  constructor() {
    this.projectList = [];
    this.lastProject = null;
    this.currentProject = null;
  }

  addNewProject(name) {
    let newProject = new Project(name);
    this.projectList.push(newProject);
  }

  switchCurrentProject(project) {
    this.lastProject = this.currentProject;
    this.currentProject = project;
  }
}
