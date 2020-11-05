import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { FieldObject } from "../../interface";
import React from "react";

interface PropsEmail {
  classes: Record<string, string>;
  validateEmail: (email: string) => string;
  setEmail: React.Dispatch<React.SetStateAction<FieldObject>>;
  onhandleChange: (
    validator: (value: string) => string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setCredentials: React.Dispatch<React.SetStateAction<FieldObject>>
  ) => void;
  email: FieldObject;
}

export const Email: React.FC<PropsEmail> = (props: PropsEmail) => {
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
          {props.email.response}
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};
