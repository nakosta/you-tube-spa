import { Input, Button, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { createNewTask } from "../../redux/slices/tasksSlice";
import { setNewTask, clearNewTask } from "../../redux/slices/newTaskSlice";
import styles from "./index.module.css";

const TaskInput = ({ logAction }) => {
  const dispatch = useDispatch();
  const newTask = useSelector((state) => state.newTask.value);

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(createNewTask(newTask));
      logAction("Добавлена задача", { title: newTask });
    }
    dispatch(clearNewTask());
  };

  return (
    <Space.Compact className={styles.space}>
      <Input
        placeholder="What is the task today?"
        value={newTask}
        onChange={(e) => {
          dispatch(setNewTask(e.target.value));
        }}
        onPressEnter={handleAddTask}
      />
      <Button type="primary" onClick={handleAddTask}>
        Add task
      </Button>
    </Space.Compact>
  );
};

export default TaskInput;
