import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("favourites");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.error("Не удалось загрузить favourites из localStorage:", error);
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favourites", serializedState);
  } catch (error) {
    console.error("Не удалось сохранить favourites в localStorage:", error);
  }
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    items: loadFromLocalStorage(),
    editRequest: null,
  },
  reducers: {
    saveRequest: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex !== -1) {
        state.items[existingIndex] = action.payload;
      } else {
        state.items.push(action.payload);
      }
      saveToLocalStorage(state.items);
    },
    deleteRequest: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state.items);
    },
    setEditRequest: (state, action) => {
      state.editRequest = action.payload;
    },
    clearEditRequest: (state) => {
      state.editRequest = null;
    },
  },
});

export const { saveRequest, deleteRequest, setEditRequest, clearEditRequest } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
