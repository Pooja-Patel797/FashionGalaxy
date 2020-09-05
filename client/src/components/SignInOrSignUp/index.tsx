import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React, { useState } from "react";
import { useStyles } from "./style";
import { RouteComponent } from "../../RouteComponent";

export const SignIn = () => {
  const [isLogin, setLogin] = useState(true);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline>
        <div className={classes.form}>
          <ButtonGroup className={classes.button} variant="text">
            <Button onClick={() => setLogin(true)}>Login</Button>
            <Button onClick={() => setLogin(false)}>SignUp</Button>
          </ButtonGroup>

          {!isLogin ? (
            <FormControl className={classes.formcontrol}>
              <InputLabel htmlFor="my-user">UserName</InputLabel>
              <Input id="my-user" aria-describedby="my-helper-text" />
            </FormControl>
          ) : (
            " "
          )}

          <FormControl className={classes.formcontrol}>
            <InputLabel htmlFor="my-email">Email address</InputLabel>
            <Input id="my-email" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl className={classes.formcontrol}>
            <InputLabel htmlFor="my-pass">Password</InputLabel>
            <Input id="my-pass" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              Password should be of 8 digits with atleast one symbol,number{" "}
            </FormHelperText>
          </FormControl>
          <Button className={classes.button} variant="outlined">
            {isLogin ? "Login" : "SignUp"}
          </Button>
        </div>
      </CssBaseline>
    </React.Fragment>
  );
};
