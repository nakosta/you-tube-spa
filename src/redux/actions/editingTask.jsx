export const setEditingTask = (id) => ({
  type: "SET_EDITING_TASK",
  payload: id,
});

export const clearEditingTask = () => ({
  type: "CLEAR_EDITING_TASK",
});