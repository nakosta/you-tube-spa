import { createSlice } from "@reduxjs/toolkit";

const isModalOpenSlice = createSlice({
  name: "isModalOpen",
  initialState: {
    value: false,
  },
  reducers: {
    setIsModalOpen: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsModalOpen } = isModalOpenSlice.actions;
export default isModalOpenSlice.reducer;
