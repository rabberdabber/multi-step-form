import React, { useId } from "react";
import styled from "styled-components";

export const AddOnsWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  height: 81px;
  width: 450px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.checked
        ? "var(--primary-purplish-blue)"
        : "var(--neutral-cool-gray)"};
`;

export const CheckMarkWrapper = styled.button``;

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

const CheckBox = ({ checked, setChecked }) => {
  const id = useId();
  return (
    <form
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
    </form>
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
`;

export const AddOnDetails = styled.p`
  width: max-content;
  margin: 0px;
  color: var(--neutral-cool-gray);
  font-family: var(--app-font-family);
  font-size: 14px;
  line-height: 20px;
  font-weight: var(--app-font-medium);
`;

const AddOnPrice = styled.p`
  margin: 0px;
  margin-left: auto;
  margin-right: 24px;
  color: var(--primary-purplish-blue);
  font-family: var(--app-font-family);
  font-size: 16px;
  line-height: 20px;
`;

const AddOns = ({ checked, setChecked, title, details, price }) => {
  return (
    <AddOnsWrapper checked={checked}>
      <CheckBox checked={checked} setChecked={setChecked} />
      <AddOnTextWrapper>
        <AddOnTitle>{title}</AddOnTitle>
        <AddOnDetails>{details}</AddOnDetails>
      </AddOnTextWrapper>
      <AddOnPrice>+${price}/mo</AddOnPrice>
    </AddOnsWrapper>
  );
};

export default AddOns;
