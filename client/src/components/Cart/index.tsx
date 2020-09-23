import React, { useContext } from "react";
import { StateContext } from "../../StateProvider/StateProvider";
import { Box, Typography } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { ICart } from "../../interfaces/CartInterface";

export const Cart = () => {
  const [state, dispatch] = useContext(StateContext);
  const cart = state.cart;

  return (
    <div>
      {cart.map((item: ICart) => (
        <Box key={uuid()}>
          <Typography>{item.id}</Typography>
        </Box>
      ))}
    </div>
  );
};
