import React from "react";
import "./LoginTitle.css";
import { Typography } from "antd";
const { Title, Text } = Typography;

const LoginTitle = ({ isAuthenticated }) => {
  return (
    <div className="login-title__container">
      <Title level={3} className="login-title__text">
        {isAuthenticated
          ? "Two-Factor Authentication"
          : "Sign in to your account to continue"}
      </Title>
      {isAuthenticated && (
        <Text type="secondary" className="login-title__secondary">
          Enter the 6-digit code from the Google Authenticator app
        </Text>
      )}
    </div>
  );
};

export default LoginTitle;
