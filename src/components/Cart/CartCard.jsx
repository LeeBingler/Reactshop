import React from 'react'

export default function CartCard({ item }) {

    return (
        <div className='mt-8 flex'>
            <img className='h-20 px-4' src={item.image} alt={item.title} />
            <div className='flex flex-col w-full max-w-4xl'>
                <div className='flex justify-between'>
                    <h1 className='text-xl'> {item.title} </h1>
                    <p className='pr-4'> x{item.number}</p>
                </div>
                <p> ${item.price} </p>
                <p className='text-gray-500 text-sm pt-2'> {item.description} </p>
            </div>
        </div>
    )
    }
