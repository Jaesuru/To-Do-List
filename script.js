const todoItemForm = document.getElementById("todoItemForm");
const todoItemInput = document.getElementById("todoItemInput");
const todoItemButton = document.getElementById("todoItemButton");
const itemList = document.querySelector(".itemList");
const list = document.querySelector(".list");

function showList() {
    itemList.style.display = "block";
}

function createItem(taskText) {
    const li = document.createElement("li");
    li.classList.add("todoItem");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("itemText");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
        checkListVisibility();
    });

    li.appendChild(deleteBtn);
    li.appendChild(span);

    list.appendChild(li);
}

todoItemForm.addEventListener("submit", event => {
    event.preventDefault();
    const taskText = todoItemInput.value.trim();

    if (taskText) {
        createItem(taskText);
        showList();
        todoItemInput.value = "";
    }
});

function checkListVisibility() {
    if (list.children.length < 1) {
        itemList.style.display = "none";
    } else {
        itemList.style.display = "block";
    }
}