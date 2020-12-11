import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

export const Loader: React.FC<any> = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <React.Fragment>
      {promiseInProgress && <h1>Hey some async call in progress !</h1>}
    </React.Fragment>
  );
};
