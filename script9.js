const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTaskToDOM(task));
}
function saveTasks() {
  const tasks = Array.from(todoList.children).map(li => li.textContent.replace("❌", "").trim());
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}
addBtn.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task) {
    addTaskToDOM(task);
    saveTasks();
    todoInput.value = ""; 
  }
});
loadTasks();
