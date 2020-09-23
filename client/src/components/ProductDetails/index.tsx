import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  Backdrop,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ProductSizes } from "../Home/ProductSize";
import { useStyles } from "./style";
import { StarRating } from "../Home/StarRating";
import { ProductDetailList } from "../../common/ProductDetailList";
import { RouteComponentProps } from "react-router-dom";
import { StateContext } from "../../StateProvider/StateProvider";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

type TParams = { id: any };

export const ProductDetails = ({ match }: RouteComponentProps<TParams>) => {
  const [state, dispatch] = useContext(StateContext);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState("");
  const [id, setId] = useState(0);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let addToCart = (id: string) => {
    if (state.user !== null) {
      if (size !== "") {
        dispatch({
          type: "ADD_TO_CART",
          item: { id: id, size: size },
        });
        setSize("");
      } else {
        window.alert("Please select the size");
      }
    } else {
      history.push("/SignIn");
    }
  };

  let handleClick = (event: any, index: number) => {
    setId(index);
    setOpen(true);
  };

  let handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const productId = match.params.id;
  const product = ProductDetailList[parseInt(productId)];
  console.log(product);
  return (
    <Container className={classes.container}>
      <Box className={classes.grid}>
        <Box className={classes.imageWrapper}>
          {product.img_url.gridImage.map((url: any, index: any) => (
            <Box key={uuid()}>
              <img
                className={classes.productImage}
                src={url}
                alt={url}
                id={index}
                onClick={(event) => handleClick(event, index)}
              />
            </Box>
          ))}
          <Backdrop
            className={classes.backdrop}
            open={open}
            onClick={handleClose}
          >
            <img
              className={classes.backdropProductImage}
              src={product.img_url.backdropImage[id]}
              alt={product.img_url.backdropImage[id]}
            />
          </Backdrop>
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
              <ProductSizes size={product.product_size} setSize={setSize} />
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
