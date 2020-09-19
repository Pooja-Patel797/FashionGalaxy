import React from "react";
import { useStyles } from "./style";
import Rating from "@material-ui/lab/Rating";

export const StarRating = (props: any) => {
  const [value, setValue] = React.useState(props.product.rating);
  const classes = useStyles();

  return (
    <div className={classes.star}>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
};
