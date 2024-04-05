const state = {
  data: {
    tasks: [],
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  addTask(task) {
    const newTasks = [...this.data.tasks, task];
    this.setState({ tasks: newTasks });
  },
};

export { state };
