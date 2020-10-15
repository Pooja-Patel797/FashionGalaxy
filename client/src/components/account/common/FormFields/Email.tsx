import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import React from "react";

interface PropsEmail {
  classes: Record<any, string>;
  validateEmail: (email: string) => string | boolean;
  setEmail: React.Dispatch<
    React.SetStateAction<{
      value: string;
      error: string;
    }>
  >;
  onhandleChange: (validator: any, event: any, setCredentials: any) => void;
  email: {
    value: string;
    error: string;
  };
}

export const Email: React.FC<PropsEmail> = (props) => {
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
