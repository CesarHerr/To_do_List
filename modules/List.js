const arrList = [
  {
    index: 0,
    complete: true,
    description: 'Do the dishes',
  },
];

class Todo {
  constructor(value) {
    this.value = value;
  }
}

const mainList = document.querySelector('.todo__list');

class TodoList {
  constructor() {
    this.list = [];
  }

  add(value) {
    const newTodo = new Todo(value);
    this.list.push(newTodo);
  }

  remove(index) {
    this.list.splice(index,1);    
  }

  displayList() {
    mainList.innerHTML = this.list.map(
      (Todo, index) => `
      <span>
        <label for="name${list[index].index}"><label> 
        <input name="name${list[index].index}" type="checkbox">
        <p>${list[index].description}</p>             
      </span>
        
      <button class="button remove-btn" data-list-index=${index}><i class="fa-regular fa-trash-can" style="color: #7c889c;"></i></button>      
      `,
    )
    .join('');    
  }

  addRemoveBtnListeners() {
    mainList.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-btn')) {
        const index = event.target.dataset.listIndex;
        this.remove(index);
        this.displayList();
      }
    });
  }
}

export default TodoList;