class Todo {
  constructor(text, index = 1) {
    this.text = text;
    this.complete = false;
    this.index = index;
  }
}

export default Todo;