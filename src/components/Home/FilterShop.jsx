import React, { useReducer } from 'react'
import { ACTION } from './Shop'

export default function FilterShop({ filter }) {

    return (
        <section className='flex justify-center border-black border-b border-t mt-4 py-2'>
            <button
            className='btn-filter'
            onClick={(e) => {filter({filterType: ACTION.ALL })}}
            >
                All
            </button>
            <button
            className='btn-filter'
            onClick={() => {filter({filterType: ACTION.WOMEN })}}
            >
                Women's Clothing
            </button>
            <button
            className='btn-filter'
            onClick={() => {filter({filterType: ACTION.MEN })}}
            >
                Men's Clothing
            </button>
            <button
            className='btn-filter'
            onClick={() => {filter({filterType: ACTION.JEWELERY})}}
            >
                Jewelery
            </button>
            <button
            className='btn-filter'
            onClick={() => filter({filterType: ACTION.ELECTRONICS})}
            >
                Electronics
            </button>
        </section>
    )
}
