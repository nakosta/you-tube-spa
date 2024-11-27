import {
  setTasks,
  addTask,
  updateTask,
  deleteTask,
  toggleTaskCompletion,
} from "../actions/tasks";
import {
  getTasks,
  createTask,
  editTask,
  deleteAxios,
  isCompleted,
} from "../../apiAxios";

export const axiosTasks = () => async (dispatch) => {
  try {
    const tasks = await getTasks();
    dispatch(setTasks(tasks));
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export const createNewTask = (newTask) => async (dispatch) => {
  try {
    const { user_id, ...task } = await createTask(newTask);
    dispatch(addTask(task));
  } catch (error) {
    console.error("Error creating task:", error);
  }
};

export const updateTaskById = (id, updatedText) => async (dispatch) => {
  try {
    const updatedTask = await editTask(updatedText, id);
    dispatch(updateTask(updatedTask));
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

export const deleteTaskById = (id) => async (dispatch) => {
  try {
    await deleteAxios(id);
    dispatch(deleteTask(id));
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

export const toggleTask = (id) => async (dispatch) => {
  try {
    await isCompleted(id);
    dispatch(toggleTaskCompletion(id));
  } catch (error) {
    console.error("Error toggling task:", error);
  }
};
