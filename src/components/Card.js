import React, { useContext } from "react";
import styled from "styled-components";
import buttonContext from "../contexts/button/context.js";
import UserProvider from "../contexts/user/provider.js";
import formInfos from "../formInfos.json";
import StepFactory, {
  StepOneContent,
  StepTwoContent,
  StepThreeContent,
  StepFourContent,
  StepFourContentOnConfirm,
} from "./stepContents/index.js";

const CardContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  left: 390px;
  top: 56px;
  right: 100px;
  height: calc(100% - 56px);
  @media (max-width: 500px) {
    top: 32px;
    left: 24px;
    right: 24px;
    height: 312px;
    width: 295px;
  }
`;

const CardContentWrapperOnConfirm = styled(CardContentWrapper)`
  justify-content: center;
  align-items: center;
`;

const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  width: var(--card-content-width);
  height: 68px;
  gap: 8px;
  @media (max-width: 500px) {
    width: 295px;
    height: 87px;
    gap: 2px;
  }
`;

const CardHeaderTitle = styled.h1`
  margin: 0px;
  color: var(--primary-marine-blue);
  font-weight: bold;
  line-height: 37px;
  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const CardHeaderDescription = styled.body`
  margin: 0px;
  padding: 0px;
  margin-top: auto;
  font-size: 16px;
  color: var(--neutral-cool-gray);
  width: max-content;
  line-height: 25px;
  @media (max-width: 500px) {
    text-wrap: wrap;
    height: 50px;
    inline-size: var(--card-content-width);
    text-align: left;
  }
`;

export const CardContent = () => {
  const { page, confirmed } = useContext(buttonContext);
  const headers = Object.keys(formInfos).map((index) => [
    formInfos[index.toString()].title,
    formInfos[index.toString()].description,
  ]);
  const [title, description] = headers[page - 1];
  return (
    <UserProvider>
      {confirmed ? (
        <>
          <CardContentWrapperOnConfirm>
            <StepFourContentOnConfirm />
          </CardContentWrapperOnConfirm>
        </>
      ) : (
        <CardContentWrapper>
          <CardHeaderWrapper>
            <CardHeaderTitle>{title}</CardHeaderTitle>
            <CardHeaderDescription>{description}</CardHeaderDescription>
          </CardHeaderWrapper>
          <StepFactory>
            {page === 1 && <StepOneContent />}
            {page === 2 && <StepTwoContent />}
            {page === 3 && <StepThreeContent />}
            {page === 4 && <StepFourContent />}
          </StepFactory>
        </CardContentWrapper>
      )}
    </UserProvider>
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
    min-height: 376px;
    max-height: 500px;
    width: 343px;
  }
`;

export default Card;
