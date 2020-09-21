import React, { useContext } from "react";
import { StateContext } from "../../StateProvider/StateProvider";
import { Box, Typography } from "@material-ui/core";
import { v4 as uuid } from "uuid";

export const Cart = () => {
  const [state, dispatch] = useContext(StateContext);
  const cart = state.cart;

  return (
    <div>
      {cart.map((item: any) => (
        <Box key={uuid()}>
          <Typography>{item.id}</Typography>
        </Box>
      ))}
    </div>
  );
};
