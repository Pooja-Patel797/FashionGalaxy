import { CssBaseline, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./style";
import { validateEmail, validatePassword } from "../common/Validation";
import { FormLayout } from "../index";
import { Email, Password } from "../common/credentialsFields";

export const SignIn = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onhandleChange = (validator: any, event: any, setCredentials: any) => {
    let value = event.target.value;
    let result = validator(value);
    setCredentials({ value: value, error: result });

    console.log(email);
    console.log(password);
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
          <Button className={classes.button} variant="outlined">
            Login
          </Button>
        </CssBaseline>
      </React.Fragment>
    </FormLayout>
  );
};
