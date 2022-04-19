import './style.css';
import './newProjectForm';
import data from '../data';
import { displayTasks } from '../tasksDisplay';

const projectList = document.querySelector('.sideBar-projectList');
const colorPicker = document.querySelector('.sideBar-colorPicker');

export function displayList() {
  projectList.innerHTML = '';
  data.projectList.forEach(project => {
    projectList.append(createProjectElement(project));
  });
}

function createProjectElement(project) {
  let element = document.createElement('div');
  let deleteButton = document.createElement('div');
  deleteButton.classList.add('hideButton');
  deleteButton.innerHTML = `<span class="material-icons deleteProject">delete</span>`
  element.append(`${project.name}`, deleteButton);
  element.classList.add('project');
  project.element = element;

  element.addEventListener('click', () => selectProject(project));
  element.addEventListener('mouseenter', (e) => { showDeleteButton(e) });
  element.addEventListener('mouseleave', (e) => { hideDeleteButton(e) });
  deleteButton.addEventListener('click', (e) => deleteProject(e, project));

  return element;
}

function deleteProject(e, project) {
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

function showDeleteButton(e) {
  e.target.lastElementChild.classList.remove('hideButton');
}

function hideDeleteButton(e) {
  e.target.lastElementChild.classList.add('hideButton');
}

((function setColorPicker() {
  let colors = ['#95DBE5', '#F8A055', '#FDD475', '#B3DE81'];
  let colorElements = colors.map(color => {
    let colorBox = document.createElement('div');
    colorBox.classList.add('colorPicker-colorBox');
    if (colors.indexOf(color) === 0) colorBox.classList.add('pick');
    colorBox.style.backgroundColor = color;
    colorPicker.appendChild(colorBox);

    return colorBox;
  });

  colorElements.forEach(element => {
    element.addEventListener('click', () => {
      data.mainColor = colors[colorElements.indexOf(element)];
      colorElements.map(element => element.classList.remove('pick'));
      element.classList.add('pick');
    });
  });

})());

export default { displayList };