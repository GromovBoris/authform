import React from "react";
import "./LoginTitle.css";
import { Typography } from "antd";
const { Title, Text } = Typography;

const LoginTitle = ({ isAuthenticated }) => {
  return (
    <div className="login-title">
      <Title level={3} className="login-title-text">
        {isAuthenticated
          ? "Two-Factor Authentication"
          : "Sign in to your account to continue"}
      </Title>
      {isAuthenticated && (
        <Text type="secondary" className="secondary">
          Enter the 6-digit code from the Google Authenticator app
        </Text>
      )}
    </div>
  );
};

export default LoginTitle;
