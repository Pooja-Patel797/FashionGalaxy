import React from "react";
import { GridList, GridListTile, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { BrandList } from "../../../common/BrandList";
import { useStyles } from "./style";
import { v4 as uuid } from "uuid";
export const Brands = () => {
  const classes = useStyles();

  return (
    <GridList className={classes.gridList}>
      {BrandList.map((brand) => (
        <GridListTile className={classes.gridListTile} key={uuid()}>
          <Box className={classes.brand}>
            <Box className={classes.brandlogo}>
              <Link to="">
                <img
                  className={classes.brandlogoImg}
                  src={brand.brandlogo}
                  alt={brand.brandname}
                />
              </Link>
            </Box>
            <Box className={classes.brandDetails}>
              <h3 className={classes.brandDetails_heading1}>
                {brand.brandname}
              </h3>

              <strong>
                <h4 className={classes.brandDetails_heading2}>
                  {brand.brandOffer}
                </h4>
              </strong>
            </Box>
          </Box>
        </GridListTile>
      ))}
    </GridList>
  );
};
