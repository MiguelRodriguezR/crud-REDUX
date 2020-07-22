import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deleteProductAction } from "../../actions/productActions";
import Swal from 'sweetalert2';


const Product = ({ product }) => {

    const dispatch = useDispatch();

    const confirmDelete = () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                dispatch(deleteProductAction(product.id));
            }
          })
    }

  return (
    <tr>
      <td>{product.name}</td>
      <td>
        $ <span className="font-weight-bold">{product.price}</span>
      </td>
      <td className="acciones">
        <Link
          to={`products/edit/${product.id}`}
          className="btn btn-primary mr-2"
        >
          Edit
        </Link>
        <button onClick={confirmDelete} className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default Product;
