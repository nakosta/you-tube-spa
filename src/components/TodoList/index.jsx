import React, { useState, useEffect } from "react";
import { Input, Button, List, Typography, Space } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { getTasks, createTask, editTask, deleteFetch, isCompleted } from "../../api";

const TodoList = ({ logAction }) => {
  const token = localStorage.getItem("authToken");
  const [tasks, setTasks] = useState([]); // Список задач
  const [newTask, setNewTask] = useState(""); // Для добавления новой задачи
  const [editingTask, setEditingTask] = useState(null); // Текущая редактируемая задача
  const [editingText, setEditingText] = useState(""); // Текст редактируемой задачи
  const navigate = useNavigate();

  useEffect(() => {
    const allTasks = async () => {
      try {
        const data = await getTasks(token); // Получаем задачи с сервера
        setTasks(data); // Устанавливаем задачи в состояние
      } catch (error) {
        console.error("Error getTasks:", error);
      }
    };
    allTasks();
  }, [token]);

  // Добавление новой задачи
  const addTask = async () => {
    if (newTask.trim()) {
      try {
        const { id, title, isCompleted } = await createTask(newTask, token);
        const task = { id, title, isCompleted };
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
      const task = await isCompleted(id, token);
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
      const task = await editTask(editingText, id, token);
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
      const task = await deleteFetch(id, token);
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

  return (
    <>
      <div className={styles.container}>
        {/* Добавление новой задачи */}
        <Space.Compact className={styles.space}>
          <Input
            placeholder="What is the task today?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onPressEnter={addTask}
          />
          <Button type="primary" onClick={addTask}>
            Add task
          </Button>
        </Space.Compact>

        {/* Список задач */}
        <List
          className={styles.list}
          bordered
          dataSource={tasks}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                editingTask === item.id ? (
                  <Button
                    className={styles.buttonUpdate}
                    type="primary"
                    key="update"
                    onClick={(e) => {
                      e.stopPropagation();
                      updateTask(item.id);
                    }}
                  >
                    Update
                  </Button>
                ) : (
                  <FormOutlined
                    key="edit"
                    onClick={(e) => {
                      e.stopPropagation();
                      startEditing(item.id);
                    }}
                  />
                ),
                <DeleteOutlined
                  key="delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(item.id);
                  }}
                />,
              ]}
            >
              {editingTask === item.id ? (
                <Input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onPressEnter={() => updateTask(item.id)}
                />
              ) : (
                <Typography.Text
                  onClick={() => toggleComplete(item.id)}
                  className={`${styles.text} ${
                    item.isCompleted ? styles.textCompleted : ""
                  }`}
                >
                  {item.title}
                </Typography.Text>
              )}
            </List.Item>
          )}
        />
      </div>
      <div className={styles.buttonLogout}>
        <Button type="primary" danger onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default TodoList;
