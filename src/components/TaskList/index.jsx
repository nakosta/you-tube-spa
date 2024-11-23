import { List } from "antd";
import styles from "./index.module.css";
import TaskItem from "../TaskItem";

const TaskList = ({
  tasks,
  editingTask,
  editingText,
  toggleComplete,
  startEditing,
  updateTask,
  deleteTask,
  setEditingText,
}) => (
  <List
    className={styles.list}
    bordered
    dataSource={tasks}
    renderItem={(item) => (
      <TaskItem
        item={item}
        editingTask={editingTask}
        editingText={editingText}
        toggleComplete={toggleComplete}
        startEditing={startEditing}
        updateTask={updateTask}
        deleteTask={deleteTask}
        setEditingText={setEditingText}
      />
    )}
  />
);

export default TaskList;
