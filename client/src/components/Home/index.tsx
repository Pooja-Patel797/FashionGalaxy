import React, { useEffect } from "react";
import { CssBaseline, Container, Box } from "@material-ui/core";
import { useStyles } from "./style";
import { Products } from "./Products";
import { Carousel } from "../Carousel";

export const Home = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <React.Fragment>
      <CssBaseline>
        <Container className={classes.container}>
          <Carousel />
          <Box className={classes.container_box}>
            <Products />
          </Box>
        </Container>
      </CssBaseline>
    </React.Fragment>
  );
};
