export default class Project {
  constructor(name) {
    this.name = name;
    this.element = null;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(targetTask) {
    // console.log(this.taskList);
    let targetIndex = this.taskList.findIndex(checkingTask => {
      return targetTask === checkingTask;
    });
    console.log(targetIndex);
    this.taskList.splice(targetIndex, 1);
  }
}