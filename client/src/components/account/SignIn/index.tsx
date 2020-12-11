import { CssBaseline, Button } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import { useStyles } from "./style";
import { validateEmail, validatePassword } from "../common/validation";
import { FormLayout } from "../index";
import { Email, Password } from "../common/formfields";
import { authUser } from "../../../authorization/auth";
import { StateContext } from "../../../reducers/reducer";
import { isCartExists } from "../../../utils/availthecart";
import { FieldObject } from "../interface";
import { History } from "history";
import { deleteLocalStorage } from "../../../utils/localstorage";
import { trackPromise } from "react-promise-tracker";

interface ISignIn {
  history: History;
}

export const SignIn: React.FC<ISignIn> = (props) => {
  const fieldobject: FieldObject = { value: "", response: "" };
  const [email, setEmail] = useState(fieldobject);
  const [password, setPassword] = useState(fieldobject);
  const context = useContext(StateContext);

  const onhandleChange = (
    validator: (value: string) => string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setCredentials: React.Dispatch<React.SetStateAction<FieldObject>>
  ) => {
    const value = event.target.value;
    const result = validator(value);
    if (result !== "valid") setCredentials({ value: value, response: result });
    else setCredentials({ value: value, response: "" });
  };

  const handleSubmit = async () => {
    try {
      const res = await authUser({
        email: email.value,
        password: password.value,
      });

      if (res) {
        context.dispatch({
          type: "LOGIN_USER",
          payload: { isAuthenticated: true },
        });
        if (await isCartExists()) {
          context.dispatch({
            type: "INITIALIZE_CART",
            payload: {},
          });
        }
        deleteLocalStorage("fashiongalaxycart");
        props.history.push("/");
      } else {
        window.alert("Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      window.alert(err);
    }
  };

  useEffect(() => {
    console.log("sigin");
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
            onClick={() => handleSubmit()}
            variant="outlined"
          >
            Login
          </Button>
        </CssBaseline>
      </React.Fragment>
    </FormLayout>
  );
};
