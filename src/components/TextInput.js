import React, { useId } from "react";
import styled from "styled-components";

export const StepOneInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 450px;
  height: 264px;
  gap: 24px;
`;

const InputWrapper = styled.input`
  width: 450px;
  height: 48px;
  border-radius: 8px;
  margin-top: 8px;
  border: 1px solid
    ${(props) =>
      props.warning ? "var(--red-errors)" : "var(--neutral-cool-gray)"};
  &:focus {
    border-color: var(--primary-purplish-blue);
  }
`;

const CustomLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CustomLabel = styled.p`
  font-family: var(--app-font-family);
  color: var(--primary-marine-blue);
  line-height: 16px;
  font-size: 14px;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const CustomWarning = styled.p`
  font-family: var(--app-font-family);
  color: var(--red-errors);
  line-height: 16px;
  font-size: 14px;
  font-weight: bold;
  text-align: right;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const CustomForm = styled.form`
  margin-top: 0px;
`;

const TextInput = ({
  label,
  input,
  setInput,
  warning = false,
  type = "text",
}) => {
  const id = useId();

  return (
    <CustomForm>
      <CustomLabelWrapper>
        <CustomLabel htmlFor={id}>{label}</CustomLabel>
        {warning && <CustomWarning>This field is required</CustomWarning>}
      </CustomLabelWrapper>
      <InputWrapper
        type={type}
        id={id}
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        warning={warning}
      />
    </CustomForm>
  );
};

export default TextInput;
