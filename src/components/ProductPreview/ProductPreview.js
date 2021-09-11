import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import deleteProduct from '../../store/Action/ProductAction'
import addToCart from '../../store/Action/ProductAction'
import './ProductPreview.scss'
import { productSelected } from './../../store/Action/ProductAction';

export default function ProductPreview(props) {
    const product = props.product
    const dispatch = useDispatch()


    const selectedDeleteProduct = useCallback(() => {
        dispatch(deleteProduct(product._id))
    })

    const displayProductDetails = (() => {
        dispatch(productSelected(product._id))
    })

    return (
        <div className="card" onClick={() => displayProductDetails()}>

            <div className={'product-preview space-between'}>
                <span className="title">Name {product.title}</span>
                <img src={product.imgUrl} />
                <span>Price : {product.price} $</span>
                <span>description : {product.description} </span>
                <button onClick={() => selectedDeleteProduct()} >Delete</button>
            </div>
        </div>
    )
}
