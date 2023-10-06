import React, { createContext, useState } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 123px;
  height: 48px;
  bottom: 32px;
  border-width: 0px;
`;

export const NextButton = styled(ButtonWrapper)`
  background-color: ${(props) =>
    props?.isDisabled
      ? "var(--app-disabled-button-color)"
      : "var(--primary-marine-blue)"};
  right: 0px;
  color: var(--neutral-white);
`;

export const PreviousButton = styled(ButtonWrapper)`
  background-color: var(--neutral-white);
  color: var(--neutral-cool-gray);
  left: 0px;
`;

const TextWrapper = styled.p`
  font-family: var(--app-font-family);
  font-size: var(--app-font-size);
  color: inherit;
`;

export const Button = ({ type = "next", children, ...buttonProps }) => {
  const ButtonType = type == "next" ? NextButton : PreviousButton;
  return (
    <ButtonType {...buttonProps}>
      <TextWrapper>{children}</TextWrapper>
    </ButtonType>
  );
};

export const buttonContext = createContext({
  page: 1,
  isDisabled: false,
  buttonPressed: false,
  setIsDisabled: () => {},
  setButtonPressed: () => {},
});

export const ButtonProvider = ({ children }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [page, setPage] = useState(1);

  const contextValue = {
    page,
    setPage,
    isDisabled,
    buttonPressed,
    setIsDisabled,
    setButtonPressed,
  };

  return (
    <buttonContext.Provider value={contextValue}>
      {children}
    </buttonContext.Provider>
  );
};

export default Button;
