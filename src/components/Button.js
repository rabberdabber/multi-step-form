import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props?.isDisabled
      ? "var(--app-disabled-button-color)"
      : "var(--primary-marine-blue)"};
  border-radius: 8px;
  width: 123px;
  height: 48px;
  align-self: flex-end;
  margin-top: 72px;
`;

const TextWrapper = styled.p`
  font-family: var(--app-font-family);
  font-size: var(--app-font-size);
  color: var(--neutral-white);
`;

const Button = ({ children, ...buttonProps }) => {
  console.log(`buttonProps is ${JSON.stringify(buttonProps)}`);
  return (
    <ButtonWrapper {...buttonProps}>
      <TextWrapper>{children}</TextWrapper>
    </ButtonWrapper>
  );
};

export default Button;
