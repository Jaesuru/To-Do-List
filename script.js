const todoItemForm = document.getElementById("todoItemForm");
const todoItemInput = document.getElementById("todoItemInput");
const todoItemButton = document.getElementById("todoItemButton");
const itemList = document.querySelector(".itemList");
const list = document.querySelector(".list");

function showList() {
    itemList.style.display = "block";
}

function addToDoItem(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add("todoItem");
    list.appendChild(li);
}

todoItemForm.addEventListener("submit", event => {
    event.preventDefault();
    const taskText = todoItemInput.value.trim();

    if (taskText) {
        addToDoItem(taskText);
        showList();
        todoItemInput.value = "";
    }
});
