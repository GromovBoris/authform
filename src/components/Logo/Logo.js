import React, { useState } from "react";
import "./Logo.css";
import { Typography } from "antd";

const Logo = () => {
  return (
    <div className="logo">
      <img src="/Symbol.png" alt="symbol" />
      <img src="/Company.png" alt="company" />
    </div>
  );
};

export default Logo;
