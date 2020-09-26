import { CssBaseline, Button } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import { useStyles } from "./style";
import { validateEmail, validatePassword } from "../common/Validation";
import { FormLayout } from "../index";
import { Email, Password } from "../common/FormFields";
import { authUser } from "../../../authorization/auth";
import { StateContext } from "../../../StateProvider/StateProvider";
import { getSession } from "../../../utils/SesssionStorage";
import { FieldObject } from "../interface";

export const SignIn = (props: any) => {
  let fieldobject: FieldObject = { value: "", error: "" };
  const [email, setEmail] = useState(fieldobject);
  const [password, setPassword] = useState(fieldobject);
  const [state, dispatch] = useContext(StateContext);

  const onhandleChange = (
    validator: (value: string) => string,
    event: React.ChangeEvent<HTMLInputElement>,
    setCredentials: any
  ) => {
    let value = event.target.value;
    let result = validator(value);
    setCredentials({ value: value, error: result });
  };

  const handleSubmit = async () => {
    await authUser({ email: email.value, password: password.value })
      .then((res) => {
        if (res) {
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
