var list = document.getElementById("list");

function addtodo() {
    var todoInput = document.getElementById("todo");

    if (todoInput.value.trim() === "") {
        alert("Please enter a ToDo item.");
        return;
    }

    var todoList = document.createElement("li");
    var todoText = document.createTextNode(todoInput.value);
    todoList.className = "list-group-item d-flex justify-content-between align-items-center";

    todoList.appendChild(todoText);
    list.appendChild(todoList);
    todoInput.value = "";

    var deletBtn = document.createElement("button");
    deletBtn.className = "btn btn-danger btn-sm ml-2";
    deletBtn.textContent = 'Delete';
    todoList.appendChild(deletBtn);
    deletBtn.setAttribute('onclick', 'deletefunction(this)');

    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm ml-2";
    editBtn.textContent = 'Edit';
    todoList.appendChild(editBtn);
    editBtn.setAttribute('onclick', 'editfunction(this)');

}


function deletefunction(e) {
    e.parentNode.remove();
}

function editfunction(e) {
    var edit = prompt("Edit your text", e.parentNode.firstChild.nodeValue);
    if (edit) {
        e.parentNode.firstChild.nodeValue = edit;
    }
}

function addenter(event) {
    if (event.keyCode === 13) {
        addtodo();
    }
}

function deleteall() {
    list.innerHTML = "";
}
