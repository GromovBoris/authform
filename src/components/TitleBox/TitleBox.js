import React, { useState } from "react";
import Logo from "../Logo/Logo";
import LoginTitle from "../LoginTitle/LoginTitle";
import "./TitleBox.css";

const TitleBox = () => {
  return (
    <div className="title-box">
      <Logo />
      <LoginTitle />
    </div>
  );
};

export default TitleBox;
