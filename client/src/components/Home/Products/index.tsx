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
import Product from "../../../common/ProductDetailList";
import { useStyles } from "./style";
import { StarRating } from "../StarRating";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { ProductSizes } from "../ProductSize";
import { StateContext } from "../../../StateProvider/StateProvider";
import { useHistory } from "react-router-dom";
import { getAllProducts } from "../../../api/product";

export const Products = () => {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);
  const [size, setSize] = useState("");
  const [product, setProduct] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getAllProducts().then((data) => {
      setProduct(data);
      console.log(data);
    });

    // console.log(product);
  }, []);

  const addToCart = (id: string) => {
    if (state.user !== null) {
      if (size === "") {
        window.alert("please select size");
      } else {
        console.log("product size");
        console.log(size);
        dispatch({
          type: "ADD_TO_CART",
          item: { id: id, size: size },
        });
        setSize("");
      }
    } else {
      history.push("/SignIn");
    }
  };

  return (
    <GridList className={classes.gridList}>
      {product.map((product: Product) => (
        <GridListTile className={classes.gridListTile} key={product._id}>
          <Card className={classes.root} key={product._id}>
            <Link to={`/ProductDetail/${product._id}`}>
              <CardMedia
                className={classes.media}
                image={product.imageUrl[0].cardImage}
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
