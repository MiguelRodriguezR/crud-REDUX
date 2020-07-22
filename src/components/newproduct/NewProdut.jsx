import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewProductAction } from "../../actions/productActions";
import { showAlertAction, hideAlertAction } from "../../actions/alertActions";

const NewProduct = ({ history }) => {
  const [name, saveName] = useState("");
  const [price, savePrice] = useState(0);

  const dispatch = useDispatch();
  const addProduct = (product) => dispatch(createNewProductAction(product));
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const alert = useSelector((state) => state.alert.alert);

  const submitNewProdut = (e) => {
    e.preventDefault();
    if (name.trim() === "" || price <= 0) {
      const alert = {
        msg: "all fields are required",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlertAction(alert));
      return;
    }

    dispatch(hideAlertAction());

    addProduct({
      name,
      price,
    });

    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Add Product</h2>
            {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
          </div>
          <form action="" className="form" onSubmit={submitNewProdut}>
            <div className="form-group">
              <label htmlFor="">Product Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => saveName(e.target.value)}
                className="form-control"
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Product Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => savePrice(Number(e.target.value))}
                className="form-control"
                name="price"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >
              Add
            </button>
            {loading ? <p>Loading...</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-2 text-center">ERROR</p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
