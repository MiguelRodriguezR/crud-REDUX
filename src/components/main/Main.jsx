import React from "react";
import Header from "../header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "../products/Prooducts";
import NewProduct from "../newproduct/NewProdut";
import EditProduct from "../EditProduct/EditProduc";

//REDUX
import { Provider } from "react-redux";
import store from "../../store";

const Main = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header></Header>
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Products}></Route>
            <Route exact path="/products/new" component={NewProduct}></Route>
            <Route
              exact
              path="/products/edit/:id"
              component={EditProduct}
            ></Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};

export default Main;
