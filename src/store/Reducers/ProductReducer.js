
import data from "../../data";
import { DELETE_PRODUCT, SET_SELECTED_PRODUCT_DETAILS } from './../Action/ProductAction';

const initialState = {
    products: data.products,
    productDetails: null,
}


const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            const selectedProduct = state.products.findIndex(p => p._id === action.productId)
            const deletedProduct = state.products.splice(selectedProduct, 1)
            return { ...state, products: state.products }
        case SET_SELECTED_PRODUCT_DETAILS:
            const selectedProductDetails = state.products.find(p => p._id === action.productId)
            return { ...state, productDetails: selectedProductDetails }
        default:
            return state;
    }
}
export default ProductReducer