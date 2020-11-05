import React, { useContext, useEffect } from "react";
import { StateContext } from "../../reducers/reducer";
import { Box, Typography, Select, MenuItem } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { getCartById, ICartProduct } from "../../api/cart";
import { getProducts } from "../../api/product";
import { useStyles } from "./style";
import { getLocalStorage } from "../../utils/localstorage";

export const Cart: React.FC = () => {
  const classes = useStyles();
  const context = useContext(StateContext);
  const [quantity, setQuantity] = React.useState(0);
  const cart = context.state.cart;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuantity(event.target.value as number);
    console.log(quantity);
  };

  useEffect(() => {
    if (context.state.isAuthenticated) {
      (async () => {
        const res = await getCartById(getLocalStorage("user").userId);
        if (res.length != 0) console.log(res);
      })();
    } else {
      if (getLocalStorage("fashiongalaxycart") != null) {
        const cartData = getLocalStorage("fashiongalaxycart");
        const productIds: string[] = [];
        let i = 0;
        (async () => {
          cartData.map((item: ICartProduct) => {
            productIds[i++] = item.productId;
          });
          const res = await getProducts(JSON.stringify(productIds));
          console.log(res);
        })();
      }
    }
  });
  return (
    <Box className={classes.container}>
      {cart.map((item: ICartProduct) => (
        <Box className={classes.grid} key={uuid()}>
          <Box className={classes.grid__item1}>
            <img src="" alt="" />
          </Box>
          <Box className={classes.grid__item2}>
            <Typography>{item.productId}</Typography>
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
