import React, { useCallback, useContext } from "react";
import buttonContext from "../../contexts/button/context";
import Button from "../Button";

import StepOneContent from "./First.js";
import StepTwoContent from "./Second.js";
import StepThreeContent from "./Third.js";
import StepFourContent, { StepFourContentOnConfirm } from "./Fourth.js";

const StepFactory = ({ children }) => {
  const {
    page,
    confirmed,
    setPage,
    isDisabled,
    setButtonPressed,
    setConfirmed,
  } = useContext(buttonContext);

  const onClickNext = useCallback(() => {
    setButtonPressed(true);
    if (!isDisabled) {
      setPage((page) => (page % 4) + 1);
    }
  }, [isDisabled]);

  const onClickPrev = useCallback(() => {
    setButtonPressed(true);
    if (!isDisabled) {
      setPage((page) => (page - 1) % 4);
    }
  }, [isDisabled]);

  const onClickConfirm = useCallback(() => {
    setConfirmed(true);
  });

  return (
    <>
      {children}
      {!confirmed && (
        <>
          {page !== 1 && (
            <Button type="previous" onClick={onClickPrev}>
              Go Back
            </Button>
          )}
          <Button
            type="next"
            isDisabled={isDisabled}
            onClick={page === 4 ? onClickConfirm : onClickNext}
            style={{
              "background-color":
                page === 4
                  ? "var(--primary-purplish-blue)"
                  : "var(--primary-marine-blue)",
            }}
          >
            {page === 4 ? "Confirm" : "Next Step"}
          </Button>
        </>
      )}
    </>
  );
};

export {
  StepOneContent,
  StepTwoContent,
  StepThreeContent,
  StepFourContent,
  StepFourContentOnConfirm,
};
export default StepFactory;
