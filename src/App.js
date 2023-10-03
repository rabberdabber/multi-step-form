import { useEffect, useState } from "react";
import logo from "./logo.svg";
import { styled, createGlobalStyle } from "styled-components";
import { range } from "lodash";
import "./App.css";
import sideBarSvg from "./bg-sidebar-desktop.svg";

const GlobalStyles = createGlobalStyle`
  #root {
    --primary-marine-blue: hsl(213, 96%, 18%);
    --primary-purplish-blue: hsl(243, 100%, 62%);
    --primary-pastel-blue: hsl(228, 100%, 84%);
    --primary-light-blue: hsl(206, 94%, 87%);
    --primary-strawberry-red: hsl(354, 84%, 57%);
    --neutral-cool-gray: hsl(231, 11%, 63%);
    --neutral-light-gray: hsl(229, 24%, 87%);
    --neutral-magnolia: hsl(217, 100%, 97%);
    --neutral-alabaster: hsl(231, 100%, 99%);
    --neutral-white: hsl(0, 0%, 100%);
    --app-font-size: 16px;
    --app-font-family: 'Ubuntu', sans-serif;
    --app-font-weight-small: 400;
    --app-font-weight-medium: 500;
    --app-font-weight-large: 700;
  }
`;

const Wrapper = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  display: flex;
  gap: 20px;
  z-index: 10;
  flex-direction: column;
  width: 153px;
  height: 228px;
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  height: 33px;
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
`;

const StepTag = styled.div`
  font-size: 14px;
  color: var(--neutral-white);
`;

const StepDescription = styled.div`
  font-size: var(--app-font-size);
  color: var(--primary-light-blue);
  font-weight: bold;
`;

const Step = ({ selectedStep = 1 }) => {
  const descriptions = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  return (
    <Wrapper>
      {descriptions.map((description, index) => {
        return (
          <StepWrapper key={index + 1}>
            <StepCircles isSelected={selectedStep === index + 1}>
              {index + 1}
            </StepCircles>
            <StepWordsWrapper>
              <StepTag>Step {index + 1}</StepTag>
              <StepDescription>{description}</StepDescription>
            </StepWordsWrapper>
          </StepWrapper>
        );
      })}
    </Wrapper>
  );
};

const Card = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  background-color: var(--neutral-white);
  height: 600px;
  width: 940px;
  border-radius: 10px;
`;

const SideBar = styled.div`
  position: absolute;
  background-image: url(${sideBarSvg});
  border-radius: 5px;
  top: 16px;
  left: 16px;
  bottom: 16px;
  width: 274px;
  height: 568px;
`;
function App() {
  const [selectedStep, setSelectedStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedStep((selectedStep) => (selectedStep + 1) % 5);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Card>
          <SideBar>
            <Step selectedStep={selectedStep} />
          </SideBar>
        </Card>
      </div>
    </>
  );
}

export default App;
