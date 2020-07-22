import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction, getProductUpdateAction } from "../../actions/productActions";
import Swal from "sweetalert2";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const confirmDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteProductAction(product.id));
      }
    });
  };

  const redirectUpdate = () => {
    dispatch( getProductUpdateAction(product));
    history.push(`products/edit/${product.id}`);
  };

  return (
    <tr>
      <td>{product.name}</td>
      <td>
        $ <span className="font-weight-bold">{product.price}</span>
      </td>
      <td className="acciones">
        <button type="button" onClick={redirectUpdate} className="btn btn-primary mr-2">
          Edit
        </button>
        <button onClick={confirmDelete} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Product;
