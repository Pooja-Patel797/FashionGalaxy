import React, { useContext } from "react";
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
  Paper,
} from "@material-ui/core";
import Product, { ProductDetailList } from "../../../common/ProductDetailList";
import { useStyles } from "./style";
import { StarRating } from "../StarRating";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { ProductSizes } from "../ProductSize";
import { StateContext } from "../../../StateProvider/StateProvider";
import { useHistory } from "react-router-dom";

export const Products = (props: any) => {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);
  const history = useHistory();

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

  return (
    <GridList className={classes.gridList}>
      {ProductDetailList.map((product: Product) => (
        <GridListTile className={classes.gridListTile} key={product.pid}>
          <Card className={classes.root} key={product.pid}>
            <Link to={`/ProductDetail/${product.pid}`}>
              <CardMedia
                className={classes.media}
                image={product.img_url[0]}
                title={product.product_name}
              />
            </Link>
            <CardHeader
              title={product.product_brand}
              subheader={product.product_name}
              className={classes.card_header}
            />
            <CardContent className={classes.card_content}>
              <Box className={classes.card_content_box}>
                <ProductSizes size={product.product_size} />
                <Typography className={classes.card_content_price}>
                  Price :{product.price}
                </Typography>
              </Box>
            </CardContent>
            <CardActions className={classes.card_action}>
              <IconButton
                onClick={() => addToCart(product.pid)}
                aria-label="add to Cart"
                key={product.pid}
              >
                <AddShoppingCartIcon />
              </IconButton>
              <StarRating product={product} />
            </CardActions>
          </Card>
        </GridListTile>
      ))}
    </GridList>
  );
};
