import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import tasksReducer from "./reducers/tasksReducer";
import newTaskReducer from "./reducers/newTaskReducer";
import editingTextReducer from "./reducers/editingTextReducer";
import editingTaskReducer from "./reducers/editingTaskReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  newTask: newTaskReducer,
  editingText: editingTextReducer,
  editingTask: editingTaskReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
