import './newProjectForm.css';

const newProjectButton = document.querySelector('.sideBar-newProjectButton');
const background = document.querySelector('.newProjectBackground');
const form = document.querySelector('.newProjectForm');
const cancelButton = form.querySelector('.newProjectForm-cancelButton');
const input = form.querySelector('input');
const submitButton = form.querySelector('.newProjectForm-submitButton');
const warnMessage = form.querySelector('.newProjectForm-warnMessage');
const sideBar = document.querySelector('.sideBar');
const taskDisplay = document.querySelector('.taskDisplay');

newProjectButton.addEventListener('click', showForm);
cancelButton.addEventListener('click', hideForm);
submitButton.addEventListener('click', submitForm);
input.addEventListener('keydown', submitForm);
input.addEventListener('input', onInput);

setTimeout(() => {
  form.style.transition = 'all 0.3s';
}, 300);

function showForm() {
  background.style.visibility = 'visible';
  form.style.visibility = 'visible';
  form.style.transform = 'scale(1)';
  sideBar.style.filter = 'blur(5px)';
  taskDisplay.style.filter = 'blur(5px)';
}

function hideForm() {
  background.style.visibility = 'hidden';
  form.style.visibility = 'hidden';
  form.style.transform = 'scale(0)';
  warnMessage.innerText = '';
  input.style.outlineColor = 'black';
  input.value = '';
  sideBar.style.filter = 'none';
  taskDisplay.style.filter = 'none';
}

function submitForm(e) {
  if (e.type === 'keydown' & e.key !== 'Enter') return;

  let inputValue = input.value;

  if (inputValue.length == 0) {
    warn("Project name is required");
  }

  console.log(inputValue);
}

function onInput() {
  warnMessage.innerText = '';
  input.style.outlineColor = 'black';
}

function warn(message) {
  warnMessage.innerText = message;
  input.style.outlineColor = 'red';
  input.focus();
}