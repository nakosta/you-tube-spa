import { createSlice } from "@reduxjs/toolkit";

const staticRequestSlice = createSlice({
  name: "staticRequest",
  initialState: {
    value: "",
  },
  reducers: {
    setStaticRequest: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setStaticRequest } = staticRequestSlice.actions;
export default staticRequestSlice.reducer;
