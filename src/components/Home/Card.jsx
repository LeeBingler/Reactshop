import React from 'react'

export default function Card({ item }) {

    return (
        <div className='w-48 bg-white border border-black rounded p-5 m-5 hover:shadow-2xl hover:scale-[1.03] transition-all ease-linear duration-200'>
            <div>
                <p> {item.rating.rate} / 5 ⭐ </p>
                <img src={item.image} alt={item.title} />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='whitespace-nowrap'> {item.title} </h1>
                <p> ${item.price} </p>
                <button className='btn-navBar'> Add to Cart </button>
            </div>
        </div>
    )
}
