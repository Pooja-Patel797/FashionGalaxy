import React from "react";
import { useStyles } from "./style";
import Rating from "@material-ui/lab/Rating";
import Product from "../../../common/productdetaillist";

interface RatingProps {
  rating: number;
}

export const StarRating = (props: RatingProps) => {
  const classes = useStyles();

  return (
    <div className={classes.star}>
      <Rating name="read-only" value={props.rating} readOnly />
    </div>
  );
};
