import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React from "react";
import { useStyles } from "./style";
import { Link } from "react-router-dom";

interface IFormLayout {
  children?: React.ReactNode;
}

export const FormLayout: React.FC<IFormLayout> = (props: IFormLayout) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline>
        <div className={classes.form}>
          <ButtonGroup className={classes.button} variant="text">
            <Button>
              <Link className={classes.link} to="/SignIn">
                Sign In
              </Link>
            </Button>

            <Button>
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
