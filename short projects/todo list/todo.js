
function addTodo() {
      const input = document.getElementById("todo-input");
      const todoText = input.value.trim();

      if (todoText === "") {
        alert("Please enter a task!");
        return;
      }

      const list = document.getElementById("todo-list");

      const li = document.createElement("li");
      li.textContent = todoText;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = function () {
        list.removeChild(li);
      };

      li.appendChild(deleteBtn);
      list.appendChild(li);

      input.value = ""; // Clear input
    }