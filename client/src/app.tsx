import React, { useContext, useEffect } from "react";
import { SignIn } from "./components/account/signIn";
import { Register } from "./components/account/register";
import { Cart } from "./components/cart";
import { ProductDetails } from "./components/productdetails";
import { Home } from "./components/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/layout";
import { StateContext } from "./reducers/reducer";
import { getLocalStorage } from "./utils/localstorage";

export const App: React.FC = () => {
  const context = useContext(StateContext);
  useEffect(() => {
    const user = getLocalStorage("user");
    if (user) {
      context.dispatch({
        type: "LOGIN_USER",
        payload: { isAuthenticated: true },
      });
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/SignIn" exact component={SignIn} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/ProductDetail/:id" exact component={ProductDetails} />
        </Switch>
      </Layout>
    </Router>
  );
};
