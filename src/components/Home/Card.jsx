import React from 'react'

export default function Card({ item }) {

    return (
        <div className='w-28 '>
            <div>
                <p> {item.rating.rate} / 5 </p>
                <img src={item.image} alt={item.title} />
            </div>
            <div>
                <h1> {item.title} </h1>
                <p> {item.price} </p>
                <button className='btn-navBar'> BUY ! </button>
            </div>
        </div>
    )
}
