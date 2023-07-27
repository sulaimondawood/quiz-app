"use client";

import React, { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

export const StateProvider = createContext<any>({});

const StateContext = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState([]);
  const [diff, setDiff] = useState("");
  const [inputVal, setInputVal] = useState(0);

  return (
    <StateProvider.Provider
      value={{ category, setCategory, diff, setDiff, inputVal, setInputVal }}
    >
      {children}
    </StateProvider.Provider>
  );
};

export default StateContext;
