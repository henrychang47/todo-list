import './style.css';
import './newProjectForm';
import data from '../data';
import { displayTasks } from '../tasksDisplay';

const sideBar = document.querySelector('.sideBar');
const projectList = document.querySelector('.sideBar-projectList');
const deleteButton = document.querySelector('.deleteProject');

export function displayList() {
  projectList.innerHTML = '';
  data.projectList.forEach(project => {
    projectList.append(createProjectElement(project));
  });
}

function createProjectElement(project) {
  let element = document.createElement('div');
  let deleteButton = document.createElement('div');
  deleteButton.innerHTML = `<span class="material-icons deletePorject">delete</span>`
  element.append('- ', `${project.name}`, deleteButton);
  element.classList.add('project');
  project.element = element;

  element.addEventListener('click', () => selectProject(project));

  deleteButton.addEventListener('click', (e) => deletePorject(e, project));

  return element;
}

function deletePorject(e, project) {
  data.deleteProject(project);
  displayList();
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