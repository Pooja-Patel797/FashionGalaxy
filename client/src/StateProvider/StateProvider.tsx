import React, { createContext, useReducer } from "react";
import { initialState } from "../Reducers/Reducer";

export const StateContext: any = createContext({
  state: initialState,
  dispatch: () => {},
});

export const StateProvider = ({ reducer, initialState, children }: any) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
