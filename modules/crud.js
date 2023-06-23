import Todo from './todo.js';

const mainList = document.querySelector('.tasks');

class TodoList {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) ?? [];
    this.enterEvent();
  }

  add(text) {
    const newTodo = new Todo(text);
    newTodo.index = this.list.length + 1;
    this.list.push(newTodo);
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  remove(index) {
    this.list.splice(index, 1);
    this.indexes();
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  edit(index, newText) {
    this.list[index].text = newText;
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  displayList() {
    mainList.innerHTML = this.list
      .map(
        (todo, index) => `
        <li class="taskElement_master" data-task-index="${index}" data-id="${index + 1}">
          <span >
            <input type="checkbox" class="checkbox" data-index="${index}" aria-label="checkbox" required />         
            <input name="name${index}" class="taskElement " data-task-index="${index}" value="${todo.text}" aria-label="task element"/>           
          </span>  
          <i class="fa-solid fa-ellipsis-vertical icon" data-list-index="${index}"></i>   
        </li>
      `,
      )
      .join('');

    const inputs = document.querySelectorAll('.taskElement');
    const iconBtn = document.querySelectorAll('.icon');
    const background = document.querySelectorAll('.taskElement_master');

    mainList.addEventListener('click', (event) => {
      if (!event.target.classList.contains('fa-trash-can')) {
        inputs.forEach((input) => {
          input.style.backgroundColor = 'transparent';
        });
        iconBtn.forEach((icon) => {
          icon.classList.remove('fa-trash-can');
          icon.classList.add('fa-ellipsis-vertical');
        });
        background.forEach((back) => {
          back.style.backgroundColor = 'transparent';
        });
      }

      if (event.target.classList.contains('taskElement')) {
        const { taskIndex } = event.target.dataset;
        const icon = mainList.querySelector(
          `i[data-list-index="${taskIndex}"]`,
        );

        icon.classList.add('fa-trash-can');
        icon.classList.remove('fa-ellipsis-vertical');
        event.target.style.backgroundColor = 'rgb(235, 235, 123)';
        mainList.querySelector(
          `li[data-task-index="${taskIndex}"]`,
        ).style.backgroundColor = 'rgb(235, 235, 123)';
      }
    });
  }

  indexes() {
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
  }

  addRemoveBtnListeners() {
    mainList.addEventListener('click', (event) => {
      if (event.target.classList.contains('fa-trash-can')) {
        const { listIndex } = event.target.dataset;
        this.remove(listIndex);
        localStorage.setItem('list', JSON.stringify(this.list));
        this.displayList();
      }
    });
  }

  enterEvent() {
    document.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') {
        if (event.target.classList.contains('taskElement')) {
          const { value } = event.target;
          const { taskIndex } = event.target.dataset;
          this.edit(taskIndex, value);
          this.displayList();
        }
      }
    });
  }

  check() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('checkbox')) {
        const { index } = e.target.dataset;
        const db = JSON.parse(localStorage.getItem('list'));

        this.list[index].complete = !db[index].complete;
        localStorage.setItem('list', JSON.stringify(this.list));
      }
    });
  }

  clearAllButton() {
    const clearBtn = document.querySelector('.clear');
    clearBtn.addEventListener('click', () => {
      this.deleteChecked();
      window.location.reload();
    });
  }

  deleteChecked() {
    this.list = this.list.filter((element) => element.complete !== true);
    this.indexes();
    localStorage.setItem('list', JSON.stringify(this.list));
    
  }

  CompletedFalse() {
    this.list.forEach((todo) => {
      todo.complete = false;
      localStorage.setItem('list', JSON.stringify(this.list));
    });
  }
}

export default TodoList;
