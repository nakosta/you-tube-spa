import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import tasksReducer from "./reducers/tasksReducer";
import newTaskReducer from "./reducers/newTaskReducer";
import editingTextReducer from "./reducers/editingTextReducer";


const rootReducer = combineReducers({
  tasks: tasksReducer,
  newTask: newTaskReducer,
  editingText: editingTextReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
