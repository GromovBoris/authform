import React, { useState } from "react";
import Logo from "../Logo/Logo";
import LoginTitle from "../LoginTitle/LoginTitle";
import ArrowIcon from "../../icons/Vector.png";
import "./TitleBox.css";

const TitleBox = ({ isAuthenticated, onBack }) => {
  return (
    <div className="title-box__button-container">
      {isAuthenticated && (
        <button onClick={onBack} className="title-box__button-back">
          <img src={ArrowIcon} alt="Back" />
        </button>
      )}
      <Logo />
      <LoginTitle isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default TitleBox;
