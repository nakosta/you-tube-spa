export const setEditingText = (editingText) => ({
  type: "SET_EDITING_TEXT",
  payload: editingText,
});

export const clearEditingText = () => ({
  type: "CLEAR_EDITING_TEXT",
});