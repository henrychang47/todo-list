import './newTaskForm.css';
import data from '../data';
import { displayList } from '.';
const newTaskButton = document.querySelector('.tasksDisplay-newProjectButton');
const background = document.querySelector('.maskBackground');
const form = document.querySelector('.newTaskForm');
const cancelButton = form.querySelector('.newTaskForm-cancelButton');

// const input = form.querySelector('input');
// const submitButton = form.querySelector('.newTaskForm-submitButton');
// const warnMessage = form.querySelector('.newTaskForm-warnMessage');
const sideBar = document.querySelector('.sideBar');
const tasksDisplay = document.querySelector('.tasksDisplay');

newTaskButton.addEventListener('click', showForm);
cancelButton.addEventListener('click', hideForm);
// submitButton.addEventListener('click', submitForm);
setTimeout(() => {
  form.style.transition = 'all 0.3s';
}, 300);

function showForm() {
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
}

// function submitForm(e) {
//   if (e.type === 'keydown' & e.key !== 'Enter') return;

//   let inputValue = input.value;

//   if (inputValue.length == 0) {
//     warn("Project name is required");
//     return;
//   }

//   data.addnewTask(inputValue);
//   displayList();
//   hideForm();
// }

// function onInput() {
//   warnMessage.innerText = '';
//   input.style.outlineColor = 'black';
// }

// function warn(message) {
//   warnMessage.innerText = message;
//   input.style.outlineColor = 'red';
//   input.focus();
// }