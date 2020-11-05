import { Box, List, ListItem, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { StarRating } from "../../../home/starRating";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IComment from "../../../../api/comment";

interface IProductComments {
  comments: IComment[];
}

export const ProductComments: React.FC<IProductComments> = (props) => {
  const classes = useStyles();

  return (
    <Box>
      {console.log("In ProductComments")}
      {console.log(props.comments)}
      <hr></hr>
      <h3>{"What others has to say about this product"}</h3>
      <List className={classes.list}>
        {props.comments.map((comment: IComment, index: number) => {
          return (
            <ListItem className={classes.listItem} key={index}>
              <Box className={classes.listItem__gridItem}>
                <AccountCircleIcon />
                <p className={classes.listItem__gridItem__heading}>{"Pooja"}</p>
                <Box className={classes.listItem__gridItem__rating}>
                  <StarRating rating={comment.rating} />
                </Box>
              </Box>
              <Box className={classes.listItem__gridItem}></Box>
              <p className={classes.listItem__gridItem__date}>
                {comment.createdAt}
              </p>
              <Typography className={classes.listItem__gridItem__comment}>
                {comment.comment}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
