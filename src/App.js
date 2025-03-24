import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar/Navbar"; // Импорт Navbar
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import FindOrder from "./components/pages/FindOrder/FindOrder";
import CreateOrder from "./components/pages/CreateOrder/CreateOrder";
import "./App.css"; // Подключение стилей
import './components/Auth.css';


function App() {
  return (
    <Router>
      <Navbar /> {/* Используем компонент Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-order" element={<FindOrder />} />
        <Route path="/create-order" element={<CreateOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
