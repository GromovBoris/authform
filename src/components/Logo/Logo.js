import React, { useState } from "react";
import "./Logo.css";
import { Typography } from "antd";

const Logo = () => {
  return (
    <div className="logo__container">
      <img src="/Symbol.png" alt="symbol" className="logo__symbol" />
      <img src="/Company.png" alt="company" className="logo__company" />
    </div>
  );
};

export default Logo;
