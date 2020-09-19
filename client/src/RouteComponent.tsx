import React, { useContext, useEffect } from "react";
import { SignIn } from "./components/account/SignIn";
import { Register } from "./components/account/Register";
import { Cart } from "./components/Cart";
import { ProductDetails } from "./components/ProductDetails";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/LayOut";
import { CartProvider } from "./context-api/CartProvider";
import { StateContext } from "../src/StateProvider/StateProvider";
import { getSession } from "../src/common/SesssionStorage";

export const RouteComponent = () => {
  const [state, dispatch] = useContext(StateContext);
  useEffect(() => {
    const user = getSession("user");
    if (user) {
      dispatch({
        type: "LOGIN_USER",
        user: user,
      });
    }
  }, [dispatch]);

  return (
    <Router>
      <CartProvider>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/SignIn" exact component={SignIn} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Cart" exact component={Cart} />
            <Route path="/ProductDetail/:id" exact component={ProductDetails} />
            {/* <Route path="/Auth" exact component={AuthUser} /> */}
          </Switch>
        </Layout>
      </CartProvider>
    </Router>
  );
};
