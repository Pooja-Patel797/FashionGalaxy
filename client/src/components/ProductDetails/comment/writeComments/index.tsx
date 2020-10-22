import React from "react";
import { TextField, Box, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useStyles } from "./style";
import { createComments } from "../../../../api/comment";
import { getLocalStorage } from "../../../../utils/localstorage";

export const WriteComment = (props: any) => {
  const classes = useStyles();
  const [comment, setComment] = React.useState<string | null>(" ");
  const [rating, setRating] = React.useState<number | null>(0);

  let handleSubmit = async (event: any) => {
    let userinfo = getLocalStorage("user");

    event.preventDefault();
    await createComments({
      user: userinfo.userId,
      product: props.pid,
      comment: comment,
      rating: rating,
    });
    console.log("done");
    props.getProductComments(props.pid);

    setComment("");
    setRating(0);
  };
  return (
    <Box className={classes.flex}>
      <TextField
        id="outlined-multiline-static"
        label="Write your review here"
        multiline
        rows={4}
        variant="outlined"
        onChange={(event) => {
          setComment(event.target.value);
        }}
        value={comment}
      />
      <Box className={classes.flex__child2}>
        <Rating
          name="hover-feedback"
          value={rating}
          precision={0.2}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => handleSubmit(event)}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
