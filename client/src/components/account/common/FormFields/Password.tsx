import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { FieldObject } from "../../interface";
import React from "react";


interface PropsPassword {
  classes: Record<string, string>;
  validatePassword: (password: string) => string;
  setPassword: React.Dispatch<React.SetStateAction<FieldObject>>;
  onhandleChange: (
    validator: (value: string) => string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setCredentials: React.Dispatch<React.SetStateAction<FieldObject>>
  ) => void;
  password: FieldObject;
}

export const Password: React.FC<PropsPassword> = (props:  PropsPassword ) => {
  return (
    <React.Fragment>
      <FormControl className={props.classes.formcontrol}>
        <InputLabel htmlFor="my-pass">Password</InputLabel>
        <Input
          id="my-pass"
          aria-describedby="my-helper-text"
          onChange={(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            props.onhandleChange(
              props.validatePassword,
              event,
              props.setPassword
            );
          }}
          onBlur={(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            props.onhandleChange(
              props.validatePassword,
              event,
              props.setPassword
            );
          }}
        />
        <FormHelperText id="my-helper-text" className={props.classes.error}>
          {props.password.response}
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};
