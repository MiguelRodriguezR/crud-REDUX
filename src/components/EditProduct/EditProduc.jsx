import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductAction } from "../../actions/productActions";
import { useHistory } from "react-router-dom";

const EditProduct = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [product, saveProduct] = useState({
    name: "",
    price: "",
  });

  const productEdit = useSelector((state) => state.products.productEdit);

  useEffect(() => {
    saveProduct(productEdit);
  }, [productEdit]);

  if(!productEdit) return null;

  const onChangeForm = (e) => {
    saveProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdate = (e) => {
    e.preventDefault();
    dispatch( updateProductAction(product) )
    history.push('/')
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>
          </div>
          <form action="" className="form" onSubmit={submitUpdate}>
            <div className="form-group">
              <label htmlFor="">Product Name</label>
              <input
                type="text"
                className="form-control"
                onChange={onChangeForm}
                name="name"
                value={product.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Product Price</label>
              <input
                type="number"
                className="form-control"
                onChange={onChangeForm}
                name="price"
                value={product.price}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
