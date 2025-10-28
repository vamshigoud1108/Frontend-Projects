let todoInput = document.querySelector('.todo-input');
let addBtn = document.querySelector('button');
let todoList = document.querySelector('ul');
let taskcount = document.querySelector('.task-count');
let clearBtn = document.querySelector('.clear-btn');
addBtn.addEventListener('click',()=>{
  addTask();
  saveTask();
 })
 function addTask(){
  if(todoInput.value !== ''){
    let listItem = document.createElement('li');
    listItem.innerHTML += ` <div class="todo-info">
                              <input type="checkbox">
                              <p>${todoInput.value}</p>
                            </div>
                            <div class="trash-icon" onclick='deleteItem(this)'>
                              <i class="bx bxs-trash"></i>
                            </div>`;
    todoList.appendChild(listItem);
    todoInput.value = '';
    listItem.scrollIntoView({ behavior: 'smooth' });    
  }
  else{
    alert('Please Add a Task...')
  }
 }
 //Delete Item
 function deleteItem(item){
  let itemInfo = item.parentNode;
  itemInfo.parentNode.removeChild(itemInfo);
  saveTask();
 }
 //Save Data
 function saveTask(){
  localStorage.setItem('tasks',todoList.innerHTML);
}
//Retreive Data
function showTask(){
  todoList.innerHTML = localStorage.getItem('tasks');
}
showTask();

    
            