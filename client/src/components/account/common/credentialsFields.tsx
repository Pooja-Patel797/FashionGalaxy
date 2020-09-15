import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

import React from "react";

export const Username = (props: any) => {
  return (
    <React.Fragment>
      <FormControl className={props.classes.formcontrol}>
        <InputLabel htmlFor="my-user">UserName</InputLabel>
        <Input
          id="my-user"
          name="username"
          aria-describedby="my-helper-text"
          value={props.user.value}
          onChange={(event) => {
            props.onhandleChange(props.validateUsername, event, props.setUser);
          }}
          onBlur={(event) => {
            props.onhandleChange(props.validateUsername, event, props.setUser);
          }}
        />
        <FormHelperText id="my-helper-text" className={props.classes.error}>
          {props.user.error}
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export const Email = (props: any) => {
  return (
    <React.Fragment>
      <FormControl className={props.classes.formcontrol}>
        <InputLabel htmlFor="my-email">Email address</InputLabel>
        <Input
          id="my-email"
          aria-describedby="my-helper-text"
          onChange={(event) => {
            props.onhandleChange(props.validateEmail, event, props.setEmail);
          }}
          onBlur={(event) => {
            props.onhandleChange(props.validateEmail, event, props.setEmail);
          }}
        />
        <FormHelperText id="my-helper-text" className={props.classes.error}>
          {" "}
          {props.email.error}
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export const Password = (props: any) => {
  return (
    <React.Fragment>
      <FormControl className={props.classes.formcontrol}>
        <InputLabel htmlFor="my-pass">Password</InputLabel>
        <Input
          id="my-pass"
          aria-describedby="my-helper-text"
          onChange={(event) => {
            props.onhandleChange(
              props.validatePassword,
              event,
              props.setPassword
            );
          }}
          onBlur={(event) => {
            props.onhandleChange(
              props.validatePassword,
              event,
              props.setPassword
            );
          }}
        />
        <FormHelperText id="my-helper-text" className={props.classes.error}>
          {props.password.error}
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};
