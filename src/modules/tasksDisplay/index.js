import { set } from 'date-fns';
import { fi } from 'date-fns/locale';
import data from '../data';
import { editTask } from './newTaskForm';
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
  element.classList.add('task');
  let title = document.createElement('div');
  title.classList.add('title');
  title.innerText = task.title;
  let editButton = document.createElement('div');
  editButton.classList.add('material-icons', 'edit');
  editButton.innerText = 'edit';
  let deleteButton = document.createElement('div');
  deleteButton.classList.add('material-icons', 'delete');
  deleteButton.innerText = 'delete';

  title.append(editButton, deleteButton);
  element.append(title);

  element.innerHTML += `
    <div class='date'>${task.dueDate || '---'}</div>
    <div class='${task.priority} priority'></div>
    `;

  element.addEventListener('click', e => {
    let targetClass = e.target.classList.value;
    if (targetClass.includes('delete')) {
      data.currentProject.deleteTask(task);
      displayTasks(data.currentProject);
    } else if (targetClass.includes('edit')) {
      editTask(task);
    } else {
      toggleOpen(e, element, task.description);
    }
  }, false);

  return element;
}

function toggleOpen(e, element, descriptionContent) {
  element.classList.toggle('open');

  if (element.classList.contains('open')) {
    let descriptionElement = document.createElement('textarea');
    descriptionElement.disabled = true;
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
