import { createContext } from "react";
const buttonContext = createContext({
  page: 1,
  confirmed: false,
  isDisabled: false,
  buttonPressed: false,
  setIsDisabled: () => {},
  setButtonPressed: () => {},
  setConfirmed: () => {},
});

export default buttonContext;
