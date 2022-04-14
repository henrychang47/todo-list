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
  // let title = document.createElement('div');
  // let dueDate = document.createElement('div');
  // let priority = document.createElement('div');

  element.classList.add('task');

  // title.innerText = task.title;
  // dueDate.innerText = task.dueDate;


  // element.append(title, dueDate);

  element.innerHTML = `
    <div class='title'>${task.title}</div>
    <div class='date'>${task.dueDate || '---'}</div>
    <div class='${task.priority} priority'></div>
    `;

  element.addEventListener('click', e => toggleOpen(element, task.description));

  return element;
}

function toggleOpen(element, descriptionContent) {
  element.classList.toggle('open');
  if (element.classList.contains('open')) {
    let descriptionElement = document.createElement('textarea');
    descriptionElement.desable = true;
    descriptionElement.classList.add('description');
    descriptionElement.innerText = descriptionContent;
    element.insertAdjacentElement('beforeend', descriptionElement);
  }
  else {
    let toRemove = document.querySelector('.description');
    toRemove.remove();
  }
}

function setTitle(text) {
  title.innerText = text;
}
