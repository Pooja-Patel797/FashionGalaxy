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
  const fieldObject: FieldObject = { value: "", response: "" };
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
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setCredentials: React.Dispatch<React.SetStateAction<FieldObject>>
  ) => {
    const value = event.target.value;
    const result = validator(value);
    setCredentials({ value: value, response: result });
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const userResponse = validateUsername(user.value);
    const emailResponse = validateEmail(email.value);
    const passwordResponse = validatePassword(password.value);

    console.log("inside submit");
    if (
      userResponse === "valid" &&
      emailResponse === "valid" &&
      passwordResponse === "valid"
    ) {
      try {
        const res = await addUser(userDetails);

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
            setEmail={setEmail}
            onhandleChange={onhandleChange}
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
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleSubmit(event)
            }
            variant="outlined"
          >
            Register
          </Button>
        </CssBaseline>
      </React.Fragment>
    </FormLayout>
  );
};
