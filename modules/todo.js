class Todo {
  constructor(text, index = 0) {
    this.text = text;
    this.complete = false;
    this.index = index;
  }
}

export default Todo;