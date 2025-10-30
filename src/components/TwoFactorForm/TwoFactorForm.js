import React, { useRef, useState, useEffect } from "react";
import "./TwoFactorForm.css";

const TwoFactorForm = () => {
  const inputRefs = useRef([]);
  const [isAllFilled, setIsAllFilled] = useState(false);

  const checkAllFilled = () => {
    const allFilled = inputRefs.current.every(
      (input) => input.value.length === 1
    );
    setIsAllFilled(allFilled);
  };

  const moveFocus = (currentInput, direction) => {
    const currentIndex = inputRefs.current.indexOf(currentInput);
    if (direction === 1 && currentIndex < inputRefs.current.length - 1) {
      inputRefs.current[currentIndex + 1].focus();
    } else if (direction === -1 && currentIndex > 0) {
      inputRefs.current[currentIndex - 1].focus();
    }
  };

  const submitCode = () => {
    const code = inputRefs.current.map((input) => input.value).join("");
  };

  useEffect(() => {
    checkAllFilled();
  }, [inputRefs.current.map((input) => input.value).join("")]);

  return (
    <div className="factor-container">
      <div className="code-container">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="digit-input"
            ref={(el) => (inputRefs.current[index] = el)}
            onInput={(e) => {
              if (e.target.value.length === 1) {
                moveFocus(e.target, 1);
              }
              checkAllFilled();
            }}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && e.target.value.length === 0) {
                moveFocus(e.target, -1);
              }
              checkAllFilled();
            }}
          />
        ))}
      </div>
      {isAllFilled && <button onClick={submitCode}>Подтвердить</button>}{" "}
    </div>
  );
};

export default TwoFactorForm;
