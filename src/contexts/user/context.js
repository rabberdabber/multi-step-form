import React, { createContext } from "react";

const userContext = createContext({
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  isMonthly: true,
  addOns: { multiplayer: false, extraStorage: false, customProfile: false },
  setName: () => {},
  setEmail: () => {},
  setPhone: () => {},
  setPlan: () => {},
  setIsMonthly: () => {},
  setAddOns: () => {},
});

export default userContext;
