import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import clientAxios from "../config/axios";
import Swal from 'sweetalert2';

export function createNewProductAction(product){
    return async (dispatch) => {
        dispatch( addProduct() );
        try {
            await clientAxios.post('products', product)
            dispatch( addProductSuccess(product) );
            Swal.fire(
                'Success',
                'Product was added successfully',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch( addProductError(true) );
            Swal.fire({
                icon: 'Error',
                title: 'Error',
                text: 'There was an error, try again'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT
})

const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})