import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  Backdrop,
} from "@material-ui/core";
import { ProductSizes } from "../home/productSize";
import { useStyles } from "./style";
import { StarRating } from "../home/starRating";
import { createCart } from "../../api/cart";
import { RouteComponentProps } from "react-router-dom";
import { StateContext } from "../../stateprovider/stateprovider";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { getProduct } from "../../api/product";
import Product, { initialProduct } from "../../common/productdetaillist";
import { Comment } from "./comment";
type TParams = { id: any };

export const ProductDetails = ({ match }: RouteComponentProps<TParams>) => {
  const [state, dispatch] = useContext(StateContext);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState("");
  const [rating, setRating] = useState(0);
  const [pid, setPID] = useState(0);
  const [product, setProduct] = useState(initialProduct);
  const history = useHistory();
  const classes = useStyles();
  const id = match.params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      let data = await getProduct(id);
      setProduct(data);
      console.log(product);
    })();
  }, []);

  const addToCart = async (id: string) => {
    if (size === "") {
      window.alert("please select size");
    } else {
      console.log("product size");
      console.log(size);
      dispatch({
        type: "ADD_TO_CART",
        item: [{ productId: id, size: size }],
      });
      setSize("");
    }
  };

  let handleClick = (index: number) => {
    setPID(index);
    setOpen(true);
  };

  let handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.grid}>
        <Box className={classes.imageWrapper}>
          {product.imageUrl[0].gridImage.map((url: any, index: any) => (
            <Box className={classes.imageWrapper__image} key={uuid()}>
              <img
                className={classes.productImage}
                src={url}
                alt={url}
                id={index}
                onClick={() => handleClick(index)}
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
              src={product.imageUrl[0].backdropImage[pid]}
              alt={product.imageUrl[0].backdropImage[pid]}
            />
          </Backdrop>
        </Box>
        <Box className={classes.productDetailsWrapper}>
          <Box className={classes.productDetailsBox}>
            <Typography variant="h3">{product.brand}</Typography>
            <Typography variant="subtitle1">{product.title}</Typography>
            <br />
            <Typography variant="h6">Product details :</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <br />
            <Typography variant="h4"> Price :{product.price} Rs</Typography>
            <br />
            <Box>
              <Typography variant="h6">Size Available :</Typography>
              <ProductSizes size={product.size} setSize={setSize} />
            </Box>
            <br />
            <StarRating rating={product.rating} />
            <br />
            <Button onClick={() => addToCart(product._id)} variant="contained">
              Add to cart
            </Button>
            <br />
            <Box>
              <Typography variant="body1">
                Offers Available :{product.offers}
              </Typography>
            </Box>
          </Box>

          <Comment pid={id} />
        </Box>
      </Box>
    </Container>
  );
};
