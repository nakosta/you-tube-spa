import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import SearchVideo from "./pages/SearchVideo";
import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import ProtectedRoute from "./components/ProtectedRoute";
import Favourites from "./pages/Favourites";

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
        <Route
          index
          element={
            <ProtectedRoute>
              <SearchVideo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favourites"
          element={
            <ProtectedRoute>
              <Favourites />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
