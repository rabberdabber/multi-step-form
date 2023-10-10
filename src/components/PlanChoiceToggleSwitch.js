import React, { useContext } from "react";
import styled from "styled-components";
import userContext from "../contexts/user/context";

const ToggleSwitchWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 4px;
  width: 38px;
  height: 20px;
  border-radius: 10px;
  background-color: var(--primary-marine-blue);
  border-width: 0px;
`;

const ToggleSwitchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ToggleSwitchCircle = styled.div`
  margin: 0px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  align-self: ${(props) => (props.isOn ? "flex-start" : "flex-end")};
  background-color: var(--neutral-white);
`;

const ToggleText = styled.p`
  margin: 0px;
  font-size: 14px;
  font-family: var(--app-font-family);
  color: ${(props) =>
    props.selected ? "var(--primary-marine-blue)" : "var(--neutral-cool-gray)"};
  font-weight: bold;
`;

const PlanChoiceToggleSwitch = ({ leftText, rightText }) => {
  const { isMonthly, setIsMonthly } = useContext(userContext);
  return (
    <>
      <ToggleText selected={isMonthly}>{leftText}</ToggleText>
      <ToggleSwitchWrapper onClick={() => setIsMonthly((b) => !b)}>
        <ToggleSwitchBox>
          <ToggleSwitchCircle isOn={isMonthly} />
        </ToggleSwitchBox>
      </ToggleSwitchWrapper>
      <ToggleText selected={!isMonthly}>{rightText}</ToggleText>
    </>
  );
};

export default PlanChoiceToggleSwitch;
