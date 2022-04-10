import './style.css';

import sideBar from './modules/sideBar';
import tasksDisplay from './modules/tasksDisplay'
import Project from './modules/project';
import Task from './modules/task';
import data from './modules/data';

window.onload = function () {
  data.addNewProject('projectA');
  data.addNewProject('projectB');
  for (let i = 0; i < 10; i++) {
    data.projectList[0].addTask(new Task('task' + i));
  }

  console.log(data.projectList);
  sideBar.displayList(data.projectList);
}