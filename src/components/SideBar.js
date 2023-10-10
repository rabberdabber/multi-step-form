import React, { useContext } from "react";
import styled from "styled-components";
import desktopSideBarSvg from "../assets/images/bg-sidebar-desktop.svg";
import mobileSideBarSvg from "../assets/images/bg-sidebar-mobile.svg";
import formInfos from "../formInfos.json";
import buttonContext from "../contexts/button/context.js";

const Wrapper = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 153px;
  height: 228px;
  @media (max-width: 500px) {
    position: absolute;
    flex-direction: row; // mobile
    margin: revert;
    top: 32px;
    left: 98px;
    right: 97px;
    gap: 16px;
    width: 180px;
    height: 33px;
  }
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 33px;
  gap: 16px;
`;

const StepCircles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  color: ${(props) => (props.isSelected ? "black" : "white")};
  background-color: ${(props) =>
    props.isSelected ? "var(--primary-light-blue)" : "inherit"};
  border: 2px solid
    ${(props) => (props.isSelected ? "var(--primary-light-blue)" : "white")};
`;

const StepWordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  @media (max-width: 500px) {
    display: none; // mobile
  }
`;

const StepTag = styled.div`
  font-size: 12px;
  font-family: var(--app-font-family);
  font-weight: 400px;
  color: var(--primary-light-blue);
`;

const StepDescription = styled.div`
  font-size: 14px;
  color: var(--neutral-white);
  font-weight: bold;
  font-family: var(--app-font-family);
  line-height: 16px;
  margin-top: auto;
`;

const SideBarSteps = () => {
  const { page } = useContext(buttonContext);
  const stepTitles = Object.keys(formInfos).map(
    (index) => formInfos[index.toString()].stepTitle
  );
  return (
    <Wrapper>
      {stepTitles.map((description, index) => {
        return (
          <StepWrapper key={index + 1}>
            <StepCircles isSelected={page === index + 1}>
              {index + 1}
            </StepCircles>
            <StepWordsWrapper>
              <StepTag>STEP {index + 1}</StepTag>
              <StepDescription>{description}</StepDescription>
            </StepWordsWrapper>
          </StepWrapper>
        );
      })}
    </Wrapper>
  );
};

export const SideBar = styled.div`
  position: absolute;
  background-image: url(${desktopSideBarSvg});
  border-radius: 5px;
  top: 16px;
  left: 16px;
  bottom: 16px;
  width: 274px;
  height: 568px;
  @media (max-width: 500px) {
    inset: 0;
    margin-left: auto;
    margin-right: auto;
    background-image: url(${mobileSideBarSvg}); // mobile
    width: 375px;
    height: 172px;
  }
`;

export default SideBarSteps;
