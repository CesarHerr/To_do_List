class Todo {
  constructor(text, complete = false) {
    this.text = text;
    this.complete = false;
  }
}

const mainList = document.querySelector('.tasks');

class TodoList {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) || [];
    this.displayList();    
    this.enterEvent();
  }

  add(text) {
    const newTodo = new Todo(text);
    this.list.push(newTodo);
    localStorage.setItem('list', JSON.stringify(this.list));
    this.displayList();
  }

  remove(index) {
    this.list.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(this.list));
    this.displayList();
  }

  edit(index, newText) {
    this.list[index].text = newText;
    localStorage.setItem('list', JSON.stringify(this.list));
    this.displayList();
  }

  displayList() {
    mainList.innerHTML = this.list
      .map(
        (todo, index) => `
        <li>
          <span>           
            <input type="checkbox">
            <label for="name${index}"></label>
            <input name="name${index}" class="taskElement" value="${todo.text}"></input>             
          </span>          
          <button class="button remove-btn" data-list-index="${index}"><i class="fa-regular fa-trash-can" style="color: #a0a4ac;"></i></button>      
        </li>
      `
      )
      .join('');
  }

  addRemoveBtnListeners() {
    mainList.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-btn')) {
        const index = event.target.dataset.listIndex;
        this.remove(index);
      }
    });
    
  }
}

export default TodoList;