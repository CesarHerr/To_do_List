import './style.css';
import TodoList from '../modules/crud.js';

export const toDoList = new TodoList();

document.addEventListener('keyup', (event) => {
  const activity = document.querySelector('.add').value;

  if (event.code === 'Enter') {
    if (activity !== '') {
      toDoList.add(activity);
      localStorage.setItem('list', JSON.stringify(toDoList.list));
      toDoList.displayList();
      document.querySelector('.add').value = '';
    }
  }
});

// complete always is false if refresh the page



toDoList.check();
toDoList.crossOut();
toDoList.clearAllButton();
toDoList.CompletedFalse();


toDoList.displayList();
toDoList.addRemoveBtnListeners();

