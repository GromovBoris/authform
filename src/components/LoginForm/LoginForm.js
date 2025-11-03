import React, { useState, useEffect, useCallback } from "react";
import { handleSubmit } from "../../handlers/auth";
import "./LoginForm.css";

const LoginForm = ({ onSuccess }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(true);

  const validCredentials = {
    login: "test@test.com",
    password: "test",
  };

  const isValidInput = useCallback(() => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return emailPattern.test(login) && password.length >= 3;
  }, [login, password]);

  useEffect(() => {
    setIsButtonActive(isValidInput());
  }, [isValidInput]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      login === validCredentials.login &&
      password === validCredentials.password
    ) {
      onSuccess();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div className="login-form__input-container">
        <img src="/profile.png" alt="profil" className="login-form__icon" />
        <input
          type="text"
          id="login"
          placeholder="Email"
          value={login}
          autoComplete="off"
          onChange={(e) => setLogin(e.target.value)}
          required
        />
      </div>
      <div className="login-form__input-container">
        <img src="/password.png" alt="password" className="login-form__icon" />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className={`login-form__button ${
          isButtonActive ? "login-form__button--active" : ""
        }`}
        disabled={!isButtonActive}
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
