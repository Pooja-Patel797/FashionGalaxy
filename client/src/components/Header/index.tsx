import React, { useContext } from "react";
import { CssBaseline, AppBar, Box, InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useStyles } from "./style";
import { StateContext } from "../../StateProvider/StateProvider";
import { DropDown } from "./DropDown";

export const Header = () => {
  console.log("In header");

  const [state, dispatch] = useContext(StateContext);
  const [anchorEl, setAnchorEl] = React.useState();

  const classes = useStyles();

  const getCartlength = () => {
    return state.cart.length;
  };
  const getUserName = () => {
    if (state.user != null) {
      return "hello " + state.user.username;
    } else {
      return "hello guest!!";
    }
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    console.log("in click");
  };

  return (
    <React.Fragment>
      <CssBaseline>
        <AppBar
          position="relative"
          color="transparent"
          className={classes.header}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            m={1}
            p={1}
            // bgcolor="background.paper"
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
              <Box className={classes.link} onClick={handleClick}>
                <AccountCircleIcon fontSize="default" />
              </Box>
              <DropDown anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
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
