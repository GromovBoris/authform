import React from "react";
import "./LoginTitle.css";
import { Typography } from "antd";
const { Title } = Typography;

const LoginTitle = () => {
  return (
    <div className="login-title">
      <Title level={3} className="login-title-text">
        Sign in to your account to continue
      </Title>
    </div>
  );
};

export default LoginTitle;
