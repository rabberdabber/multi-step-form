import React, { useContext } from "react";
import styled from "styled-components";
import userContext from "../../contexts/user/context";
import AddOns from "../AddOns";
import addOnsInfos from "../../addOnsInfos.json";

const StepThreeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: var(--card-content-width);
  height: 276px;
  gap: 17px;
`;

const StepThreeContent = () => {
  return (
    <StepThreeContentWrapper>
      {Object.keys(addOnsInfos).map((key) => {
        return <AddOns key={key} name={key} />;
      })}
    </StepThreeContentWrapper>
  );
};

export default StepThreeContent;
