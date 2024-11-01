import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showModal, setShowModal] = useState(false); // состояние для модального окна
  const [formData, setFormData] = useState(null); // состояние для хранения данных формы

  const onSubmit = (data) => {
    setFormData(data); // сохранить данные формы
    setShowModal(true); // показать модальное окно
  };

  const password = watch("password");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "Введите имя",
              maxLength: {
                value: 20,
                message: "Максимум 20 символов",
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Введите email",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Введите корректный email",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Введите пароль",
              minLength: {
                value: 6,
                message: "Минимум 6 символов",
              },
              validate: {
                hasUpperCase: (value) =>
                  /[A-Z]/.test(value) ||
                  "Должна быть хотя бы одна заглавная буква",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Подтверждение пароля</label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "Подтвердите пароль",
              validate: (value) => value === password || "Пароли не совпадают",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <div>
          <label htmlFor="date">Дата рождения</label>
          <input
            id="date"
            type="date"
            {...register("date", {
              required: "Выберите дату рождения",
            })}
          />
          {errors.date && <p>{errors.date.message}</p>}
        </div>

        <div>
        <label>Пол</label>
        <div>
          <label>
            <input
              type="radio"
              {...register("gender", { required: "Выберите пол" })}
              value="male"
            />
            Мужчина
          </label>
          <label>
            <input
              type="radio"
              {...register("gender", { required: "Выберите пол" })}
              value="female"
            />
            Женщина
          </label>
        </div>
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>

        <div>
          <label htmlFor="telephone">Телефон</label>
          <input
            id="telephone"
            type="tel"
            {...register("telephone", {
              required: "Введите телефон",
              maxLength: {
                value: 12,
                message: "Максимум 12 цифр",
              },
            })}
          />
          {errors.telephone && <p>{errors.telephone.message}</p>}
        </div>

        <button type="submit">Зарегистрироваться</button>
      </form>

      {/* Модальное окно */}
      {showModal && (
        <div style={modalStyles}>
          <h3>Успешно зарегистрировано</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <button onClick={() => setShowModal(false)}>Закрыть</button>
        </div>
      )}

    </>
  );
};

// Простой стиль для модального окна
const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
};

export default RegistrationForm;
