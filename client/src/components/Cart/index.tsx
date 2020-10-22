import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../stateprovider/stateprovider";
import { Box, Typography, Select, MenuItem } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { ICart } from "../../interfaces/cartInterface";
import { getProduct } from "../../api/product";
import { useStyles } from "./style";

export const Cart = () => {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);
  const [quantity, setQuantity] = React.useState(0);
  const [product, setProduct] = useState({});
  const cart = state.cart;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuantity(event.target.value as number);
    console.log(quantity);
  };

  useEffect(() => {
    (async () => {
      cart.map((item: string) => {
        // await getProduct(item.id);
      });
    })();
  });
  return (
    <Box className={classes.container}>
      {cart.map((item: ICart) => (
        <Box className={classes.grid} key={uuid()}>
          <Box className={classes.grid__item1}>
            <img src="" alt="" />
          </Box>
          <Box className={classes.grid__item2}>
            <Typography>{"Hiii"}</Typography>
            <Typography></Typography>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={quantity}
              onChange={handleChange}
              // input={<BootstrapInput />}
            >
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
            </Select>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
