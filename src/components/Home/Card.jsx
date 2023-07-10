import React from 'react'

export default function Card({ item }) {

    return (
        <div className='w-48 bg-white border border-black rounded p-5 m-5 hover:shadow-2xl hover:scale-[1.03] transition-all ease-linear duration-200'>
            <div>
                <p className='text-right pb-5'> ⭐ {item.rating.rate} </p>
                <img src={item.image} alt={item.title} />
            </div>
            <h1 className='py-2 overflow-hidden text-ellipsis whitespace-nowrap text-gray-600'> {item.title} </h1>
            <div className='flex flex-col justify-center items-center'>
                <p> ${item.price} </p>
                <button className='border border-black rounded text-center align-middle px-[3px] mt-1 text-white bg-blue-400'> Add to Cart </button>
            </div>
        </div>
    )
}
