import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, START_DOWNLOAD_PRODUCTS, DOWNLOAD_PRODUCTS_SUCCESS, DOWNLOAD_PRODUCTS_ERROR, GET_PRODUCT_DELETE, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_ERROR } from "../types";
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

export function getProductsAction(){
    return async (dispatch) => {
        dispatch( downloadProducts() );
        try {
            const res = await clientAxios.get('products')
            dispatch( downloadProductsSuccess(res.data) );
        } catch (error) {
            console.log(error);
            dispatch( downloadProductError(true) );
            Swal.fire({
                icon: 'Error',
                title: 'Error',
                text: 'There was an error, try again'
            })
        }
    }
}


const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true,
})

const downloadProductsSuccess = (products) => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products,
})

const downloadProductError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true,
})

export function deleteProductAction(id){
    return async (dispatch) => {
        dispatch( getProductDelete(id) );
        try {
            await clientAxios.delete(`products/${id}`)
            dispatch( deleteProductsSuccess() );
            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch( deleteProductError(true) );
            Swal.fire({
                icon: 'Error',
                title: 'Error',
                text: 'There was an error, try again'
            })
        }
    }
}

const getProductDelete = (id) => ({
    type: GET_PRODUCT_DELETE,
    payload: id,
})

const deleteProductsSuccess = (products) => ({
    type: PRODUCT_DELETE_SUCCESS,
    payload: products,
})

const deleteProductError = () => ({
    type: PRODUCT_DELETE_ERROR,
    payload: true,
})