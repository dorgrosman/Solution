import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function ProductDetails() {
    const productDetails = useSelector(state => state.products.productDetails)

    const [title, setTitle] = useState('')
    const dispatch = useDispatch();
    // const [description, setDescription] = useState('')

    useEffect(()=>{
        if(!productDetails){
            
        }else{
            setTitle(productDetails.title)
        }
    },)

    const submitHandler = (event) => {
        event.preventDefault()
        
       
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                {productDetails ? <div>
                    <h2>Name
                        <label htmlFor="title"></label>
                        <input  type="text" id="title" value={title} onChange={(event)=> setTitle(event.target.value)}/>
                    </h2>
                    <h2>Description<input value={productDetails.description} /></h2>
                    <h2>Price<input value={productDetails.price} /></h2>
                    <button>Save</button>
                </div>
                    : null}
            </form>
        </div>
    )
}
