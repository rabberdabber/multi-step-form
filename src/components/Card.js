import React, { useState, useCallback, useContext } from "react";
import styled from "styled-components";
import TextInput, { StepOneInputWrapper } from "./TextInput";
import Button, { buttonContext, ButtonProvider } from "./Button";
import PlanChoice from "./PlanChoice";
import ToggleSwitch from "./ToggleSwitch";
import formInfos from "../formInfos.json";

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

const StepFactory = ({ children }) => {
  const { page, setPage, isDisabled, setButtonPressed } =
    useContext(buttonContext);

  const onClickNext = useCallback(() => {
    setButtonPressed(true);
    if (!isDisabled) {
      setPage((page) => (page % 4) + 1);
    }
  }, [isDisabled]);

  const onClickPrev = useCallback(() => {
    setButtonPressed(true);
    if (!isDisabled) {
      setPage((page) => (page % 4) - 1);
    }
  }, [isDisabled]);
  return (
    <>
      {children}
      {page !== 1 && (
        <Button type="previous" onClick={onClickPrev}>
          Go Back
        </Button>
      )}
      <Button type="next" isDisabled={isDisabled} onClick={onClickNext}>
        Next Step
      </Button>
    </>
  );
};

const StepOneContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const isNameEmpty = name === "";
  const isEmailEmpty = email === "";
  const isPhoneEmpty = phone === "";
  const { buttonPressed, setIsDisabled, setButtonPressed } =
    useContext(buttonContext);
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

  if ([isNameEmpty, isEmailEmpty, isPhoneEmpty].includes(true)) {
    setIsDisabled(true);
  } else {
    setIsDisabled(false);
  }

  return (
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
  );
};

const StepTwoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  height: 240px;
`;

const PlanChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  justify-content: center;
  width: 450px;
  height: 160px;
`;

const DurationChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px;
  width: 450px;
  height: 48px;
  gap: 24px;
`;

const StepTwoContent = () => {
  return (
    <StepTwoContentWrapper>
      <PlanChoiceWrapper>
        <PlanChoice type="Arcade" price={9} />
        <PlanChoice type="Advanced" price={12} />
        <PlanChoice type="Pro" price={15} />
      </PlanChoiceWrapper>
      <DurationChoiceWrapper>
        <ToggleSwitch leftText="Monthly" rightText="Yearly" />
      </DurationChoiceWrapper>
    </StepTwoContentWrapper>
  );
};

export const CardContent = () => {
  const { page } = useContext(buttonContext);
  const headers = Object.keys(formInfos).map((index) => [
    formInfos[index.toString()].title,
    formInfos[index.toString()].description,
  ]);

  const [title, description] = headers[page - 1];
  return (
    <CardContentWrapper>
      <CardHeaderWrapper>
        <CardHeaderTitle>{title}</CardHeaderTitle>
        <CardHeaderDescription>{description}</CardHeaderDescription>
      </CardHeaderWrapper>
      <StepFactory>
        {page === 1 && <StepOneContent />}
        {page === 2 && <StepTwoContent />}
      </StepFactory>
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
