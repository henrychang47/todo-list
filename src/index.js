import './style.css';

import sideBar from './modules/sideBar';
import tasksDisplay from './modules/tasksDisplay'
import Project from './modules/project';
import data from './modules/data';

window.onload = function () {
  data.addNewProject('projectA');
  data.addNewProject('projectB');

  console.log(data.projectList);
  sideBar.displayList(data.projectList);
}