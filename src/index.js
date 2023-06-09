import './style.css';
import TodoList from '../modules/crud.js';

const toDoList = new TodoList();

document.addEventListener('keyup', (event) => {
  const activity = document.querySelector('.add').value.trim();

  if (event.code === 'Enter') {
    if (activity) {
      toDoList.add(activity);
      localStorage.setItem('list', JSON.stringify(toDoList.list));
      toDoList.displayList();
      document.querySelector('.add').value = '';
    }
  }
});

toDoList.check();
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    const { index } = e.target.dataset;

    document.querySelectorAll('.taskElement')[index].classList.toggle('line-through');
  }

  if (e.target.classList.contains('fa-turn-down')) {
    const task = document.querySelector('.add').value.trim();
    if (task) {
      toDoList.add(task);
      localStorage.setItem('list', JSON.stringify(toDoList.list));
      toDoList.displayList();
      document.querySelector('.add').value = '';
    }
  }
});

toDoList.clearAllButton();
toDoList.CompletedFalse();

toDoList.displayList();
toDoList.addRemoveBtnListeners();
