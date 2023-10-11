import React, { useContext, useId } from "react";
import styled from "styled-components";
import userContext from "../contexts/user/context";

export const AddOnsWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  height: 81px;
  width: var(--card-content-width);
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.checked
        ? "var(--primary-purplish-blue)"
        : "var(--neutral-cool-gray)"};

  background-color: ${(props) =>
    props.checked ? "var(--neutral-magnolia)" : "var(--neutral-alabaster)"};
  @media (max-width: 500px) {
    gap: 16px;
  }
`;

export const InputWrapper = styled.input`
  display: inline;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 20px solid pink;
  accent-color: ${(props) =>
    props.checked
      ? "var(--primary-purplish-blue)"
      : "var(--neutral-cool-gray)"};
`;

export const FormWrapper = styled.form`
  margin-left: 24px;
`;

const CheckBox = ({ checked, setChecked }) => {
  const id = useId();
  return (
    <FormWrapper
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputWrapper
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
      />
    </FormWrapper>
  );
};

export const AddOnTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
  width: 181px;
  height: 45px;
`;

export const AddOnTitle = styled.p`
  margin: 0px;
  color: var(--primary-marine-blue);
  font-family: var(--app-font-family);
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const AddOnDetails = styled.p`
  width: max-content;
  margin: 0px;
  color: var(--neutral-cool-gray);
  font-family: var(--app-font-family);
  font-size: 14px;
  line-height: 20px;
  font-weight: var(--app-font-medium);
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const AddOnPrice = styled.p`
  margin: 0px;
  margin-left: auto;
  margin-right: 24px;
  color: var(--primary-purplish-blue);
  font-family: var(--app-font-family);
  font-size: 16px;
  line-height: 20px;
  @media (max-width: 500px) {
    font-size: 12px;
    margin-right: 6px;
  }
`;

const AddOns = ({ checked, setChecked, title, details, price }) => {
  const { isMonthly } = useContext(userContext);
  return (
    <AddOnsWrapper checked={checked}>
      <CheckBox checked={checked} setChecked={setChecked} />
      <AddOnTextWrapper>
        <AddOnTitle>{title}</AddOnTitle>
        <AddOnDetails>{details}</AddOnDetails>
      </AddOnTextWrapper>
      <AddOnPrice>
        +${isMonthly ? `${price / 10}/mo` : `${price}/yr`}
      </AddOnPrice>
    </AddOnsWrapper>
  );
};

export default AddOns;
