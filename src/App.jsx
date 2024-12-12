import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import SearchVideo from "./components/SearchVideo";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import ProtectedRoute from "./components/ProtectedRoute";
import Favourites from "./components/Favourites";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<SearchVideo />} />
        <Route path="/favourites" element={<Favourites />} />
      </Route>
    </Routes>
  );
};

export default App;
