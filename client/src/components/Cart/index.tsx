import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../reducers/reducer";
import {
  Box,
  Typography,
  GridList,
  GridListTile,
  Button,
} from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { getCartById, ICartProduct } from "../../api/cart";
import { getProducts } from "../../api/product";
import { useStyles } from "./style";
import { getLocalStorage } from "../../utils/localstorage";
import { Counter } from "./counter";
import { Link } from "react-router-dom";
import IProduct from "../../api/product";
import { Checkout } from "./checkout";
import DeleteIcon from "@material-ui/icons/Delete";



export const Cart: React.FC = () => {
  const classes = useStyles();
  const context = useContext(StateContext);
  const [quantity, setQuantity] = useState(0);
  const [cartdata, setCartdata] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<{ id: string; quantity: number }>({
    id: "",
    quantity: 1,
  });
  const cart = context.state.cart;

  const getProductsInCart=async (res:ICartProduct[])=>{
    const productIds: string[] = [];
    let i = 0;

      res.map((item: ICartProduct) => {
        productIds[i++] = item.productId;
      })
      const data: IProduct[] = await getProducts(JSON.stringify(productIds));
      setCartdata(data);
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuantity(event.target.value as number);
    console.log(quantity);
  };

  useEffect(() => {
    if (context.state.isAuthenticated) {
      (async () => {
        const res = await getCartById(getLocalStorage("user").userId);
      getProductsInCart(res);
      
      })();
    } else {
      if (getLocalStorage("fashiongalaxycart") != null) {
        const cartData:ICartProduct[]= getLocalStorage("fashiongalaxycart");
        getProductsInCart(cartData);
      }
    }
  }, [context]);
  return (
    <Box className={classes.root}>
      <GridList className={classes.gridList} cols={1}>
        {cartdata.map((tile: any, index: number) => (
          <GridListTile className={classes.gridListTile} key={index}>
            <Box className={classes.gridListTile}>
              <Box className={classes.gridListTile__image}>
                <Link to={`/ProductDetail/${tile.productId._id}`}>
                  <img
                    src={tile.productId.imageUrl.cardImage}
                    alt={tile.productId.title}
                    height="100%"
                  />
                </Link>
              </Box>
              <Box className={classes.gridListTile__content}>
                <Typography>Rs. {tile.productId.price}</Typography>
                <Typography>Selected Size :{tile.size}</Typography>
                <Counter
                  quantity={tile.productId.quantity}
                  product={product}
                  setProduct={setProduct}
                  id={tile.productId._id}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </GridListTile>
        ))}
      </GridList>
      <Checkout />
    </Box>
  );
};
