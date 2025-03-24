import React from "react";
import "../../Auth.css";


const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card shadow">
        <h2 className="auth-title">Вход</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Введите ваш email"
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
            Войти
          </button>
        </form>
        <p className="auth-switch">
          Нет аккаунта? <a href="/register" className="auth-link">Зарегистрироваться</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
