import React, { useState, useEffect } from "react";
import { getSession, setSession } from "../utils/SesssionStorage";
import { SignIn } from "../components/account/SignIn";
import { IUser } from "../interfaces/UserInterface";

interface IAuthUser {}

export const AuthUserContext: any = React.createContext([{}, () => {}]);

export const AuthUser = (props: any) => {
  const [isAuthenticated, setAuthentication] = useState(() => {
    const localData = getSession("user");
    return localData.isAuthenticated == null ? false : true;
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
