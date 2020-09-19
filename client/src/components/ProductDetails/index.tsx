import React, { useContext, useEffect } from "react";
import { Typography, Container, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ProductSizes } from "../Home/ProductSize";
import { useStyles } from "./style";
import { StarRating } from "../Home/StarRating";
import { ProductDetailList } from "../../common/ProductDetailList";
import { RouteComponentProps } from "react-router-dom";
import { StateContext } from "../../StateProvider/StateProvider";
import { useHistory } from "react-router-dom";

type TParams = { id: any };

export const ProductDetails = ({ match }: RouteComponentProps<TParams>) => {
  const [state, dispatch] = useContext(StateContext);
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let addToCart = (id: number) => {
    if (state.user !== null) {
      dispatch({
        type: "ADD_TO_CART",
        item: id,
      });
    } else {
      history.push("/SignIn");
    }
  };

  const classes = useStyles();
  const productId = match.params.id;
  const product = ProductDetailList[productId - 1];
  return (
    <Container className={classes.container}>
      <Box className={classes.grid}>
        <Box className={classes.imageWrapper}>
          {product.img_url.map((url: any) => (
            <Box>
              <Link to="">
                <img className={classes.productImage} src={url} alt={url} />
              </Link>
            </Box>
          ))}
        </Box>
        <Box className={classes.productDetailsWrapper}>
          <Box className={classes.productDetailsBox}>
            <Typography variant="h3">{product.product_brand}</Typography>
            <Typography variant="subtitle1">{product.product_name}</Typography>
            <br />
            <Typography variant="h6">Product details :</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <br />
            <Typography variant="h4"> Price :{product.price} Rs</Typography>
            <br />
            <Box>
              <Typography variant="h6">Size Available :</Typography>
              <ProductSizes size={product.product_size} />
            </Box>
            <br />
            <StarRating product={product} />
            <br />
            <Button onClick={() => addToCart(product.pid)} variant="contained">
              Add to cart
            </Button>
            <br />
            <Box>
              <Typography variant="body1">Offers Available :</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
