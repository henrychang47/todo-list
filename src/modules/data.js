import Project from "./project";

export default new class Data {
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

  set mainColor(color) {
    document.documentElement.style.setProperty('--mainColor', color);
    if (this.currentProject) {
      this.currentProject.element.style.backgroundColor = this.mainColor;
    }
  }

  get mainColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--mainColor');
  }


}
