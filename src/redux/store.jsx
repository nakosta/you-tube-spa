import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlice";
import newTaskReducer from "./slices/newTaskSlice";
import editingTextReducer from "./slices/editingTextSlice";
import editingTaskReducer from "./slices/editingTaskSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    newTask: newTaskReducer,
    editingText: editingTextReducer,
    editingTask: editingTaskReducer,
  },
});

export default store;
