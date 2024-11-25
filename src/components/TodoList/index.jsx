import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import LogoutButton from "../LogoutButton";

import {
  getTasks,
  createTask,
  editTask,
  deleteFetch,
  isCompleted,
} from "../../apiAxios";

const TodoList = ({ logAction }) => {
  const [tasks, setTasks] = useState([]); // Список задач
  const [newTask, setNewTask] = useState(""); // Для добавления новой задачи
  const [editingTask, setEditingTask] = useState(null); // Текущая редактируемая задача
  const [editingText, setEditingText] = useState(""); // Текст редактируемой задачи
  const navigate = useNavigate();

  useEffect(() => {
    const allTasks = async () => {
      try {
        const data = await getTasks(); // Получаем задачи с сервера
        setTasks(data); // Устанавливаем задачи в состояние
      } catch (error) {
        console.error("Error getTasks:", error);
      }
    };
    allTasks();
  }, []);

  // Добавление новой задачи
  const addTask = async () => {
    if (newTask.trim()) {
      try {
        const { user_id, ...task } = await createTask(newTask);
        setTasks([...tasks, task]);
        logAction("Добавлена задача", task);
        setNewTask("");
      } catch (error) {
        console.error("Error creating task:", error);
      }
    }
  };

  // Переключение состояния "выполнено"
  const toggleComplete = async (id) => {
    try {
      const task = await isCompleted(id);
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      );
      setTasks(updatedTasks);
      logAction("Изменен статус задачи", task);
    } catch (error) {
      console.error("Error completeding task:", error);
    }
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
  const updateTask = async (id) => {
    try {
      const task = await editTask(editingText, id);
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, title: editingText } : task
      );
      setTasks(updatedTasks);
      logAction("Обновлена задача", task);
      setEditingTask(null);
      setEditingText("");
    } catch (error) {
      console.error("Error updateding task:", error);
    }
  };

  // Удаление задачи
  const deleteTask = async (id) => {
    try {
      const task = await deleteFetch(id);
      setTasks(tasks.filter((task) => task.id !== id));
      logAction("Удалена задача", task);
    } catch (error) {
      console.error("Error deleteing task:", error);
    }
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
        <TaskInput
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
        {/* Список задач */}
        <TaskList tasks={tasks} taskActions={taskActions} />
      </div>
      {/* Кнопка выхода */}
      <LogoutButton handleLogout={handleLogout} />
    </>
  );
};

export default TodoList;
