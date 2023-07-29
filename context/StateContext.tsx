"use client";

import React, { ReactNode } from "react";
import { createContext, useState } from "react";

export const StateProvider = createContext<any>({});

const StateContext = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState("");
  const [diff, setDiff] = useState("");
  const [modifiedQues, setModifiedQues] = useState();
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <StateProvider.Provider
      value={{
        category,
        setCategory,
        diff,
        setDiff,
        inputVal,
        setInputVal,
        isLoading,
        setIsLoading,
        modifiedQues,
        setModifiedQues,
      }}
    >
      {children}
    </StateProvider.Provider>
  );
};

export default StateContext;
