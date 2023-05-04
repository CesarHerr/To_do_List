import './style.css';
import TodoList from '../modules/List.js';

let toDoList = new TodoList();
console.log(toDoList)

const addToDo = document.querySelector('.add');
const clearBtn = document.querySelector('.clear');

document.addEventListener("keyup", (event) => {

  const activity = document.querySelector(".add").value; 
  
  if (event.code === 'Enter') {

    if (activity !== '') {
      toDoList.add(activity);
      toDoList.displayList();
      addToDo.value = "";
    }
  }
});

toDoList.displayList();
toDoList.addRemoveBtnListeners();

