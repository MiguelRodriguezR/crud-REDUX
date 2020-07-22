import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  GET_PRODUCT_DELETE,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_ERROR,
  GET_PRODUCT_UPDATE,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_ERROR,
} from "../types";

const initialState = {
  products: [],
  error: null,
  loading: false,
  productDelete: null,
  productEdit: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_DOWNLOAD_PRODUCTS:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case PRODUCT_DELETE_ERROR:
    case DOWNLOAD_PRODUCTS_ERROR:
    case PRODUCT_UPDATE_ERROR:
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DOWNLOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case GET_PRODUCT_DELETE:
      return {
        ...state,
        productDelete: action.payload,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.productDelete
        ),
        productDelete: null,
      };
    case GET_PRODUCT_UPDATE:
      return {
        ...state,
        productEdit : action.payload
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        products: state.products.map( prod => 
          prod.id === action.payload.id ? prod = action.payload : prod
        ),
        productEdit : null
      };
    default:
      return state;
  }
}
