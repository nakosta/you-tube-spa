import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TodoList from "./components/TodoList";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import withLogger from "./components/withLogger";
import ProtectedRoute from "./components/ProtectedRoute";

const LoggedTodoList = withLogger(TodoList);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/todolist" />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/todolist"
        element={
          <ProtectedRoute>
            <LoggedTodoList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
