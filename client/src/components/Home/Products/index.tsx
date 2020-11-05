import React, { useContext, useState, useEffect } from "react";
import {
  Typography,
  GridListTile,
  GridList,
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { useStyles } from "./style";
import { StarRating } from "../starRating";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { ProductSizes } from "../productSize";
import { StateContext } from "../../../reducers/reducer";
import IProduct, { getAllProducts } from "../../../api/product";
import { AddToCart } from "../../../utils/availthecart";
import { setLocalStorage } from "../../../utils/localstorage";
import { ICartProduct } from "../../../api/cart";

export const Products: React.FC = () => {
  const classes = useStyles();
  const context = useContext(StateContext);
  const [cart, setCart] = useState<ICartProduct[]>([]);
  const [product, setProduct] = useState<Array<IProduct>>([]);
  let size = "";

  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      setProduct(data);
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
        console.log("Yes its me ;)");
        AddToCart(item);
      } else {
        console.log("set localstoage");
        setLocalStorage("fashiongalaxycart", [...cart, item]);
      }
      setSize("");
    }
    console.log("THE END");
  };

  return (
    <GridList className={classes.gridList}>
      {console.log("Repeating-->")}
      {product.map((product: IProduct) => (
        <GridListTile className={classes.gridListTile} key={product._id}>
          <Card className={classes.root} key={product._id}>
            <Link to={`/ProductDetail/${product._id}`}>
              <CardMedia
                className={classes.media}
                image={product.imageUrl.cardImage}
                title={product.title}
              />
            </Link>
            <CardHeader
              title={product.brand}
              subheader={product.title}
              className={classes.card_header}
            />
            <CardContent className={classes.card_content}>
              <Box className={classes.card_content_box}>
                <ProductSizes size={product.size} setSize={setSize} />
                <Typography className={classes.card_content_price}>
                  Price :{product.price}
                </Typography>
              </Box>
            </CardContent>
            <CardActions className={classes.card_action}>
              <IconButton
                onClick={() => addToCart(product._id)}
                aria-label="add to Cart"
                key={product._id}
              >
                <AddShoppingCartIcon />
              </IconButton>
              <StarRating rating={product.rating} />
            </CardActions>
          </Card>
        </GridListTile>
      ))}
    </GridList>
  );
};
