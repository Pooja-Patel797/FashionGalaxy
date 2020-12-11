import React, { useContext } from "react";
import { Paper, Menu, MenuItem, Box } from "@material-ui/core";
import { StateContext } from "../../../reducers/reducer";
import { useStyles } from "./style";
import { Link } from "react-router-dom";
import { getLocalStorage } from "../../../utils/localstorage";

export interface PropsDropDown {
  anchorEl: (EventTarget & HTMLElement) | null;
  setAnchorEl: React.Dispatch<
    React.SetStateAction<(EventTarget & HTMLElement) | null>
  >;
}

export const DropDown: React.FC<PropsDropDown> = (props) => {
  const classes = useStyles();
  const context = useContext(StateContext);

  const handleClose = () => {
    props.setAnchorEl(null);
  };

  const handleLogout = () => {
    context.dispatch({
      type: "LOGOUT_USER",
      payload: { cart: { productId: "", size: " " }, isAuthenticated: false },
    });
    handleClose();
  };

  const getMenu = () => {
    if (context.state.isAuthenticated) {
      console.log("in menu if");
      return (
        <Box>
          <MenuItem>
            <strong>{"Welcome " + getLocalStorage("user").username}</strong>
          </MenuItem>
          <hr></hr>
          <MenuItem>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Box>
      );
    } else {
      console.log("in menu else");
      return (
        <Box>
          <MenuItem>
            <strong>{"Welcome Guest"}</strong>
          </MenuItem>
          <hr></hr>
          <MenuItem>
            {" "}
            <p>You need to login to access your account. </p>
          </MenuItem>

          <MenuItem>
            {" "}
            <Link to="/SignIn">LogIn </Link>
          </MenuItem>
        </Box>
      );
    }
  };

  return (
    <Box className={classes.root}>
      <Paper>
        <Menu
          id="simple-menu"
          anchorEl={props.anchorEl}
          keepMounted
          open={Boolean(props.anchorEl)}
          onClose={handleClose}
        >
          {getMenu()}
        </Menu>
      </Paper>
    </Box>
  );
};
