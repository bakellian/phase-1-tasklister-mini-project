document.addEventListener("DOMContentLoaded", () => {
  let myForm = document.getElementById('create-task-form')
  myForm.addEventListener('submit', submitInput)
});

function submitInput(e) {
  e.preventDefault();

  const myToDoList = document.getElementById('tasks');
  let toDo = document.createElement('li');
  toDo = e.target['new-task-description'].value;
  myToDoList.append(toDo);

  e.target.reset();
}
