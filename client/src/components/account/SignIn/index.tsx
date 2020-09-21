import { CssBaseline, Button } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import { useStyles } from "./style";
import { validateEmail, validatePassword } from "../common/Validation";
import { FormLayout } from "../index";
import { Email, Password } from "../common/credentialsFields";
import { authUser } from "../../../authorization/auth";
import { StateContext } from "../../../StateProvider/StateProvider";
import { getSession } from "../../../common/SesssionStorage";

export const SignIn = (props: any) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [state, dispatch] = useContext(StateContext);

  const onhandleChange = (validator: any, event: any, setCredentials: any) => {
    let value = event.target.value;
    let result = validator(value);
    setCredentials({ value: value, error: result });
  };

  const handleSubmit = () => {
    authUser(email.value, password.value)
      .then((res) => {
        if (res === true) {
          dispatch({
            type: "LOGIN_USER",
            user: getSession("user"),
          });
          props.history.push("/");
        } else {
          window.alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("Something went wrong");
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const classes = useStyles();
  return (
    <FormLayout>
      <React.Fragment>
        <CssBaseline>
          <Email
            classes={classes}
            validateEmail={validateEmail}
            onhandleChange={onhandleChange}
            setEmail={setEmail}
            email={email}
          />
          <Password
            classes={classes}
            validatePassword={validatePassword}
            onhandleChange={onhandleChange}
            setPassword={setPassword}
            password={password}
          />
          <Button
            className={classes.button}
            onClick={(event) => handleSubmit()}
            variant="outlined"
          >
            Login
          </Button>
        </CssBaseline>
      </React.Fragment>
    </FormLayout>
  );
};
