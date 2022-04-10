import './style.css';
import './newProjectForm';
import data from '../data';
import { displayTasks } from '../tasksDisplay';

const sideBar = document.querySelector('.sideBar');
const projectList = document.querySelector('.sideBar-projectList');

export function displayList() {
  projectList.innerHTML = '';
  data.projectList.forEach(project => {
    projectList.append(createProjectElement(project));
  });
}

function createProjectElement(project) {
  let element = document.createElement('div');
  element.append('- ', `${project.name}`);
  element.classList.add('project');
  project.element = element;

  element.addEventListener('click', () => selectProject(project));

  return element;
}

function selectProject(project) {
  data.switchCurrentProject(project);
  changeProjectBackgroundColor();
  displayTasks(project);
}

function changeProjectBackgroundColor() {
  data.currentProject.element.style.backgroundColor = data.mainColor;
  if (data.lastProject) {
    data.lastProject.element.style.backgroundColor = 'transparent';
  }
}

export default { displayList };