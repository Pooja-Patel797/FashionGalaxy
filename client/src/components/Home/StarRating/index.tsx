import React from "react";
import { useStyles } from "./style";
import Rating from "@material-ui/lab/Rating";
import Product from "../../../common/ProductDetailList";

interface RatingProps {
  rating: number;
}

export const StarRating = (props: RatingProps) => {
  const [value, setValue] = React.useState(props.rating);
  const classes = useStyles();

  return (
    <div className={classes.star}>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
};
