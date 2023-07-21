import React, { useReducer } from 'react'
import { ACTION } from './Shop'
import { useItems } from '../Provider/ItemsProvider'

export default function FilterShop({ filterFunction }) {
    const AllItems = useItems();

    return (
        <section
        className='flex max-w-full justify-center border-black bg-white border-b border-t mt-4 py-2 sticky top-[3.4rem] z-10
                md:border-0 md:mt-0 md:h-16 md:w-[1000px] md:flex-wrap md:justify-normal md:pr-4 md:top-16 md:max-w-xs
                lg:w-1/2'>
            <button
            aria-label='filter All'
            className='btn-filter'
            onClick={() => filterFunction({ filterType: ACTION.ALL, Items: AllItems })}
            >
                All
            </button>
            <button
            aria-label="filter Women's Clothing"
            className='btn-filter'
            onClick={() => filterFunction({ filterType: ACTION.WOMEN, Items: AllItems })}
            >
                Women's Clothing
            </button>
            <button
            aria-label="filter Men's Clothing"
            className='btn-filter'
            onClick={() => filterFunction({ filterType: ACTION.MEN, Items: AllItems })}
            >
                Men's Clothing
            </button>
            <button
            aria-label="filter Jewelery"
            className='btn-filter'
            onClick={() => filterFunction({ filterType: ACTION.JEWELERY, Items: AllItems })}
            >
                Jewelery
            </button>
            <button
            aria-label="filter Electronics"
            className='btn-filter'
            onClick={() => filterFunction({ filterType: ACTION.ELECTRONICS, Items: AllItems })}
            >
                Electronics
            </button>
        </section>
    )
}
