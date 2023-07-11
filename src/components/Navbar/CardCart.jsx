import React from 'react'
import { useRemoveItemCart } from '../Provider/CartProvider';

export default function CardCart({ item }) {
    const onClickHandle = useRemoveItemCart();

    return (
        <div key={item.id}>
            <img className='w-10' src={item.image} alt={item.title} />
            <h1> {item.title} </h1>
            <p> ${item.price} </p>
            <p> x{item.number}</p>
            <button
            className='rounded text-white bg-black p-1'
            onClick={() => {useRemoveItemCart(item)}}
            >
                Remove
            </button>
        </div>
    )
}
