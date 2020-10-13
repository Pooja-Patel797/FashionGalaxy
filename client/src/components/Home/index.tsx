import React, { useEffect } from "react";
import { CssBaseline, Container, Box, Paper } from "@material-ui/core";
import { useStyles } from "./style";
import { Products } from "./Products";
import { Carousel } from "./Carousel";
import { Brands } from "./Brands";

export const Home = () => {
  const classes = useStyles();
  useEffect(() => {
    console.log("In home");
    window.scrollTo(0, 0);
  });

  return (
    <React.Fragment>
      <CssBaseline>
        <Container className={classes.root_container}>
          <Box className={classes.carousel_container}>
            <Carousel />
          </Box>

          <Box className={classes.brand_container}>
            <Paper className={classes.product_heading}>
              <strong>OUR TOP-BRANDS</strong>
            </Paper>
            <Brands />
          </Box>
          <Box className={classes.product_container}>
            <Paper className={classes.product_heading}>
              <strong>SPECIAL COLLECTION</strong>
            </Paper>
            <Products />
          </Box>
        </Container>
      </CssBaseline>
    </React.Fragment>
  );
};
