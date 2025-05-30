import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import FindOrder from "./components/pages/AllOrder/AllOrder";
import Orders from "./components/pages/Orders/Orders";
import Profile from "./components/pages/Profile/Profile";
import ProfilePage from "./components/pages/Profile/ProfilePage";
import Login from "./components/pages/Login/Login";
import Registration from "./components/pages/Registration/Registration";
import CartPage from "./components/pages/CartPage/CartPage";
import Notifications from "./components/pages/Notifications/Notifications";
import AuthRequired from "./components/pages/AuthRequired/AuthRequired";
import { AuthProvider } from "./context/AuthContext";
import Order from "./components/pages/Orders/Order";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllOrder" element={<FindOrder />} />
          <Route path="/profile/orders" element={<Orders />} />
          <Route path="/profile/orders/:id" element={<Order />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<ProfilePage />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/auth-required" element={<AuthRequired />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
