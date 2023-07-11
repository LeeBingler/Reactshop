import React from 'react'

export default function CardCart({ item }) {

    return (
        <div>
            <img src={item.image} alt={item.title} />
            <h1> {item.title} </h1>
            <p> ${item.price} </p>
        </div>
    )
}
