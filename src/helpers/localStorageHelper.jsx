import { errors } from "../utils/utils.jsx";

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("favourites");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.error(errors.loadLocalStorage, error);
    return [];
  }
};

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favourites", serializedState);
  } catch (error) {
    console.error(errors.saveLocalStorage, error);
  }
};
