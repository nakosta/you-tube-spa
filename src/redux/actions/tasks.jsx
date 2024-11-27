export const setTasks = (tasks) => ({
  type: "SET_TASKS",
  payload: tasks,
});

export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const updateTask = (task) => ({
  type: "UPDATE_TASK",
  payload: task,
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});

export const toggleTaskCompletion = (id) => ({
  type: "TOGGLE_TASK_COMPLETION",
  payload: id,
});
