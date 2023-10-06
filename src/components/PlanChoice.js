import React from "react";
import styled from "styled-components";
import ArcadeSvg from "../assets/images/icon-arcade.svg";
import ProSvg from "../assets/images/icon-pro.svg";
import AdvancedSvg from "../assets/images/icon-advanced.svg";

const toSvg = (name) => {
  switch (name) {
    case "Arcade":
      return ArcadeSvg;
    case "Advanced":
      return AdvancedSvg;
    case "Pro":
      return ProSvg;
    default:
      return null;
  }
};

const PlanChoiceWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  top: 10px;
  left: 10px;
  width: 138px;
  height: 160px;
  border-radius: 8px;
  border: 1px solid tomato;
  padding: 16px;
  &:focus {
    border-color: var(--primary-purplish-blue);
  }
`;

const PlanSVGCircle = styled.div`
  margin-top: 4px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: ${(props) => `url(${toSvg(props.type)})`};
`;

const PlanTypeBox = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 53px;
  height: 45px;
  margin: 0px;
`;

const PlanTypeText = styled.p`
  margin: 0px;
  font-family: var(--app-font-family);
  font-size: var(--app-font-size);
  line-height: 16px;
  color: var(--primary-marine-blue);
  margin-top: auto;
  margin-bottom: auto;
`;

const PlanPriceText = styled.p`
  margin: 0px;
  font-family: var(--app-font-family);
  font-size: 14px;
  line-height: 20px;
  color: var(--neutral-cool-gray);
`;

const PlanChoice = ({ type = "Advanced", price = 9 }) => {
  return (
    <PlanChoiceWrapper>
      <PlanSVGCircle type={type} />
      <PlanTypeBox>
        <PlanTypeText>{type}</PlanTypeText>
        <PlanPriceText>${price}/mo</PlanPriceText>
      </PlanTypeBox>
    </PlanChoiceWrapper>
  );
};

export default PlanChoice;
