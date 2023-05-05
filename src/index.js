import './style.css';
import TodoList from '../modules/crud.js';

const toDoList = new TodoList();

const addToDo = document.querySelector('.add');

document.addEventListener('keyup', (event) => {
  const activity = document.querySelector('.add').value;

  if (event.code === 'Enter') {
    if (activity !== '') {
      toDoList.add(activity);
      toDoList.displayList();
      addToDo.value = '';
    }
  }
});

// complete always is false if refresh the page
toDoList.list.forEach((todo) => {
  todo.complete = false;
  localStorage.setItem('list', JSON.stringify(toDoList.list));
});

// checkbox true-false
document.addEventListener('change', (e) => {
  if (e.target.classList.contains('checkbox')) {
    const { index } = e.target.dataset;
    const db = JSON.parse(localStorage.getItem('list'));
    toDoList.list[index].complete = !db[index].complete;
    localStorage.setItem('list', JSON.stringify(toDoList.list));
    const taskDescription = document.querySelectorAll('.taskElement');
    taskDescription[index].classList.toggle('line-through');
  }
});

// clear all button
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
  toDoList.list = toDoList.list.filter((element) => element.complete !== true);
  localStorage.setItem('list', JSON.stringify(toDoList.list));
  window.location.reload();
});

toDoList.displayList();
toDoList.addRemoveBtnListeners();