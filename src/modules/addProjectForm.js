const newProjectButton = document.querySelector('.sideBar-newProjectButton');
const background = document.querySelector('.newProjectBackground');
const form = document.querySelector('.newProjectForm');
const cancelButton = form.querySelector('.newProjectForm-cancelButton');
const input = form.querySelector('input');
const submitButton = form.querySelector('.newProjectForm-submitButton');
const warnMessage = form.querySelector('.newProjectForm-warnMessage');


newProjectButton.addEventListener('click', showNewProjectForm);
cancelButton.addEventListener('click', hideNewProjectForm);
submitButton.addEventListener('click', submitProjectForm);
input.addEventListener('input', onInput);

function showNewProjectForm() {
  background.style.visibility = 'visible';
  form.style.visibility = 'visible';
}

function hideNewProjectForm() {
  background.style.visibility = 'hidden';
  form.style.visibility = 'hidden';

  warnMessage.innerText = '';
  input.style.outlineColor = 'black';
  input.value = '';
}

function submitProjectForm() {
  let inputValue = input.value;
  if (inputValue.length == 0) {
    warnMessage.innerText = "Project name is required";
    input.style.outlineColor = 'red';
    input.focus();
  }

  console.log(inputValue);
}

function onInput(e) {
  warnMessage.innerText = '';
  input.style.outlineColor = 'black';
}