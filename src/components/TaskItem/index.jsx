import { Input, Button, List, Typography } from "antd";
import styles from "./index.module.css";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";

const TaskItem = ({
  item,
  editingTask,
  editingText,
  toggleComplete,
  startEditing,
  updateTask,
  deleteTask,
  setEditingText,
}) => (
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
);

export default TaskItem
