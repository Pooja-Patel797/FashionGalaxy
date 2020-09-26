import React, { useContext } from "react";
import { Paper, Menu, MenuItem, Box } from "@material-ui/core";
import { StateContext } from "../../../StateProvider/StateProvider";
import { useStyles } from "./style";
import { Link } from "react-router-dom";

export interface PropsDropDown {
  AnchorEL: React.FormEvent<HTMLInputElement>;
  setAnchorEl: React.Dispatch<React.SetStateAction<null>>;
}

export const DropDown = (props: any) => {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);

  const handleClose = () => {
    props.setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT_USER",
      user: null,
    });
    handleClose();
  };

  const getMenu = () => {
    if (state.user != null) {
      console.log("in menu if");
      return (
        <Box>
          <MenuItem>
            <strong>{"Welcome " + state.user.username}</strong>
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
