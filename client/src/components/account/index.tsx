import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React, { useState } from "react";
import { useStyles } from "./style";
import { Link } from "react-router-dom";

export const FormLayout = (props: any) => {
  const [isLogin, setLogin] = useState(true);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline>
        <div className={classes.form}>
          <ButtonGroup className={classes.button} variant="text">
            <Button onClick={() => setLogin(true)}>
              <Link className={classes.link} to="/SignIn">
                Sign In
              </Link>
            </Button>

            <Button onClick={() => setLogin(true)}>
              <Link className={classes.link} to="/Register">
                Register
              </Link>
            </Button>
          </ButtonGroup>

          {props.children}
        </div>
      </CssBaseline>
    </React.Fragment>
  );
};
