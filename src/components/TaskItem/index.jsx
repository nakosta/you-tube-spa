import { useSelector, useDispatch } from "react-redux";
import { Input, Button, List, Typography } from "antd";
import styles from "./index.module.css";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  updateTaskById,
  deleteTaskById,
  toggleTask,
} from "../../redux/thunks/tasksThunks";
import {
  setEditingText,
  clearEditingText,
} from "../../redux/actions/editingText";
import {
  setEditingTask,
  clearEditingTask,
} from "../../redux/actions/editingTask";

const TaskItem = ({ item, logAction }) => {
  const dispatch = useDispatch();
  const editingText = useSelector((state) => state.editingText);
  const editingTask = useSelector((state) => state.editingTask);

  // Переключение состояния "выполнено"
  const toggleComplete = (id) => {
    dispatch(toggleTask(id));
    logAction("Изменен статус задачи", { id });
  };

  // Начало редактирования
  const startEditing = (id) => {
    dispatch(setEditingTask(id));
    dispatch(setEditingText(item.title));
    logAction("Начато редактирование", { id, title: item.title });
  };

  // Сохранение изменений задачи
  const updateTask = (id) => {
    dispatch(updateTaskById(id, editingText));
    dispatch(clearEditingTask());
    dispatch(clearEditingText());
    logAction("Обновлена задача", { id, title: editingText });
  };

  // Удаление задачи
  const deleteTask = (id) => {
    dispatch(deleteTaskById(id));
    logAction("Удалена задача", { id });
  };

  return (
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
          onChange={(e) => dispatch(setEditingText(e.target.value))}
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
  );
};

export default TaskItem;
