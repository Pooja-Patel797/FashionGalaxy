import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useStyles } from "./style";
import { RouteComponent } from "../../RouteComponent";
import { CartContext } from "../../context-api/CartProvider";

export const Header = () => {
  const classes = useStyles();
  const context = useContext(CartContext);
  const cart = context.cart;
  const setCart = context.setcart;

  const getCartlength = () => {
    if (cart == null) return " ";
    else return cart.length;
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

            <Link className={classes.link} to="/SignIn">
              <AccountCircleIcon fontSize="large" />
            </Link>

            <Link className={classes.link} to="/">
              <NotificationsIcon fontSize="large" />
            </Link>

            <Link className={classes.link} to="/Cart">
              <Box className={classes.cart}>
                <Box className={classes.notificationIcon}>
                  {getCartlength()}
                </Box>
                <ShoppingCartIcon
                  className={classes.carticon}
                  fontSize="large"
                />
              </Box>
            </Link>
          </Box>
        </AppBar>
      </CssBaseline>
    </React.Fragment>
  );
};
