import React, { useId } from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
  width: 450px;
  height: 48px;
  border-radius: 8px;
  margin-top: 8px;
  font-family: var(--app-font-family);
  color: var(--neutral-cool-gray);
  font-weight: var(--app-font-medium);
  font-size: var(--app-font-size);
  padding: 12px 16px;
  border: 1px solid
    ${(props) =>
      props.warning ? "var(--red-errors)" : "var(--neutral-cool-gray)"};
  &:focus {
    border-color: var(--primary-purplish-blue);
  }
  @media (max-width: 500px) {
    margin-top: 0px;
    border-radius: 4px;
    height: 40px;
    width: var(--card-content-width);
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: var(--card-content-width);
  height: 203px;
  @media (max-width: 500px) {
    height: 57px;
  }
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
