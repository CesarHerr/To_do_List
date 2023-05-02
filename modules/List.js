const list = [
  {
    index: 0,
    complete: true,
    description: 'Do the dishes'
  },
  {
    index: 0,
    complete: false,
    description: 'Study Maths'
  },
  {
    index: 0,
    complete: true,
    description: 'Do exercises'
  }
];

const toDoList = () => {
  let checkList = [];

  const main = document.querySelector('.todo__list');
  list.forEach((parameter,index) => {
    const toDo = document.createElement('li');
    toDo.innerHTML = `
      <input type="checkbox" > ${list[index].description} 
      <button class="button remove-btn" data-list-index=${index}>Delete</button> 
      `;
      checkList.push(toDo)
  });

  main.append(...checkList);

}

export default toDoList;