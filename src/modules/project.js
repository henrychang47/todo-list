export default class Project {
  constructor(name) {
    this.name = name;
    this.element = null;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }
}