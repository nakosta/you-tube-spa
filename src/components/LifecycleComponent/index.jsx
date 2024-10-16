import React, { useState, useEffect } from "react";


const ShouldComponentUpdate = React.memo(({ count }) => {
  return (
    <div>
      <p>Счетчик: {count}</p>
    </div>
  );
}, (prevProps, nextProps) => {
  return nextProps.count % 2 !== 0; 
});


const LifecycleComponent = () => {
  const [count, setCount] = useState(0);

   // componentDidMount
  useEffect(() => {
    const emailPassword = {
      email: "nakosta666@mail.ru",
      password: "Qwerty12345$",
    };

    async function login(emailPassword) {
      try {
        const response = await fetch(
          "https://todo-redev.herokuapp.com/api/auth/login",
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(emailPassword),
          }
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.log("error: ", error);
      }
    }

    async function getTasks(token) {
      try {
        const response = await fetch(
          "https://todo-redev.herokuapp.com/api/todos",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.log("error: ", error);
      }
    }

    async function main() {
      // авторизоваться
      const { token } = await login(emailPassword);
      // список всех тасок
      const tasks = await getTasks(token);
      console.log(tasks);
    }

    main();
    
  }, []);
  
  // componentDidUpdate
  useEffect(() => {
    console.log(`Счетчик изменен на: ${count}`);
  }, [count]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Компонент будет размонтирован");
    };
  }, []);

  return (
    <div>
      <ShouldComponentUpdate count={count} />
      <button onClick={() => setCount((count) => count + 1)}>Увеличить</button>
    </div>
  );
};

export default LifecycleComponent;
