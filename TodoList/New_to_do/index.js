const todoForm = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const todoListUL = document.querySelector("#todo-list");

let allTodos = gettodos();
updateTodoList();

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
function addTodo() {
  const TodoText = todoInput.value.trim();
  if (TodoText.length > 0) {
    const todoObject = {
        text:TodoText,
        completed: false
    }
    allTodos.push(todoObject);
    updateTodoList();
    saveTodos();
    todoInput.value = "";
  }
}
function updateTodoList(){
    todoListUL.innerHTML = "";
    allTodos.forEach((todo,todoIndex)=>{
   todoItem = createTodoItem(todo,todoIndex);
   todoListUL.append(todoItem)
    })
}

function createTodoItem(todo,todoIndex) {
    const todoId = "todo-"+todoIndex;
  const todoLi = document.createElement("li");
  const TodoText = todo.text;
  todoLi.className = "todo";
  todoLi.innerHTML = `
  <input type="checkbox" id="${todoId}" />
          <label class="custom-checkbox " for="${todoId}">
            <img src="icons/check_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" />
          </label>
          <label for="${todoId}" class="todo-text"
            >${todo}</label
          >
          <button class="delete-button">
            <img
              src="icons/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
            />
          </button> 
  `
  const deleteButton = todoLi.querySelector(".delete-button");
  deleteButton.addEventListener("click",()=>{
    deleteTodoItem(todoIndex);
  })
  const checkbox = todoLi.querySelector("input");
  checkbox.addEventListener("change",()=>
{
    allTodos[todoIndex].completed = checkbox.checked;
    saveTodos();
})
checkbox.checked =todo.completed;
  return todoLi;
}

//local storage//
function  deleteTodoItem(todoIndex){
    allTodos = allTodos.filter((_,i)=> i !== todoIndex);
    saveTodos();
    updateTodoList();

}
function saveTodos(){
    const todosJson = JSON.stringify(allTodos);  
     localStorage.setItem("todos",todosJson);
}

function gettodos(){

    const  todos = localStorage.getItem("todos")|| "[]";
    return JSON.parse(todos);
}