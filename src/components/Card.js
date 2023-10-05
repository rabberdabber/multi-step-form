import React, { useState, useCallback } from "react";
import styled from "styled-components";
import TextInput, { StepOneInputWrapper } from "./TextInput";
import Button from "./Button";

const CardContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  left: 390px;
  top: 56px;
  right: 100px;
  height: calc(100% - 56px);
`;

const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-items: baseline;
  width: 450px;
  height: 68px;
`;

const CardHeaderTitle = styled.p`
  margin: 0;
  font-size: 26px;
  color: var(--primary-marine-blue);
  font-weight: bold;
`;

const CardHeaderDescription = styled.p`
  margin: 0;
  margin-top: auto;
  font-size: 16px;
  color: var(--neutral-cool-gray);
  width: max-content;
`;

export const CardContent = ({ title, description }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const isNameEmpty = name === "";
  const isEmailEmpty = email === "";
  const isPhoneEmpty = phone === "";
  const isButtonDisabled = [isNameEmpty, isEmailEmpty, isPhoneEmpty].includes(
    true
  );
  const [buttonPressed, setButtonPressed] = useState(false);
  const setNameUpdated = useCallback((name) => {
    setButtonPressed(false);
    setName(name);
  });
  const setEmailUpdated = useCallback((name) => {
    setButtonPressed(false);
    setEmail(name);
  });
  const setPhoneUpdated = useCallback((name) => {
    setButtonPressed(false);
    setPhone(name);
  });

  return (
    <CardContentWrapper>
      <CardHeaderWrapper>
        <CardHeaderTitle>{title}</CardHeaderTitle>
        <CardHeaderDescription>{description}</CardHeaderDescription>
      </CardHeaderWrapper>
      <StepOneInputWrapper>
        <TextInput
          label="Name"
          input={name}
          setInput={setNameUpdated}
          warning={buttonPressed && isNameEmpty}
        />
        <TextInput
          label="Email Address"
          input={email}
          setInput={setEmailUpdated}
          warning={buttonPressed && isEmailEmpty}
        />
        <TextInput
          label="Phone Number"
          input={phone}
          setInput={setPhoneUpdated}
          warning={buttonPressed && isPhoneEmpty}
        />
      </StepOneInputWrapper>
      <Button
        isDisabled={isButtonDisabled}
        onClick={() => setButtonPressed(true)}
      >
        Next Step
      </Button>
    </CardContentWrapper>
  );
};

const Card = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  margin: auto;
  background-color: var(--neutral-white);
  height: 600px;
  width: 940px;
  border-radius: 10px;
  @media (max-width: 500px) {
    top: 99px;
    left: 16px;
    right: 16px;
    margin: revert;
    margin-right: auto;
    margin-left: auto;
    z-index: 10;
    height: 376px;
    width: 343px;
  }
`;

export default Card;
