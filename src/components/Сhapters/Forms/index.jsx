import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Typography,
  Image,
  Input,
  Radio,
  Checkbox,
  DatePicker,
  Button,
} from "antd";
import styles from "../index.module.css";

const { Title } = Typography;

const Forms = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [showModal, setShowModal] = useState(false); // состояние для модального окна
  const [formData, setFormData] = useState(null); // состояние для хранения данных формы

  const onSubmit = (data) => {
    setFormData(data); // сохранить данные формы
    setShowModal(true); // показать модальное окно
  };

  return (
    <>
      <Image
        className={styles.iconTop}
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4c4.svg"
      />
      <Title>
        Формы и их обработка в React.
        <br />
        react-hook-form VS formik
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Введите корректный email",
              },
            }}
            render={({ field }) => <Input {...field} placeholder="Email" />}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label>Текст:</label>
          <Controller
            name="text"
            control={control}
            rules={{ required: "Поле обязательно для заполнения" }}
            render={({ field }) => <Input {...field} placeholder="Текст" />}
          />
          <p>{errors.text?.message}</p>
        </div>

        <div>
          <label>Число:</label>
          <Controller
            name="number"
            control={control}
            rules={{ required: "Поле обязательно для заполнения" }}
            render={({ field }) => (
              <Input type="number" {...field} placeholder="Число" />
            )}
          />
          <p>{errors.number?.message}</p>
        </div>

        <div>
          <label>Пол:</label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Выберите пол" }}
            render={({ field }) => (
              <Radio.Group {...field}>
                <Radio value="male">Мужской</Radio>
                <Radio value="female">Женский</Radio>
              </Radio.Group>
            )}
          />
          <p>{errors.gender?.message}</p>
        </div>

        <div>
          <label>Чекбокс:</label>
          <Controller
            name="checkbox"
            control={control}
            rules={{ required: "Подтвердите выбор" }}
            render={({ field }) => (
              <Checkbox
                {...field}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              >
                Я согласен
              </Checkbox>
            )}
          />
          <p>{errors.checkbox?.message}</p>
        </div>

        <div>
          <label>Дата:</label>
          <Controller
            name="date"
            control={control}
            rules={{ required: "Выберите дату" }}
            render={({ field }) => <DatePicker {...field} />}
          />
          <p>{errors.date?.message}</p>
        </div>

        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </form>

      {/* Модальное окно */}
      {showModal && (
        <div className={styles.modalStyles}>
          <h3>Успешно зарегистрировано</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <button onClick={() => setShowModal(false)}>Закрыть</button>
        </div>
      )}
    </>
  );
};

export default Forms;
