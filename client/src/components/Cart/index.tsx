import React, { useContext } from "react";
import { CartContext } from "../../context-api/CartProvider";
import { Box, Typography } from "@material-ui/core";

export const Cart = () => {
  const context = useContext(CartContext);
  const cart = context.cart;

  return (
    <div>
      {cart.map((item: number) => (
        <Box>
          <Typography>{item}</Typography>
        </Box>
      ))}
    </div>
  );
};
