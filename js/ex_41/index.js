const urlId4 = "https://jsonplaceholder.typicode.com/todos/4";

const fetchTodos = async () => {
  try {
    const response = await fetch(urlId4);
    const todo = await response.json();
    console.log(todo);

    const h2 = document.createElement("h2");
    h2.textContent = todo.title;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.completed;

    const container = document.getElementById("container");
    container.appendChild(h2);
    container.appendChild(input);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchTodos();
