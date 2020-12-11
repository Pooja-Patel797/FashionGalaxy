import {Link,CssBaseline,Typography} from "@material-ui/core";
import React from "react";

import { useStyles } from "./style";

export const Footer:React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </footer>
      </CssBaseline>
    </React.Fragment>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright Â© "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
