import React, { useState } from "react";
import buttonContext from "./context";

const ButtonProvider = ({ children }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [page, setPage] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const contextValue = {
    page,
    setPage,
    isDisabled,
    confirmed,
    buttonPressed,
    setIsDisabled,
    setButtonPressed,
    setConfirmed,
  };

  return (
    <buttonContext.Provider value={contextValue}>
      {children}
    </buttonContext.Provider>
  );
};

export default ButtonProvider;
