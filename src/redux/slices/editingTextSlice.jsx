import { createSlice } from "@reduxjs/toolkit";

const editingTextSlice = createSlice({
  name: "editingText",
  initialState: {
    value: "",
  },
  reducers: {
    setEditingText: (state, action) => {
      state.value = action.payload;
    },
    clearEditingText: (state) => {
      state.value = "";
    },
  },
});

export const { setEditingText, clearEditingText } = editingTextSlice.actions;
export default editingTextSlice.reducer;
