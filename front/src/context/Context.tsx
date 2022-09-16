import React, { createContext } from "react";

type UserContextType = {
  cart: any;
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
};

const iUserContextState = {
  cart: [],
  setCart: () => {},
};

const Context = createContext<UserContextType>(iUserContextState);

export default Context;
