import TodoList from '../modules/crud.js';

// Edit
describe('Edit a task from the list', () => {
  let toDoList;
  beforeAll(() => {
    localStorage.clear();
    toDoList = new TodoList();
  });

  test('case 1, should add "Read a new book"', () => {
    // Arrange
    const task = 'Read a book';
    const index = 0;
    const newTask = 'Do not read';

    // Act
    toDoList.add(task);
    toDoList.edit(index, newTask);

    // Assert
    expect(toDoList.list[0].text).not.toContain(task);
  });
});

// Update completed
describe('Update Completed', () => {
  let toDoList;
  beforeAll(() => {
    localStorage.clear();
    toDoList = new TodoList();
  });

  afterEach(() => {
    localStorage.clear();
    toDoList = new TodoList();
  });

  test('Checkbox click event handler', () => {
    // Arrange
    const task = 'task 1';

    const index = 0;
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');

    // Act
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.dataset.index = index;
    listItem.appendChild(checkbox);
    document.body.appendChild(listItem);

    toDoList.add(task);
    localStorage.setItem('list', JSON.stringify(toDoList.list));

    toDoList.check();
    checkbox.click();

    // Assert
    const updatedList = JSON.parse(localStorage.getItem('list'));
    expect(updatedList[index].complete).toEqual(true);

    toDoList.check();
  });
});

// Completed all button
describe('Completed all btn', () => {
  let toDoList;
  beforeAll(() => {
    localStorage.clear();
    toDoList = new TodoList();
  });

  afterEach(() => {
    localStorage.clear();
    toDoList = new TodoList();
  });

  test('Delete checked box', () => {
    // Arrange
    const task = 'task 1';

    const index = 0;
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');

    // Act
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.dataset.index = index;

    listItem.appendChild(checkbox);
    document.body.appendChild(listItem);

    toDoList.add(task);
    localStorage.setItem('list', JSON.stringify(toDoList.list));

    toDoList.check();
    checkbox.click();
    toDoList.deleteChecked();

    // Assert

    expect(JSON.parse(localStorage.getItem('list'))).toEqual([]);
  });
});