import React from "react";

const EditProduct = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>
          </div>
          <form action="" className="form">
            <div className="form-group">
              <label htmlFor="">Product Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="">Product Price</label>
              <input type="number" className="form-control" name="price" />
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
