import React from "react";
import { useStyles } from "./style";
import Rating from "@material-ui/lab/Rating";

//const star: number[] = [1, 2, 3, 4, 5];
export const StarRating = (props: any) => {
  const [value, setValue] = React.useState(props.product.rating);
  const classes = useStyles();

  // const changeRating = (rate: number) => {
  //   setValue(rate);
  // };
  return (
    <div className={classes.star}>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
};
