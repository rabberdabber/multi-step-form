import React, { useState } from "react";
import userContext from "./context";

const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("Arcade");
  const [addOns, setAddOns] = useState({
    multiplayer: false,
    extraStorage: false,
    customProfile: false,
  });
  const [isMonthly, setIsMonthly] = useState(true);
  const contextValues = {
    name,
    email,
    phone,
    plan,
    addOns,
    isMonthly,
    setName,
    setEmail,
    setPhone,
    setPlan,
    setAddOns,
    setIsMonthly,
  };

  return (
    <userContext.Provider value={contextValues}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
