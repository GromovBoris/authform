import React, { useRef, useState, useEffect } from "react";
import "./TwoFactorForm.css";

const TwoFactorForm = () => {
  const inputRefs = useRef([]);
  const [isAllFilled, setIsAllFilled] = useState(false);
  const [showGetNewButton, setShowGetNewButton] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(true);
  const correctCode = "131311";

  const checkAllFilled = () => {
    const allFilled = inputRefs.current.every(
      (input) => input.value.length === 1
    );
    setIsAllFilled(allFilled);

    if (allFilled) {
      const code = inputRefs.current.map((input) => input.value).join("");
      if (code === correctCode) {
        setErrorMessage("");
        setIsCodeValid(true);
        inputRefs.current.forEach((input) => {
          input.style.borderColor = "";
        });
      } else {
        setErrorMessage("Invalid code");
        setIsCodeValid(false);
        inputRefs.current.forEach((input) => {
          input.style.borderColor = "red";
        });
      }
    } else {
      inputRefs.current.forEach((input) => {
        input.style.borderColor = "";
      });
      setErrorMessage("");
    }
  };

  const moveFocus = (currentInput, direction) => {
    const currentIndex = inputRefs.current.indexOf(currentInput);
    if (direction === 1 && currentIndex < inputRefs.current.length - 1) {
      inputRefs.current[currentIndex + 1].focus();
    } else if (direction === -1 && currentIndex > 0) {
      inputRefs.current[currentIndex - 1].focus();
    }
  };

  useEffect(() => {
    checkAllFilled();
    const newTimer = setTimeout(() => {
      setShowGetNewButton(true);
      setIsInputDisabled(true);
    }, 10000);

    return () => {
      clearTimeout(newTimer);
      setShowGetNewButton(false);
      setIsInputDisabled(false);
    };
  }, [inputRefs.current.map((input) => input.value).join("")]);

  const handleGetNewClick = () => {
    setShowGetNewButton(false);
    setIsInputDisabled(false);
    setErrorMessage("");
    inputRefs.current.forEach((input) => {
      input.value = "";
      input.style.borderColor = "";
    });
    inputRefs.current[0].focus();

    clearTimeout();
    setTimeout(() => {
      setShowGetNewButton(true);
      setIsInputDisabled(true);
    }, 5000);
  };
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
            disabled={isInputDisabled && isCodeValid}
          />
        ))}
      </div>{" "}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {isAllFilled ? (
        <button
          className={`button active continue ${errorMessage ? "disabled" : ""}`}
          onClick={() => alert("Continue clicked!")}
          disabled={!isAllFilled || !isCodeValid}
        >
          Continue
        </button>
      ) : showGetNewButton ? (
        <button className="button active continue" onClick={handleGetNewClick}>
          Get New
        </button>
      ) : null}
    </div>
  );
};

export default TwoFactorForm;
