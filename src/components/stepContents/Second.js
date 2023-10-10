import React, { useContext } from "react";
import styled from "styled-components";
import PlanChoice from "../PlanChoice";
import PlanChoiceToggleSwitch from "../PlanChoiceToggleSwitch";
import planInfos from "../../planInfos.json";
import userContext from "../../contexts/user/context";

const PlanChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  justify-content: center;
  width: var(--card-content-width);
  height: 255px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const DurationChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--neutral-magnolia);
  padding: 13px;
  width: var(--card-content-width);
  height: 48px;
  border-radius: 8px;
  gap: 24px;
`;

const StepTwoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: var(--card-content-width);
  height: 240px;
  @media (max-width: 500px) {
    gap: 24px;
  }
`;

const StepTwoContent = () => {
  const { isMonthly } = useContext(userContext);
  return (
    <StepTwoContentWrapper>
      <PlanChoiceWrapper>
        {Object.entries(planInfos).map(([planType, planInfo]) => {
          return (
            <PlanChoice
              key={planType}
              type={planType}
              price={isMonthly ? planInfo.price.monthly : planInfo.price.yearly}
              yearlyMonthFree={planInfo.yearlyMonthFree}
            />
          );
        })}
      </PlanChoiceWrapper>
      <DurationChoiceWrapper>
        <PlanChoiceToggleSwitch leftText="Monthly" rightText="Yearly" />
      </DurationChoiceWrapper>
    </StepTwoContentWrapper>
  );
};

export default StepTwoContent;
