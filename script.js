// Get elements
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="delete-btn" onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

// Event listener for the "Enter" key
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
