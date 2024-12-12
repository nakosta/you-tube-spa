import { createSlice } from "@reduxjs/toolkit";

const viewModeSlice = createSlice({
  name: "viewMode",
  initialState: {
    value: "list",
  },
  reducers: {
    setViewMode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setViewMode } = viewModeSlice.actions;
export default viewModeSlice.reducer;
