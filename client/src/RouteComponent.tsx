import React from "react";
import { SignIn } from "./components/SignInOrSignUp";
import { Cart } from "./components/Cart";
import { ProductDetails } from "./components/ProductDetails";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/LayOut";
import { CartProvider } from "./context-api/CartProvider";

export const RouteComponent = () => {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/SignIn" exact component={SignIn} />
            <Route path="/Cart" exact component={Cart} />
            <Route path="/ProductDetail/:id" exact component={ProductDetails} />
          </Switch>
        </Layout>
      </CartProvider>
    </Router>
  );
};
