import React, { createContext, useReducer, useEffect } from "react";
import combineReducers from "react-combine-reducers";
import { UserReducer } from "./userreducer";
import { CartReducer, getInitialState } from "./cartreducer";
import { ICartProduct } from "../api/cart";

type state = {
  cart: ICartProduct[];
  isAuthenticated: boolean;
};

type Action = {
  type: string;
  payload: { cart?: ICartProduct; isAuthenticated?: boolean };
};

type StateReducer = (state: state, action: Action) => state;

export const [reducer, initialState] = combineReducers<StateReducer>({
  cart: [CartReducer, getInitialState()],
  isAuthenticated: [UserReducer, false],
});

export const StateContext = createContext<{
  state: state;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface IProps {
  reducer: StateReducer;
  initialState: state;
  children: React.ReactNode;
}

export const StateProvider: React.FC<IProps> = ({
  reducer,
  initialState,
  children,
}: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
  });
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {console.log(state)}
      {children}
    </StateContext.Provider>
  );
};
