import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../stateprovider/stateprovider";

interface IAuthUser {}

export const AuthUserContext: any = React.createContext([{}, () => {}]);

export const AuthUser = (props: any) => {
  const [isAuthenticated, setAuthentication] = useState(() => {
    const [state, dispatch] = useContext(StateContext);

    return state.isAuthenticated == null ? false : true;
  });

  const setAuth = (value: any) => {
    setAuthentication(value);
  };
  return (
    <AuthUserContext.Provider value={[isAuthenticated, setAuth]}>
      {props.children}
    </AuthUserContext.Provider>
  );
};
