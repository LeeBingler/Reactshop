import React from 'react'

export default function CartCard({ item }) {

    return (
        <div className='mt-8'>
            <img className='h-20' src={item.image} alt={item.title} />
            <div className='flex flex-col w-1/3'>
                <h1 className='py-2 overflow-hidden text-ellipsis whitespace-nowrap'> {item.title} </h1>
                <p> {item.description} </p>
                <p> ${item.price} </p>
                <p> x{item.number}</p>
            </div>
        </div>
    )
    }
