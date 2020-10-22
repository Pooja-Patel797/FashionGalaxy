import React, { createContext, useReducer, useEffect } from "react";
import { getInitialState } from "../reducers/reducer";

export const StateContext: any = createContext({
  state: getInitialState(),
  dispatch: () => {},
});

export const StateProvider = ({ reducer, initialState, children }: any) => {
  useEffect(() => {
    console.log("Redered stateProvider");
  });

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
