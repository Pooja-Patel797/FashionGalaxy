import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import React from "react";

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
