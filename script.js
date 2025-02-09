document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;

    document.getElementById("taskList").appendChild(li);
    saveTask(taskText);
    taskInput.value = "";
}

function removeTask(button) {
    let li = button.parentElement;
    let taskText = li.firstChild.textContent;
    li.remove();
    deleteTask(taskText);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="removeTask(this)">Delete</button>`;
        document.getElementById("taskList").appendChild(li);
    });
}
