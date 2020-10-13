import React, { useEffect, useState } from "react";
import { TextField, Box, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useStyles } from "./style";
import { createComments } from "../../../api/comment";
import { getSession } from "../../../utils/SesssionStorage";
import { ProductComments } from "./productComments";
import { getCommentsById } from "../../../api/comment";

let initialComment = {
  comment: "",
  rating: 0,
};

type Iprops = {
  pid: string;
};

export const Comment = (props: Iprops) => {
  const [comment, setComment] = React.useState<string | null>(" ");
  const [comments, setComments] = useState([]);
  const [rating, setRating] = React.useState<number | null>(0);

  const classes = useStyles();

  let getProductComments = (pid: string) => {
    getCommentsById(pid).then((data) => {
      setComments(data);
    });
  };
  useEffect(() => {
    getProductComments(props.pid);
  }, [comment]);

  let handleSubmit = (event: any) => {
    event.preventDefault();
    createComments({
      userId: getSession("user").userId,
      productId: props.pid,
      comment: comment,
      rating: rating,
    }).then(() => {
      getProductComments(props.pid);
    });

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
      <ProductComments comments={comments} />
    </Box>
  );
};
