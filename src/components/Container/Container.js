import React, { useState } from "react";
import TitleBox from "../TitleBox/TitleBox";
import LoginForm from "../LoginForm/LoginForm";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <TitleBox />
      <LoginForm />
    </div>
  );
};

export default Container;
