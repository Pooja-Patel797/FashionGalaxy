import React from "react";
import { useStyles } from "./style";
import Rating from "@material-ui/lab/Rating";


interface RatingProps {
  rating: number|null;
}

export const StarRating:React.FC<RatingProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.star}>
      <Rating name="read-only" value={props.rating} readOnly />
    </div>
  );
};
