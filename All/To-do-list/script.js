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

        const deleteIcon = document.createElement("img");
        deleteIcon.src = "Imgs/Delete_img.png";
        deleteIcon.alt = "Excluir Tarefa!";
        deleteIcon.classList.add("delete-icon")

        deleteIcon.addEventListener("click", () => {
            taskDiv.remove()
        });

        taskDiv.appendChild(taskCheckbox);
        taskDiv.appendChild(taskLabel);
        taskDiv.appendChild(deleteIcon);

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

document.getElementById()
