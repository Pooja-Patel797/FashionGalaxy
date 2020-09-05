import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, IconButton, Avatar } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card_content_sizelist: {
    display: "flex",
    flexDirection: "row",
    padding: "2px",
  },
  card_content_sizeicon: {
    margin: "3px",

    [theme.breakpoints.between(0, 599)]: {
      width: "10vw",
      height: "10vw",
    },
    [theme.breakpoints.between(600, 1920)]: {
      width: "3vw",
      height: "3vw",
    },
  },
  IconButton: {
    padding: "0px",
  },
}));

export const ProductSizes = (props: any) => {
  const classes = useStyles();
  const sizes: any = props.size;
  return (
    <Box className={classes.card_content_sizelist}>
      {sizes.map((size: string) => (
        <IconButton className={classes.IconButton} key={size}>
          <Avatar
            className={classes.card_content_sizeicon}
            alt={size}
            src=" "
            key={size}
          />
        </IconButton>
      ))}
    </Box>
  );
};
