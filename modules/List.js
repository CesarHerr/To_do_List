const list = [
  {
    index: 0,
    complete: true,
    description: 'Do the dishes'
  },
  {
    index: 1,
    complete: false,
    description: 'Study Maths'
  },
  {
    index: 2,
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
      <span>
        <label for="name${list[index].index}"><label> 
        <input name="name${list[index].index}" type="checkbox">
        <p>${list[index].description}</p>             
      </span>
        
      <button class="button remove-btn" data-list-index=${index}><i class="fa-regular fa-trash-can" style="color: #7c889c;"></i></button> 
      `;
      checkList.push(toDo)
  });

  main.append(...checkList);

}

export default toDoList;