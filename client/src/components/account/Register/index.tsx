import { FormLayout } from "../index";
import React, { useState } from "react";
import { useStyles } from "./style";
import { Button, CssBaseline } from "@material-ui/core";
import { Username, Email, Password } from "../common/formfields";
import {
  validateEmail,
  validateUsername,
  validatePassword,
} from "../common/validation";
import { addUser } from "../../../api/users";
import { History } from "history";
import { FieldObject } from "../interface";

interface PropsRegister {
  history: History;
}

export const Register: React.FC<PropsRegister> = (props) => {
  let fieldObject: FieldObject = { value: "", error: "" };
  const [user, setUser] = useState(fieldObject);
  const [email, setEmail] = useState(fieldObject);
  const [password, setPassword] = useState(fieldObject);
  const userDetails = {
    name: user.value,
    email: email.value,
    password: password.value,
    isStatus: "active",
    roleId: "user",
  };

  const onhandleChange = (
    validator: (value: string) => string,
    event: React.ChangeEvent<HTMLInputElement>,
    setCredentials: (value: FieldObject) => void
  ) => {
    let value = event.target.value;
    let result = validator(value);
    setCredentials({ value: value, error: result });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let userError = validateUsername(user.value);
    let emailError = validateEmail(email.value);
    let passwordError = validatePassword(password.value);

    console.log("inside submit");
    if (
      userError === false &&
      emailError === false &&
      passwordError === false
    ) {
      try {
        let res = await await addUser(userDetails);

        console.log(res);
        if (res != null) {
          props.history.push("/SignIn");
        } else {
          window.alert("Email already exists!!!");
        }
      } catch {
        window.alert("Something went wrong !!!");
      }
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
