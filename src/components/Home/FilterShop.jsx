import React, { useReducer } from 'react'

const ACTION = {
    ALL: 'All',
    WOMEN: `Women's Clothing`,
    MEN: `Men's Clothing`,
    JEWELERY: 'Jewelery',
    ELECTRONICS: 'Electronics'
}

function reducerFilterShop(state, action) {
    switch(action.filterType) {
        default:
            return state;
    }
}

export default function FilterShop({ setItemsDisplay }) {
    const [state, dispatch] = useReducer(reducerFilterShop, {filterType: ACTION.ALL})

    return (
        <section className='flex justify-center border-black border-b border-t mt-4 py-2'>
            <button className='btn-filter'> All </button>
            <button className='btn-filter'> Women's Clothing </button>
            <button className='btn-filter'> Men's Clothing </button>
            <button className='btn-filter'> Jewelery </button>
            <button className='btn-filter'> Electronics </button>
        </section>
    )
}
