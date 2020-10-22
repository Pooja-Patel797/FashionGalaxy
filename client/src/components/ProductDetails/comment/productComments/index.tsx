import { Box, List, ListItem, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { StarRating } from "../../../home/starRating";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const ProductComments = (props: any) => {
  const classes = useStyles();

  return (
    <Box>
      {console.log("In ProductComments")}
      {console.log(props.comments)}
      <hr></hr>
      <h3>{"What others has to say about this product"}</h3>
      <List className={classes.list}>
        {props.comments.map((comment: any, index: number) => {
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
                {comment.dateOfCreation}
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
