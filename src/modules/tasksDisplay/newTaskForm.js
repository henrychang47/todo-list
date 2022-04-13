import './newTaskForm.css';
import data from '../data';
import Task from '../task';
import { displayTasks } from '.';
const newTaskButton = document.querySelector('.tasksDisplay-newProjectButton');
const background = document.querySelector('.maskBackground');
const form = document.querySelector('.newTaskForm');
const cancelButton = form.querySelector('.newTaskForm-cancelButton');
const taskTitle = form.querySelector('#taskTitleInput');
const taskDescription = form.querySelector('#taskDescriptionInput');
const taskTime = form.querySelector('#taskTimeInput');
const taskPriority = form.querySelector('#taskPriorityInput');
const priorityHigh = form.querySelector('.priorityHigh');
const priorityMedium = form.querySelector('.priorityMedium');
const priorityLow = form.querySelector('.priorityLow');
const submitButton = form.querySelector('.newTaskForm-submitButton');
const warnningText = form.querySelector('.newTaskForm-Warnning');

// const warnMessage = form.querySelector('.newTaskForm-warnMessage');
const sideBar = document.querySelector('.sideBar');
const tasksDisplay = document.querySelector('.tasksDisplay');

newTaskButton.addEventListener('click', showForm);
cancelButton.addEventListener('click', hideForm);
submitButton.addEventListener('click', submitForm);
setTimeout(() => {
  form.style.transition = 'all 0.3s';
}, 300);

[priorityHigh, priorityMedium, priorityLow].forEach(priorityBox => {
  priorityBox.addEventListener('click', e => {
    selectPriority(e.target.classList[0]);
  });
});

function showForm() {
  if (data.currentProject === null) return;
  background.style.visibility = 'visible';
  form.style.visibility = 'visible';
  form.style.transform = 'scale(1)';
  sideBar.style.filter = 'blur(5px)';
  tasksDisplay.style.filter = 'blur(5px)';
}

function hideForm() {
  background.style.visibility = 'hidden';
  form.style.visibility = 'hidden';
  form.style.transform = 'scale(0)';
  sideBar.style.filter = 'none';
  tasksDisplay.style.filter = 'none';

  taskTitle.value = '';
  taskDescription.value = '';
  taskTime.value = '';
  selectPriority('priorityMedium');
}

function selectPriority(priority) {
  const setlectedWidth = "70%";
  const noneSelectedWidth = "15%";

  switch (priority) {
    case 'priorityHigh':
      priorityHigh.innerText = 'High';
      priorityMedium.innerText = '';
      priorityLow.innerText = '';
      // console.log(taskPriorityInput.innerText);
      priorityHigh.style.width = setlectedWidth;
      priorityMedium.style.width = noneSelectedWidth;
      priorityLow.style.width = noneSelectedWidth;
      break;

    case 'priorityMedium':
      priorityHigh.innerText = '';
      priorityMedium.innerText = 'Medium';
      priorityLow.innerText = '';
      priorityHigh.style.width = noneSelectedWidth;
      priorityMedium.style.width = setlectedWidth;
      priorityLow.style.width = noneSelectedWidth;
      break;

    case 'priorityLow':
      priorityHigh.innerText = '';
      priorityMedium.innerText = '';
      priorityLow.innerText = 'Low';
      priorityHigh.style.width = noneSelectedWidth;
      priorityMedium.style.width = noneSelectedWidth;
      priorityLow.style.width = setlectedWidth;
      break;
  }
}

function submitForm(e) {
  let title = checkTitleInput(taskTitle.value);
  let description = taskDescription.value;
  let time = taskTime.value;
  let priority = taskPriority.innerText;

  if (!title) {
    warn(taskTitle);
    return;
  }

  if (!description) {
    warn(taskDescription);
    return;
  }

  data.currentProject.taskList.push(new Task(title, description, time, priority));
  displayTasks(data.currentProject);
  console.log(title);
  console.log(description);
  console.log(time);
  console.log(priority);

  hideForm();
}

function checkTitleInput(input) {
  if (input) return input;

}

// function onInput() {
//   warnMessage.innerText = '';
//   input.style.outlineColor = 'black';
// }

function warn(target) {
  target.focus();
  target.classList.add('warnning');
  setTimeout(() => {
    target.classList.remove('warnning');
  }, 500);
}