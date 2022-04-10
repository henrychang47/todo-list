import { set } from 'date-fns';
import './newTaskForm';
import './style.css';

const tasksDisplay = document.querySelector('.tasksDisplay');
const listElement = tasksDisplay.querySelector('.tasksDisplay-list');
const title = tasksDisplay.querySelector('.tasksDisplay-title');

export function displayTasks(project) {
  setTitle(project.name);
  listElement.innerHTML = '';
  project.taskList.forEach(task => {
    listElement.append(createElement(task));
  });
}

function createElement(task) {
  let element = document.createElement('div');
  let title = document.createElement('div');

  element.classList.add('task');
  title.innerText = task.title;

  element.append(title);
  return element;
}

function setTitle(text) {
  title.innerText = text;
}
