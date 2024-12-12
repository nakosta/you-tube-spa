import { createSlice } from "@reduxjs/toolkit";

const sliderValueSlice = createSlice({
  name: "sliderValue",
  initialState: {
    value: 12,
  },
  reducers: {
    setSliderValue: (state, action) => {
      state.value = action.payload;
    },
    defaultSliderValue: (state) => {
      state.value = 12;
    },
  },
});

export const { setSliderValue, defaultSliderValue } = sliderValueSlice.actions;
export default sliderValueSlice.reducer;
