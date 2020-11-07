import React from "react";
import { Button, Box } from "@material-ui/core";
import { useStyles } from "./style";
interface ICounter {
  quantity: number;
  product: { id: string; quantity: number };
  setProduct: any;
  id: string;
}
export const Counter: React.FC<ICounter> = (props) => {
  const classes = useStyles();
  let flag = false;
  let increment = () => {
    console.log("incrementing");
    props.setProduct({ id: props.id, quantity: props.product.quantity + 1 });
  };
  let decrement = () => {
    console.log("decrementing");
    props.setProduct({ id: props.id, quantity: props.product.quantity - 1 });
  };

  return (
    <Box className={classes.grid_container}>
      <Button
        className={classes.grid__item1}
        onClick={decrement}
        disabled={props.quantity < 0 ? true : false}
      >
        {"-"}
      </Button>
      <h2 className={classes.grid__heading}>{props.product.quantity}</h2>
      <Button
        className={classes.grid__item2}
        onClick={increment}
        disabled={props.product.quantity > props.quantity ? true : false}
      >
        {"+"}
      </Button>
    </Box>
  );
};
