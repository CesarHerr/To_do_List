import TodoList from '../modules/crud.js';

// Add
describe('Add task to the list', () => {
  let toDoList = [];
  beforeEach(() => {
    localStorage.clear();
    toDoList = new TodoList();
  });

  test('case 1, should add "Read a new book"', () => {
    // Arrange
    const task = 'Read a book';

    // Act
    toDoList.add(task);

    // Assert
    expect(toDoList.list[0].text).toContain(task);
  });

  test('case 2, should add "Read a new book"', () => {
    // Arrange
    const task = 'Run';

    // Act
    toDoList.add(task);

    // Assert
    expect(toDoList.list[0].text).toContain(task);
  });
});

// Remove
describe('Remove task to the list', () => {
  let toDoList;
  beforeEach(() => {
    localStorage.clear();
    toDoList = new TodoList();
  });

  test('case 1, Remove a task', () => {
    // Arrange
    const task = 'Read a book';
    const taskObject = { complete: false, index: 1, text: 'Read a book' };
    const index = 0;

    // Act
    toDoList.add(task);
    toDoList.remove(index);

    // Assert
    expect(toDoList.list).not.toContainEqual(taskObject);
  });

  test('case 2, Remove a task', () => {
    // Arrange
    const task = 'Ride a Bike';
    const taskObject = { complete: false, index: 1, text: 'Ride a Bike' };
    const index = 0;

    // Act
    toDoList.add(task);
    toDoList.remove(index);

    // Assert
    expect(toDoList.list).not.toContainEqual(taskObject);
  });
});
