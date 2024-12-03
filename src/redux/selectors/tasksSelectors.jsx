import { createSelector } from "reselect";

const selectTasks = (state) => state.tasks.tasks;

// Селектор для подсчёта кол-ва задач
export const selectTaskCount = createSelector(
  [selectTasks],
  (tasks) => tasks.length
);

// Селектор для фильтрации выполненных задач
export const selectCompletedTasks = createSelector(
  [selectTasks],
  (tasks) => tasks.filter((task) => task.isCompleted).length
);

// Селектор для фильтрации невыполненных задач
export const selectIncompleteTasks = createSelector(
  [selectTasks],
  (tasks) => tasks.filter((task) => !task.isCompleted).length
);