//load todos
const loadTodos = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    //fetching todos
    fetch(url)
        .then(res => res.json())
        .then(data => displayTodos(data));
}


const displayTodos = (todos) => {
    //get the todos container elm
    const todosContainer = document.getElementById("todosContainer");
    todosContainer.innerHTML = "";

    todos.forEach(todo => {
        const todoCard = document.createElement("div");
        todoCard.classList.add("todoCard"); // add the class name of todo card
        todoCard.innerHTML = `
        <p class="isCompleted">${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`} </p>
         <h2 class="todoTitle">${todo.title}</h2>
        `
        todosContainer.append(todoCard);
    })

}