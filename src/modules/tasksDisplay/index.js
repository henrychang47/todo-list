import { set } from 'date-fns';
import './style.css';

const tasksDisplay = document.querySelector('.tasksDisplay');
const listElement = tasksDisplay.querySelector('.tasksDisplay-list');
const title = tasksDisplay.querySelector('.tasksDisplay-title');

export function displayTasks(project) {
  setTitle(project.name);
}

function setTitle(text) {
  title.innerText = text;
}

listElement.innerHTML = 'aaaaaaaa';