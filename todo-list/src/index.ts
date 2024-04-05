import { state } from "./state";
import { renderTasks, addTaskListener } from "./list";

const taskEl = document.querySelector(".task");
const inputEl = document.querySelector(".input");
const buttonEl = document.querySelector(".button");

state.subscribe(() => {
  renderTasks(taskEl);
});

renderTasks(taskEl);
addTaskListener(buttonEl, inputEl);
