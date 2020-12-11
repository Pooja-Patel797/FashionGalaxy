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
import { RouteComponentProps } from "react-router-dom";
import { StateContext } from "../../reducers/reducer";
import { v4 as uuid } from "uuid";
import IProduct, { getProduct } from "../../api/product";
import { initialProduct } from "../../common/productdetaillist";
import { Comment } from "./comment";
import { AddToCart } from "../../utils/availthecart";
import { setLocalStorage } from "../../utils/localstorage";
import { ICartProduct } from "../../api/cart";
type TParams = { id: string };

export const ProductDetails: React.FC<RouteComponentProps<TParams>> = ({
  match,
}) => {
  const context = useContext(StateContext);
  const [open, setOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<ICartProduct[]>([]);

  const [pid, setPID] = useState(0);
  const [product, setProduct] = useState<IProduct>(initialProduct);
  const classes = useStyles();
  const id = match.params.id;
  let size = "";

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      const data = await getProduct(id);
      setProduct(data);
      console.log(product);
    })();
  }, []);

  const setSize = (s: string) => {
    size = s;
  };
  const addToCart = async (id: string) => {
    if (size === "") {
      window.alert("please select size");
    } else {
      const item = { productId: id, size: size };
      setCart([...cart, item]);
      context.dispatch({
        type: "ADD_TO_CART",
        payload: { cart: item },
      });
      console.log("Added to product");
      if (context.state.isAuthenticated) {
        console.log("Yes its me");
        AddToCart(item);
      } else {
        console.log("set localstoage");
        console.log(context.state.cart);
        setLocalStorage("fashiongalaxycart", cart);
      }
      setSize("");
    }
    console.log("THE END");
  };

  const handleClick = (index: number) => {
    setPID(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.grid}>
        <Box className={classes.imageWrapper}>
          {product.imageUrl.gridImage.map((url: string, index: number) => (
            <Box className={classes.imageWrapper__image} key={uuid()}>
              <img
                className={classes.productImage}
                src={url}
                alt={url}
                id={JSON.stringify(index)}
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
              src={product.imageUrl.backdropImage[pid]}
              alt={product.imageUrl.backdropImage[pid]}
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
