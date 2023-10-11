import React, { useContext } from "react";
import styled from "styled-components";
import userContext from "../../contexts/user/context";
import buttonContext from "../../contexts/button/context";
import addOnsInfos from "../../addOnsInfos.json";
import planInfos from "../../planInfos.json";
import thanksIcon from "../../assets/images/icon-thank-you.svg";

const SingleSummary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 402px;
  height: 45px;
  @media (max-width: 500px) {
    width: 263px;
    height: 20px;
  }
`;

const SummaryDescription = styled.p`
  margin: 0px;
  align-self: center;
  color: var(--neutral-cool-gray);
  font-size: 14px;
  line-height: 20px;
`;
const SummaryPrice = styled.p`
  margin: 0px;
  margin-left: auto;
  align-self: center;
  font-family: var(--app-font-family);
  color: var(--primary-marine-blue);
  font-size: 14px;
  line-height: 20px;
`;

const PlanSingleSummaryWrapper = styled(SingleSummary)`
  height: 69px;
  width: 402px;
  border-bottom: 1px solid var(--neutral-cool-gray);
  padding: calc((69px - 45px) / 2) 0;
  @media (max-width: 500px) {
    width: 263px;
    height: 51px;
    padding: calc((51px - 45px) / 2) 0;
  }
`;

const PlanSingleSummaryHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  height: 45px;
`;

const PlanHeader = styled.p`
  margin: 0px;
  color: var(--primary-marine-blue);
  font-family: var(--app-font-family);
`;

const PlanChangeLink = styled.button`
  display: block;
  color: var(--neutral-cool-gray);
  text-decoration: underline;
  font-size: 14px;
  border-width: 0px;
  background-color: inherit;
`;

const PlanPrice = styled.p`
  font-family: var(--app-font-family);
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: var(--primary-marine-blue);
  align-self: center;
`;

const PlanSingleSummary = () => {
  const { plan, isMonthly } = useContext(userContext);
  const { setPage } = useContext(buttonContext);
  return (
    <PlanSingleSummaryWrapper>
      <PlanSingleSummaryHeader>
        <PlanHeader>
          {plan} ({isMonthly ? "Monthly" : "Yearly"})
        </PlanHeader>
        <PlanChangeLink onClick={() => setPage((page) => page - 1)}>
          Change
        </PlanChangeLink>
      </PlanSingleSummaryHeader>
      <PlanPrice>
        $
        {isMonthly
          ? `${planInfos[plan].price.monthly}/mo`
          : `${planInfos[plan].price.yearly}/yr`}
      </PlanPrice>
    </PlanSingleSummaryWrapper>
  );
};

const AddOnsSummary = ({ title, price }) => {
  const { isMonthly } = useContext(userContext);
  return (
    <SingleSummary>
      <SummaryDescription>{title}</SummaryDescription>
      <SummaryPrice>
        +${price}/{isMonthly ? "mo" : "yr"}
      </SummaryPrice>
    </SingleSummary>
  );
};

const StepFourContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: var(--card-content-width);
`;

const NonTotalSummary = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--card-content-width);
  min-height: 100px;
  max-height: 210px;
  background-color: var(--neutral-magnolia);
  border-radius: 8px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  @media (max-width: 500px) {
    padding-bottom: 16px;
    gap: 12px;
    min-height: 140px;
    max-height: 240px;
  }
`;

const TotalPrice = styled.p`
  margin: 0px;
  color: var(--primary-purplish-blue);
  font-family: var(--app-font-family);
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  align-self: center;
`;

const TotalSummary = () => {
  const { plan, addOns, isMonthly } = useContext(userContext);
  const addOnPriceMonthly = Object.keys(addOns)
    .filter((addOnKeys) => addOns[addOnKeys])
    .reduce(
      (accumulator, currentKey) => addOnsInfos[currentKey].price + accumulator,
      0
    );
  const addOnPriceYearly = Object.keys(addOns)
    .filter((addOnKeys) => addOns[addOnKeys])
    .reduce(
      (accumulator, currentKey) =>
        addOnsInfos[currentKey].price * 12 + accumulator,
      0
    );
  const priceInfo = planInfos[plan].price;
  const totalPrice = isMonthly
    ? addOnPriceMonthly + priceInfo.monthly
    : addOnPriceYearly + priceInfo.yearly;
  return (
    <SingleSummary>
      <SummaryDescription>Total (per year)</SummaryDescription>
      <TotalPrice>
        ${totalPrice}/{isMonthly ? "mo" : "yr"}
      </TotalPrice>
    </SingleSummary>
  );
};

const Summary = () => {
  const { addOns } = useContext(userContext);
  return (
    <StepFourContentWrapper>
      <NonTotalSummary>
        <PlanSingleSummary></PlanSingleSummary>
        {Object.keys(addOns)
          .filter((addOnKeys) => addOns[addOnKeys])
          .map((addOnKeys) => {
            return (
              <AddOnsSummary
                key={addOnKeys}
                title={addOnsInfos[addOnKeys].title}
                price={addOnsInfos[addOnKeys].price}
              ></AddOnsSummary>
            );
          })}
      </NonTotalSummary>
      <TotalSummary></TotalSummary>
    </StepFourContentWrapper>
  );
};

const OnConfirmationImg = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-image: url(${thanksIcon});
`;

const OnConfirmationThanks = styled.p`
  margin: 0px;
  color: var(--primary-marine-blue);
  font-size: 30px;
  line-height: 37px;
  font-family: var(--app-font-family);
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 14px;
`;

const OnConfirmationMessage = styled.p`
  margin: 0px;
  color: var(--neutral-cool-gray);
  font-size: 16px;
`;

const OnConfirmationContent = () => {
  return (
    <>
      <OnConfirmationImg />
      <OnConfirmationThanks>Thank you!</OnConfirmationThanks>
      <OnConfirmationMessage>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.{" "}
      </OnConfirmationMessage>
    </>
  );
};

const StepFourOnConfirmWrapper = styled(StepFourContentWrapper)`
  margin-top: calc(-1 * var(--card-margin-top));
`;

export const StepFourContentOnConfirm = () => {
  return (
    <StepFourOnConfirmWrapper>
      <OnConfirmationContent />
    </StepFourOnConfirmWrapper>
  );
};
const StepFourContent = () => {
  return (
    <StepFourContentWrapper>
      <Summary />
    </StepFourContentWrapper>
  );
};

export default StepFourContent;
