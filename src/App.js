import React, { useState } from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import styles from "./App.css";
import { Typography } from "antd";
const { Text, Title, Paragraph } = Typography;

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container">
        <div className="image-container">
          <img src="/Symbol.png" alt="symbol" />
          <img src="/Company.png" alt="company" />
        </div>
        <Title level={3} style={{ fontSize: "1.5rem" }}>
          Sign in to your account to continue
        </Title>
      </div>
      <AuthForm />
    </div>
  );
};

export default App;
