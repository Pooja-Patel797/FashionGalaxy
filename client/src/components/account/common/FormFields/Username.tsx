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
