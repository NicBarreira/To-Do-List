function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText !== "") {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";

        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;

        taskDiv.appendChild(taskCheckbox);
        taskDiv.appendChild(taskLabel);

        const taskList = document.getElementById("taskList");
        taskList.appendChild(taskDiv);

        taskInput.value = "";
    } else {
        alert("Por favor, digite uma tarefa!");
    }
}

document.getElementById("btnTask").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
