import { state } from "./state";
const buttonEl = document.querySelector(".button");
const inputEl = document.querySelector(".input");

export function renderTasks(container: any) {
  const tasks = state.getState().tasks;
  container.innerHTML = ""; //para que al escribir algo nuevo, no se repita lo escrito anteriormente

  tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.style.display = "flex";
    taskContainer.style.gap = "8px";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", () => {
      toggleTaskCompleted(task);
    });
    const taskText = document.createElement("span");
    taskText.textContent = task;

    if (isTaskCompleted(task)) {
      checkbox.checked = true;
    }

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskText);
    container.appendChild(taskContainer);
  });
}

function toggleTaskCompleted(taskName: string) {
  const tasks = state.getState().tasks;
  const index = tasks.indexOf((task) => task.task === taskName);
  if (index !== -1) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      task: taskName,
      completed: !tasks[index].completed,
    };
    state.setState({ tasks: updatedTasks });
  }
}

function isTaskCompleted(task: string): boolean {
  const tasks = state.getState().tasks;
  const foundTask = tasks.find((t) => t.task === task);
  return foundTask ? foundTask.completed : false;
}

export function addTaskListener(buttonEl: any, inputEl: any) {
  buttonEl.addEventListener("click", () => {
    const newTask = inputEl.value.trim();
    if (newTask !== "") {
      state.addTask(newTask);
      inputEl.value = ""; //limpiar el campo, puede ser reset?
    }
  });
}
