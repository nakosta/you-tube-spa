import React, { useState } from "react";
import { Input, Button, List, Typography, Space } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./index.module.css";

const TodoList = ({ logAction }) => {
  const [tasks, setTasks] = useState([]); // Список задач
  const [newTask, setNewTask] = useState(""); // Для добавления новой задачи
  const [editingTask, setEditingTask] = useState(null); // Текущая редактируемая задача
  const [editingText, setEditingText] = useState(""); // Текст редактируемой задачи

  // Добавление новой задачи
  const addTask = () => {
    if (newTask.trim()) {
      const task = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, task]);
      logAction("Добавлена задача", task);
      setNewTask("");
    }
  };

  // Переключение состояния "выполнено"
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    const task = updatedTasks.find((task) => task.id === id);
    logAction("Изменен статус задачи", task);
  };

  // Начало редактирования
  const startEditing = (id) => {
    setEditingTask(id);
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setEditingText(task.text);
      logAction("Начато редактирование", task);
    }
  };

  // Сохранение изменений задачи
  const updateTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: editingText } : task
    );
    setTasks(updatedTasks);
    const task = {
      ...tasks.find((task) => task.id === id),
      text: editingText,
    };
    logAction("Обновлена задача", task);
    setEditingTask(null);
    setEditingText("");
  };

  // Удаление задачи
  const deleteTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    setTasks(tasks.filter((task) => task.id !== id));
    logAction("Удалена задача", task);
  };

  return (
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
                    e.stopPropagation(); // Предотвращаем переключение completed
                    updateTask(item.id);
                  }}
                >
                  Update
                </Button>
              ) : (
                <FormOutlined
                  key="edit"
                  onClick={(e) => {
                    e.stopPropagation(); // Предотвращаем переключение completed
                    startEditing(item.id);
                  }}
                />
              ),
              <DeleteOutlined
                key="delete"
                onClick={(e) => {
                  e.stopPropagation(); // Предотвращаем переключение completed
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
                  item.completed ? styles.textCompleted : ""
                }`}
              >
                {item.text}
              </Typography.Text>
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
