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

toDoList.displayList();
toDoList.addRemoveBtnListeners();