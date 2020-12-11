import React, { useState, useEffect, useContext } from "react";
import { useStyles } from "./style";
import { Button, Box, Typography } from "@material-ui/core";
import {

  getCartById,
  ICartProduct,
} from "../../../api/cart";
import { StateContext } from "../../../reducers/reducer";
import { getLocalStorage } from "../../../utils/localstorage";
import { getProducts } from "../../../api/product";

export const Checkout: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const context = useContext(StateContext);
  const classes = useStyles();

  let getAmount = (cart: ICartProduct[]) => {
    // setAmount(
    //   cart.reduce((tot, arr) => {
    //     return tot + arr.productId.price;
    //   }, 0)
    // );
  };

  useEffect(() => {
    console.log("in useEffect");
    (async () => {
      if (context.state.isAuthenticated) {
        const cartdata = await getCartById(getLocalStorage("user").userId);
        getAmount(cartdata);
      } else if (getLocalStorage("fashiongalaxycart") != null) {
        const productids: string[] = [];
        const cartdata = getLocalStorage("fashiongalaxycart");
        cartdata.map((item: ICartProduct) => {
          productids.push(item.productId);
        });
        (async () => {
          const productdata = await getProducts(JSON.stringify(productids));
          setAmount(
            productdata.reduce((tot, arr) => {
              return tot + arr.price;
            }, 0)
          );
        })();
      }
    })();
  }, [context]);

  return (
    <Box className={classes.container}>
      <Typography>Total Amount :{amount}</Typography>
      <Button variant="contained" color="primary" endIcon={">"}>
        Checkout
      </Button>
    </Box>
  );
};
