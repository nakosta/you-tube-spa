import { Input, Button, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setNewTask } from "../../redux/actions/newTask";
import styles from "./index.module.css";

const TaskInput = ({ addTask }) => {
  const dispatch = useDispatch();
  const newTask = useSelector((state) => state.newTask.newTask);

  const handleInputChange = (e) => {
    dispatch(setNewTask(e.target.value));
  };

  const handleAddTask = () => {
    addTask(newTask);
    dispatch(setNewTask(""));
  };

  return (
    <Space.Compact className={styles.space}>
      <Input
        placeholder="What is the task today?"
        value={newTask}
        onChange={handleInputChange}
        onPressEnter={handleAddTask}
      />
      <Button type="primary" onClick={handleAddTask}>
        Add task
      </Button>
    </Space.Compact>
  );
};

export default TaskInput;
