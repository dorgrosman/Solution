import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductList from './../../components/ProductList/ProductList';
import ProductDetails from './../../components/ProductDetails/ProductDetails';
import { createProduct } from '../../store/Action/ProductAction';

export default function HomePage() {
    const { products } = useSelector(state => state.products)
    const [addBtn, setAddButton] = useState(false)
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch();



    const toggleAddButton = useCallback(() => {
        if (addBtn) {
            setAddButton(false)
        } else {
            setAddButton(true)
        }
    })

    const submitHendler = (event) => {
        event.preventDefault()

        dispatch(createProduct({
            title,

        }
        ))
    }

    return (
        <div>
            <button onClick={(event) => toggleAddButton(event)}>Add Product</button>
            {addBtn ?
                <form onSubmit={submitHendler}>
                    <h2>Name
                        <label htmlFor="title"></label>
                        <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
                    </h2>
                    <h2>Description<input /></h2>
                    <h2>Price<input /></h2>
                    <button type="submit">Save</button>
                </form>

                : null}
            <ProductList products={products} />
            <ProductDetails />
        </div>
    )
}
