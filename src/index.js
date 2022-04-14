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
    data.projectList[0].addTask(new Task('task' + i, 'this is task', '2022-04-13', 'Medium'));
  }

  console.log(data.projectList);
  sideBar.displayList(data.projectList);
}