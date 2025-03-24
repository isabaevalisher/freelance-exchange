import React from "react";
import "../../Auth.css";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Регистрация</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Введите ваше имя"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Электронная почта</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Введите вашу почту"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Введите ваш пароль"
            />
          </div>
          <button type="submit" className="auth-button">
            Зарегистрироваться
          </button>
        </form>
        <p className="auth-switch">
          Уже есть аккаунт?{" "}
          <a href="/login" className="auth-link">
            Войти
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
