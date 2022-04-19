import Project from "./project";

export default new class Data {
  constructor() {
    this.projectList = [];
    this.lastProject = null;
    this.currentProject = null;
    this.editingTask = null;
    this.editingProject = null;
  }

  addNewProject(name) {
    let newProject = new Project(name);
    this.projectList.push(newProject);
    this.saveToLocal();
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

  deleteProject(targetProject) {
    let targetIndex = this.projectList.findIndex(checkingProject => {
      return targetProject === checkingProject;
    });
    this.projectList.splice(targetIndex, 1);
    this.saveToLocal();
  }

  saveToLocal() {
    localStorage.setItem('todoData', JSON.stringify(this.projectList));
  }

  getFromLocal() {
    this.projectList = JSON.parse(localStorage.getItem('todoData'));
    this.projectList.forEach(project => {
      project.__proto__ = Project.prototype;
    });
  }

}
