import React, { useContext } from "react";
import { CssBaseline, AppBar, Box, InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useStyles } from "./style";
import { StateContext } from "../../StateProvider/StateProvider";

export const Header = () => {
  console.log("In header");

  const [state, dispatch] = useContext(StateContext);

  const classes = useStyles();

  const getCartlength = () => {
    return state.cart.length;
  };
  const getUserName = () => {
    if (state.user != null) {
      console.log("inside getusername if");

      return "hello " + state.user.username;
    } else {
      console.log("inside getusername else");

      return "hello guest!!";
    }
  };

  return (
    <React.Fragment>
      <CssBaseline>
        <AppBar position="relative" color="transparent">
          <Box
            display="flex"
            justifyContent="space-between"
            m={1}
            p={1}
            bgcolor="background.paper"
          >
            <img
              className={classes.imgicon}
              alt=""
              src="https://image.shutterstock.com/image-vector/professional-minimalist-letter-bl-lb-260nw-1520104973.jpg"
            />

            <Link className={classes.link} to="/Men">
              Men
            </Link>

            <Link className={classes.link} to="/Women">
              Women
            </Link>

            <Link className={classes.link} to="/Kids">
              Kids
            </Link>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
                <InputBase placeholder="Search…" />
              </div>
            </div>

            <Box className={classes.profile}>
              <Box className={classes.link}>
                <Link to="/SignIn">
                  <AccountCircleIcon fontSize="default" />
                </Link>
              </Box>
              <Box className={classes.username}>
                {" "}
                <strong>{getUserName()} </strong>
              </Box>
            </Box>

            <Link className={classes.link} to="/">
              <NotificationsIcon fontSize="default" />
            </Link>

            <Link className={classes.link} to="/Cart">
              <Box className={classes.cart}>
                <Box className={classes.notificationIcon}>
                  <strong>{getCartlength()}</strong>
                </Box>
                <ShoppingCartIcon
                  className={classes.carticon}
                  fontSize="default"
                />
              </Box>
            </Link>
          </Box>
        </AppBar>
      </CssBaseline>
    </React.Fragment>
  );
};
