import { FormLayout } from "../index";
import React, { useState } from "react";
import { useStyles } from "./style";
import { Button, CssBaseline } from "@material-ui/core";
import { Username, Email, Password } from "../common/credentialsFields";
import {
  validateEmail,
  validateUsername,
  validatePassword,
} from "../common/Validation";
import { addUser } from "../../../api/users";

export const Register = (props: any) => {
  const [user, setUser] = useState({ value: "", error: " " });
  const [email, setEmail] = useState({ value: "", error: " " });
  const [password, setPassword] = useState({ value: "", error: " " });

  const onhandleChange = (validator: any, event: any, setCredentials: any) => {
    let value = event.target.value;
    let result = validator(value);
    setCredentials({ value: value, error: result });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    event.preventDefault();
    let userError = validateUsername(user.value);
    let emailError = validateUsername(email.value);
    let passwordError = validateUsername(password.value);

    const userDetails = {
      name: user.value,
      email: email.value,
      password: password.value,
    };
    console.log("inside submit");
    if (
      userError === false &&
      emailError === false &&
      passwordError === false
    ) {
      addUser(userDetails)
        .then((res) => {
          if (res === true) {
            props.history.push("/SignIn");
          }
          if (res === false) {
            window.alert("Email already exists!!!");
          }
        })
        .catch(() => window.alert("Something went wrong !!!"));
    } else {
      console.log("invalid");
      window.alert("Invalid credentials.");
    }
  };

  const classes = useStyles();
  return (
    <FormLayout>
      <React.Fragment>
        <CssBaseline>
          <Username
            classes={classes}
            validateUsername={validateUsername}
            onhandleChange={onhandleChange}
            setUser={setUser}
            user={user}
          />
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
            onClick={(event: any) => handleSubmit(event)}
            variant="outlined"
          >
            Register
          </Button>
        </CssBaseline>
      </React.Fragment>
    </FormLayout>
  );
};
