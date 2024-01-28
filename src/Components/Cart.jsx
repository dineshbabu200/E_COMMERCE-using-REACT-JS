import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart,delCart } from '../redux/actions'

export default function Cart() {
    const state = useSelector((state)=> state.handleCart)
    // console.log(state)
    // console.log(addCart(product))
    const dispatch = useDispatch()



    const handleButton = (product, action) => {
        if (action === 'add') {
            dispatch(addCart(product));
        } else if (action === 'remove') {
            dispatch(delCart(product));
        }
    };
  return (
    <>
    {state.map((product) => (
        <div className='container-fluid ' key={product.id}>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <img src={product.image} alt={product.title} height='200px' width='180px' />
                </div>
                <div className='col-md-4'>
                    <h3>{product.title}</h3>
                    <p className='lead fw-bold'>
                        {product.qty} X ${product.price} = ${product.qty * product.price}
                    </p>
                    <button
                        className='btn btn-outline-dark me-4'
                        onClick={() => handleButton(product, 'remove')}
                    >
                        <i className='fa fa-minus'></i>
                    </button>
                    <button
                        className='btn btn-outline-dark'
                        onClick={() => handleButton(product, 'add')}
                    >
                        <i className='fa fa-plus'></i>
                    </button>
                </div>
            </div>
        </div>
    ))}
</>
);
}