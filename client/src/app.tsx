import React, { useContext, useEffect } from "react";
import { SignIn } from "./components/account/signIn";
import { Register } from "./components/account/register";
import { Cart } from "./components/cart";
import { ProductDetails } from "./components/productdetails";
import { Home } from "./components/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/layout";
// import { CartProvider } from "./context-api/CartProvider";
import { StateContext } from "./stateprovider/stateprovider";
import { getLocalStorage } from "./utils/localstorage";

export const App = () => {
  const [state, dispatch] = useContext(StateContext);
  useEffect(() => {
    const user = getLocalStorage("user");
    console.log("------Authenticating...-------");
    if (user) {
      console.log("**inside user***");
      dispatch({
        type: "LOGIN_USER",
        isAuthenticated: { isAuthenticated: true },
      });
    }
  }, []);

  return (
    <Router>
      {/* <CartProvider> */}
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/SignIn" exact component={SignIn} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/ProductDetail/:id" exact component={ProductDetails} />
        </Switch>
      </Layout>
      {/* </CartProvider> */}
    </Router>
  );
};
