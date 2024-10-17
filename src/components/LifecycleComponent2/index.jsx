import React from "react";

class LifecycleComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
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
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Счетчик изменен на: ${this.state.count}`);
  }

  componentWillUnmount() {
    console.log("Компонент будет размонтирован");
  }

  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Счетчик: {this.state.count}</p>
        <button onClick={this.handleClick}>Увеличить</button>
      </div>
    );
  }
}

export default LifecycleComponent2;
