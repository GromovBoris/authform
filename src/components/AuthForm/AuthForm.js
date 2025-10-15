import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import TwoFactor from "../TwoFactorForm/TwoFactorForm";

const AuthForm = () => {
  const [isTwoFactor, setIsTwoFactor] = useState(false);

  const handleLoginSuccess = () => {
    setIsTwoFactor(true);
  };

  return (
    <div className="">
      {/* <h2 className="text-xl font-semibold mb-4">
        {isTwoFactor ? "2FA Authentication" : "Login"}
      </h2>
      {!isTwoFactor ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <TwoFactor />
      )}
      <div className="mt-4 text-center">
        <button
          onClick={() => setIsTwoFactor(!isTwoFactor)}
          className="text-blue-500 hover:underline"
        >
          {isTwoFactor ? "Back to Login" : "Use 2FA"}
        </button>
      </div> */}
    </div>
  );
};

export default AuthForm;
