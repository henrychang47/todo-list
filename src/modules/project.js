import data from "./data";

export default class Project {
  constructor(name) {
    this.name = name;
    this.element = null;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
    data.saveToLocal();
  }

  deleteTask(targetTask) {
    let targetIndex = this.taskList.findIndex(checkingTask => {
      return targetTask === checkingTask;
    });
    this.taskList.splice(targetIndex, 1);
    data.saveToLocal();
  }

  editTask(task, title, description, dueDate, priority) {
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    data.saveToLocal();
  }
}