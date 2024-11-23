import { Input, Button, Space } from "antd";
import styles from "./index.module.css";

const TaskInput = ({ newTask, setNewTask, addTask }) => (
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
);

export default TaskInput
