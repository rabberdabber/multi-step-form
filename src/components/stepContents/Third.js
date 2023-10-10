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
  const { addOns, setAddOns } = useContext(userContext);
  const { multiplayer, extraStorage, customProfile } = addOns;
  const mapping = {
    multiplayer,
    extraStorage,
    customProfile,
  };
  return (
    <StepThreeContentWrapper>
      {Object.entries(addOnsInfos).map(
        ([key, { title, description, price }]) => {
          return (
            <AddOns
              key={key}
              checked={mapping[key]}
              setChecked={(param) => {
                setAddOns({
                  ...addOns,
                  [key]: param,
                });
              }}
              title={title}
              details={description}
              price={price}
            />
          );
        }
      )}
    </StepThreeContentWrapper>
  );
};

export default StepThreeContent;
