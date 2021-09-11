export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const SET_SELECTED_PRODUCT_DETAILS = 'SET_SELECTED_PRODUCT_DETAILS'

 const deleteProduct = (id) => {
    
    return { type: DELETE_PRODUCT, productId: id }
}

export const productSelected = (id) => {
    
    return { type: SET_SELECTED_PRODUCT_DETAILS, productId: id }
}

export function createProduct(product) { 
    // console.log('product:', product)
  
}

export default deleteProduct 