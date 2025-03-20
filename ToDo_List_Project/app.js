let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');


//local storage,cookies
let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>{
    todos.push(input.value)  //entering todoist values in array
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''  //if one enter then it erase the box
})

//to display 
function addtodo(todo){
    //displayed elements in paragraph formate
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para)
     //if the task complete it gives a strike to the text
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
      //double click
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

//to remove from array

function remove(todo){
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}