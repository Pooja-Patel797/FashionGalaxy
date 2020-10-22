import { CssBaseline, Button } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import { useStyles } from "./style";
import { validateEmail, validatePassword } from "../common/validation";
import { FormLayout } from "../index";
import { Email, Password } from "../common/formfields";
import { authUser } from "../../../authorization/auth";
import { StateContext } from "../../../stateprovider/stateprovider";
import { isCartExists } from "../../../utils/availthecart";
import { FieldObject } from "../interface";
import { getLocalStorage } from "../../../utils/localstorage";
import { createCart } from "../../../api/cart";

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
    try {
      let res = await authUser({
        email: email.value,
        password: password.value,
      });

      if (res) {
        dispatch({
          type: "LOGIN_USER",
          isAuthenticated: true,
        });
        if (await isCartExists()) {
          dispatch({
            type: "EMPTY_CART",
          });
        }
        props.history.push("/");
      } else {
        window.alert("Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      window.alert(err);
    }
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
            onClick={(event: any) => handleSubmit()}
            variant="outlined"
          >
            Login
          </Button>
        </CssBaseline>
      </React.Fragment>
    </FormLayout>
  );
};
