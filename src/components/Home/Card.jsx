import React from 'react'
import { useAddItemCart } from '../Provider/CartProvider';

export default function Card({ item }) {
    const onClickHandler = useAddItemCart();

    return (
        <div className='flex flex-col justify-center min-w-[12rem] w-[80%] h-[360px] bg-white border border-black rounded px-4 m-4 hover:shadow-2xl hover:scale-[1.02] transition-transform ease-linear duration-200'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-right pb-5 w-full'> ⭐ {item.rating.rate} </p>
                <img className='h-40 w-auto' src={item.image} alt={item.title} />
            </div>
            <h1 className='py-2 overflow-hidden text-ellipsis whitespace-nowrap text-gray-600 text-center'> {item.title} </h1>
            <div className='flex flex-col justify-center items-center'>
                <p> ${item.price} </p>
                <button
                className='border border-black rounded text-center align-middle px-[3px] mt-1 text-white bg-blue-400'
                onClick={() => {onClickHandler(item, item.number + 1)}}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
