let data = document.querySelector(".data");
let listContainer = document.getElementById("list-container");

function add() {
    if (data.value === '') {
        alert("Write Something");
    } else {
        let taskContainer = document.createElement("div");
        taskContainer.className = "task-container";
        
        let taskInput = document.createElement("input");
        taskInput.type = "text";
        taskInput.className = "task-input";
        taskInput.value = data.value;
        taskInput.readOnly = true;
        
        let editButton = document.createElement("button");
        editButton.type="button";
        editButton.className="btnn";
        editButton.innerText = "Edit";
        editButton.onclick = function() {
            if (taskInput.readOnly) {
                taskInput.readOnly = false;
                editButton.innerText = "Save";
            } else {
                taskInput.readOnly = true;
                editButton.innerText = "Edit";
            }
        };
        let deleteButton = document.createElement("button");
               deleteButton.type = "button";
               deleteButton.className = "delete-btn";
               deleteButton.innerText = "Delete";
               deleteButton.onclick = function() {
                   listContainer.removeChild(taskContainer);
               };
        
        taskContainer.appendChild(taskInput);
        taskContainer.appendChild(editButton);
        taskContainer.appendChild(deleteButton);
        listContainer.appendChild(taskContainer);
        
        data.value = '';
    }
}