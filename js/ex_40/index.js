const url = "https://jsonplaceholder.typicode.com/todos";

/*const fetchData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
    } catch(error) {
     console.log(error);
    }

}
fetchData();*/

const fetchTodos = async () => {
    try {
        const response = await fetch(url);
        const todos = await response.json();
        console.log(todos);
        const todoList = document.querySelector('.todo-list');

        todos.forEach((todo) => {
            const li = document.createElement('li');
            li.textContent = todo.title;
            todoList.appendChild(li);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchTodos();