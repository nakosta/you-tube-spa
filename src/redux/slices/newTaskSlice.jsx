import { createSlice } from "@reduxjs/toolkit";

const newTaskSlice = createSlice({
  name: "newTask",
  initialState: {
    value: "",
  },
  reducers: {
    setNewTask: (state, action) => {
      state.value = action.payload;
    },
    clearNewTask: (state) => {
      state.value = "";
    },
  },
});

export const { setNewTask, clearNewTask } = newTaskSlice.actions;
export default newTaskSlice.reducer;
