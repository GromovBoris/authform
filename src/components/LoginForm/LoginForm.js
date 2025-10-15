import React, { useState } from "react";
import { handleSubmit } from "../../handlers/auth";
import "./LoginForm.css";

const LoginForm = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const onSubmit = (e) => handleSubmit(e, login, password);

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div className="input-container">
        <img src="/profile.png" alt="profil" className="icon" />
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
      <div className="input-container">
        <img src="/password.png" alt="password" className="icon" />
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
      <button type="submit" className="button">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
