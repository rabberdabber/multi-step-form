import React from "react";
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
  @media (max-width: 500px) {
    position: fixed;
    width: 97px;
    height: 40px;
    border-radius: 4px;
    bottom: 16px;
  }
`;

export const NextButton = styled(ButtonWrapper)`
  background-color: ${(props) =>
    props?.isDisabled
      ? "var(--app-disabled-button-color)"
      : "var(--primary-marine-blue)"};
  right: 0px;
  color: var(--neutral-white);
  @media (max-width: 500px) {
    right: 16px;
  }
`;

export const PreviousButton = styled(ButtonWrapper)`
  background-color: var(--neutral-white);
  color: var(--neutral-cool-gray);
  left: 0px;
  @media (max-width: 500px) {
    left: 16px;
  }
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

export default Button;
