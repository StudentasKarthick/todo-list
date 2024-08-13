const addButton=document.querySelector('.js-add');
const todoInput=document.querySelector('.js-todo-input');
const dateInput=document.querySelector('.js-date-input');
addButton.addEventListener('click',()=>{
  addTodo();
  renderTodoList();
  todoInput.value='';
  dateInput.value='';
});

let todoList=JSON.parse(localStorage.getItem('todoList'))||[{
  todo:'Karthick',
  date:'2024-05-28'
},{
  todo:'Aishu',
  date:'2024-05-30'
}];
function addTodo(){
  const todo=todoInput.value;
  const date=dateInput.value;
  if(todo==='' && date===''){
    alert('Hey you may miss enter todo or date');
  }else{
    todoList.push({
      todo,
      date
    });
    saveToStorage();
  }
  
}

function renderTodoList(){
  let html='';
  todoList.forEach((todo)=>{
    html+=`<p>${todo.todo}  </p><p>${todo.date}</p><button class="js-delete delete-button">Delete</button>`;
  });
  document.querySelector('.js-display').innerHTML=html;
  const deleteButton=document.querySelectorAll('.js-delete');
  deleteButton.forEach((deleteLink,index)=>{
    deleteLink.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderTodoList();
      saveToStorage();
    });
  });
}
renderTodoList();

function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}