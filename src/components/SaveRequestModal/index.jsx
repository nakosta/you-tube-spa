import React, { useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Button,
  Slider,
  InputNumber,
  Typography,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSliderValue } from "../../redux/slices/sliderValueSlice";
import {
  saveRequest,
  clearEditRequest,
} from "../../redux/slices/favouritesSlice";
import { setIsModalOpen } from "../../redux/slices/isModalOpenSlice";
import styles from "./index.module.css";

const { Text } = Typography;
const { Option } = Select;

const SaveRequestModal = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const request = useSelector((state) => state.request.value);
  const isModalOpen = useSelector((state) => state.isModalOpen.value);
  const sliderValue = useSelector((state) => state.sliderValue.value);
  const editRequest = useSelector((state) => state.favourites.editRequest);

  // Инициализация формы
  useEffect(() => {
    if (editRequest) {
      dispatch(setSliderValue(editRequest.maxResults));
      form.setFieldsValue({
        query: editRequest.query,
        title: editRequest.title,
        order: editRequest.order,
        maxResults: sliderValue,
      });
    }
  }, [editRequest, form]);

  const handleSaveRequest = (values) => {
    const newFavourite = {
      id: editRequest ? editRequest.id : Date.now(),
      query: editRequest ? values.query : request,
      title: values.title,
      order: values.order || null,
      maxResults: values.maxResults || 12,
    };

    dispatch(saveRequest(newFavourite));
    dispatch(clearEditRequest());
    form.resetFields();
    dispatch(setIsModalOpen(false));
  };

  return (
    <Modal
      title={
        <div className={styles.modalTitle}>
          {editRequest ? "Изменить запрос" : "Сохранить запрос"}
        </div>
      }
      open={isModalOpen}
      onCancel={() => {
        dispatch(setIsModalOpen(false));
        dispatch(clearEditRequest());
      }}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSaveRequest}
        initialValues={{ maxResults: sliderValue }}
      >
        {editRequest ? (
          <Form.Item
            label="Запрос"
            name="query"
            rules={[{ required: true, message: "Введите запрос" }]}
          >
            <Input placeholder="Укажите запрос" />
          </Form.Item>
        ) : (
          <Form.Item label="Запрос" name="query">
            <Text className={styles.queryText}>{request}</Text>
          </Form.Item>
        )}

        <Form.Item
          label="Название"
          name="title"
          rules={[{ required: true, message: "Введите название" }]}
        >
          <Input placeholder="Укажите название" />
        </Form.Item>

        <Form.Item label="Сортировать по" name="order">
          <Select placeholder="Без сортировки" allowClear>
            <Option value="date">Дата</Option>
            <Option value="rating">Рейтинг</Option>
            <Option value="viewCount">Просмотры</Option>
            <Option value="relevance">Релевантность</Option>
            <Option value="title">Название</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Максимальное количество" name="maxResults">
          <div className={styles.maxResults}>
            <Slider
              className={styles.slider}
              min={0}
              max={50}
              value={sliderValue}
              onChange={(value) => {
                dispatch(setSliderValue(value));
                form.setFieldsValue({ maxResults: value });
              }}
            />
            <InputNumber
              className={styles.inputNumber}
              min={0}
              max={50}
              value={sliderValue}
              onChange={(value) => {
                dispatch(setSliderValue(value));
                form.setFieldsValue({ maxResults: value });
              }}
            />
          </div>
        </Form.Item>

        <Form.Item>
          <div className={styles.buttons}>
            <Button
              onClick={() => {
                dispatch(setIsModalOpen(false));
                dispatch(clearEditRequest());
              }}
            >
              {editRequest ? "Не изменять" : "Не сохранять"}
            </Button>
            <Button type="primary" htmlType="submit">
              {editRequest ? "Изменить" : "Сохранить"}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SaveRequestModal;
