import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: {
    value: "",
  },
  reducers: {
    setRequest: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRequest } = requestSlice.actions;
export default requestSlice.reducer;
