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
    backgroundImage: "radial-gradient(#00b3b3 15%, #009999 35%, #008b8b 50%);",

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
interface ProductProps {
  size: string[];
  // setSize: React.Dispatch<React.SetStateAction<string>>;
  setSize: (data: string) => void;
}

export const ProductSizes: React.FC<ProductProps> = (props) => {
  const classes = useStyles();
  const sizes: string[] = props.size;
  return (
    <Box className={classes.card_content_sizelist}>
      {sizes.map((size: string) => (
        <IconButton
          className={classes.IconButton}
          key={size}
          onClick={() => {
            props.setSize(size);
          }}
        >
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
