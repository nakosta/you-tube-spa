import { createSlice } from "@reduxjs/toolkit";

const editingTaskSlice = createSlice({
  name: "editingTask",
  initialState: {
    value: null,
  },
  reducers: {
    setEditingTask: (state, action) => {
      state.value = action.payload;
    },
    clearEditingTask: (state) => {
      state.value = null;
    },
  },
});

export const { setEditingTask, clearEditingTask } = editingTaskSlice.actions;
export default editingTaskSlice.reducer;
