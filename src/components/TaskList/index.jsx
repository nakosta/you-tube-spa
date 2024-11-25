import { List } from "antd";
import styles from "./index.module.css";
import TaskItem from "../TaskItem";

const TaskList = ({ tasks, taskActions }) => (
  <List
    className={styles.list}
    bordered
    dataSource={tasks}
    renderItem={(item) => <TaskItem item={item} taskActions={taskActions} />}
  />
);

export default TaskList;
