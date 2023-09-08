const url = "https://jsonplaceholder.typicode.com/posts";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const titleInput = document.getElementById("todo-title");
    const completedCheckbox = document.getElementById("todo-completed");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = titleInput.value;
        const completed = completedCheckbox.checked;
        const postData = {
            title,
            completed,
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            }
            );
            const newPost = await response.json();
            console.log("New post created:", newPost);
        } catch (error) {
            console.error("Error:", error);
        }
    });
});
