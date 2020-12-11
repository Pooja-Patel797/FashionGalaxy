import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { FieldObject } from "../../interface";
import React from "react";

interface PropsUsername {
  classes: Record<string, string>;
  validateUsername: (username: string) => string;
  setUser: React.Dispatch<React.SetStateAction<FieldObject>>;
  onhandleChange: (
    validator: (value: string) => string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setCredentials: React.Dispatch<React.SetStateAction<FieldObject>>
  ) => void;
  user: FieldObject;
}

export const Username: React.FC<PropsUsername>= (props: PropsUsername) => {
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
          {props.user.response}
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};
