import React, { useState } from "react";
import styled from "styled-components";

const ToggleSwitchWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 4px;
  width: 38px;
  height: 20px;
  border-radius: 10px;
  background-color: var(--primary-marine-blue);
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
  align-self: ${(props) => (props.isOn ? "flex-end" : "flex-start")};
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

const ToggleSwitch = ({ leftText, rightText }) => {
  const [on, setOn] = useState(true);
  return (
    <>
      <ToggleText selected={on}>{leftText}</ToggleText>
      <ToggleSwitchWrapper onClick={() => setOn((b) => !b)}>
        <ToggleSwitchBox>
          <ToggleSwitchCircle isOn={on} />
        </ToggleSwitchBox>
      </ToggleSwitchWrapper>
      <ToggleText selected={!on}>{rightText}</ToggleText>
    </>
  );
};

export default ToggleSwitch;
