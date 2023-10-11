import React, { useCallback, useContext, useEffect } from "react";
import styled from "styled-components";
import userContext from "../../contexts/user/context";
import buttonContext from "../../contexts/button/context";
import TextInput from "../TextInput";

export const StepOneInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: var(--card-content-width);
  height: 264px;
  gap: 24px;
  @media (max-width: 500px) {
    gap: 16px;
  }
`;

const StepOneContent = () => {
  const { name, email, phone, setName, setEmail, setPhone } =
    useContext(userContext);
  const isNameEmpty = name === "";
  const isEmailEmpty = email === "";
  const isPhoneEmpty = phone === "";
  const { buttonPressed, setIsDisabled, setButtonPressed } =
    useContext(buttonContext);
  const setNameUpdated = useCallback((name) => {
    setButtonPressed(false);
    setName(name);
  }, []);
  const setEmailUpdated = useCallback((name) => {
    setButtonPressed(false);
    setEmail(name);
  }, []);
  const setPhoneUpdated = useCallback((name) => {
    setButtonPressed(false);
    setPhone(name);
  }, []);

  useEffect(() => {
    setIsDisabled([isNameEmpty, isEmailEmpty, isPhoneEmpty].includes(true));
  }, [isNameEmpty, isEmailEmpty, isPhoneEmpty]);

  return (
    <StepOneInputWrapper>
      <TextInput
        label="Name"
        input={name}
        setInput={setNameUpdated}
        warning={buttonPressed && isNameEmpty}
        placeholder="e.g. Stephen King"
      />
      <TextInput
        label="Email Address"
        input={email}
        setInput={setEmailUpdated}
        warning={buttonPressed && isEmailEmpty}
        placeholder="e.g. stephenking@lorem.com"
      />
      <TextInput
        label="Phone Number"
        input={phone}
        setInput={setPhoneUpdated}
        warning={buttonPressed && isPhoneEmpty}
        placeholder="e.g. +1 234 567 890"
      />
    </StepOneInputWrapper>
  );
};

export default StepOneContent;
