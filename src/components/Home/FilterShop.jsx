import React, { useReducer } from 'react'
import { ACTION } from './Shop'
import { useItems } from '../ItemsProvider'

export default function FilterShop({ filterFunction }) {
    const AllItems = useItems();

    return (
        <section className='flex justify-center border-black border-b border-t mt-4 py-2'>
            <button
            className='btn-filter'
            onClick={() => filterFunction({ filterType: ACTION.ALL, Items: AllItems })}
            >
                All
            </button>
            <button
            className='btn-filter'
            onClick={() => filterFunction({ filterType: ACTION.WOMEN, Items: AllItems })}
            >
                Women's Clothing
            </button>
            <button
            className='btn-filter'
            onClick={() => filterFunction({ filterType: ACTION.MEN, Items: AllItems })}
            >
                Men's Clothing
            </button>
            <button
            className='btn-filter'
            onClick={() => filterFunction({ filterType: ACTION.JEWELERY, Items: AllItems })}
            >
                Jewelery
            </button>
            <button
            className='btn-filter'
            onClick={() => filterFunction({ filterType: ACTION.ELECTRONICS, Items: AllItems })}
            >
                Electronics
            </button>
        </section>
    )
}
