import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  axiosTasks,
  createNewTask,
  updateTaskById,
  deleteTaskById,
  toggleTask,
} from "../../redux/thunks/tasksThunks";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import LogoutButton from "../LogoutButton";

const TodoList = ({ logAction }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [editingTask, setEditingTask] = useState(null); // Текущая редактируемая задача
  const [editingText, setEditingText] = useState(""); // Текст редактируемой задачи
  
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(axiosTasks());
  }, [dispatch]);

  // Добавление новой задачи
  const addTask = (newTask) => {
    if (newTask.trim()) {
      dispatch(createNewTask(newTask));
      logAction("Добавлена задача", { title: newTask });
    }
  };

  // Переключение состояния "выполнено"
  const toggleComplete = (id) => {
    dispatch(toggleTask(id));
    logAction("Изменен статус задачи", { id });
  };

  // Начало редактирования
  const startEditing = (id) => {
    setEditingTask(id);
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setEditingText(task.title);
      logAction("Начато редактирование", task);
    }
  };

  // Сохранение изменений задачи
  const updateTask = (id, editingText) => {
    dispatch(updateTaskById(id, editingText));
    logAction("Обновлена задача", { id, title: editingText });
    setEditingTask(null);
    setEditingText("");
  };

  // Удаление задачи
  const deleteTask = (id) => {
    dispatch(deleteTaskById(id));
    logAction("Удалена задача", { id });
  };

  // Обработчик выхода
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const taskActions = {
    toggleComplete,
    startEditing,
    updateTask,
    deleteTask,
    setEditingText,
    editingTask,
    editingText,
  };

  return (
    <>
      <div className={styles.container}>
        {/* Форма добавления задачи */}
        <TaskInput addTask={addTask} />
        {/* Список задач */}
        <TaskList tasks={tasks} taskActions={taskActions} />
      </div>
      {/* Кнопка выхода */}
      <LogoutButton handleLogout={handleLogout} />
    </>
  );
};

export default TodoList;
