import React, { useState } from "react";
import TitleBox from "../TitleBox/TitleBox";
import LoginForm from "../LoginForm/LoginForm";
import TwoFactorForm from "../TwoFactorForm/TwoFactorForm";
import "./Container.css";

const Container = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleBack = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="container">
      <TitleBox isAuthenticated={isAuthenticated} onBack={handleBack} />
      {!isAuthenticated ? (
        <LoginForm onSuccess={handleSuccess} />
      ) : (
        <TwoFactorForm />
      )}{" "}
    </div>
  );
};

export default Container;
