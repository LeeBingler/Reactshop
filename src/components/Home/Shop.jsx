import React, { useReducer, useState } from 'react'
import { useItems } from '../ItemsProvider'
import Card from './Card';
import FilterShop from './FilterShop';

export const ACTION = {
    ALL: 'all',
    WOMEN: `women's clothing`,
    MEN: `men's clothing`,
    JEWELERY: 'jewelery',
    ELECTRONICS: 'electronics'
}

function reducerFilterShop(state, action) {
    const allItems = useItems();

    switch(action.filterType) {
        case ACTION.ALL:
            return allItems;
        case ACTION.WOMEN:
            return allItems.filter((item) => {
                return item.category === ACTION.WOMEN;
            })
        case ACTION.MEN:
            return allItems.filter((item) => {
                return item.category === ACTION.MEN;
            })
        case ACTION.JEWELERY:
                return allItems.filter((item) => {
                    return item.category === ACTION.JEWELERY;
            })
        case ACTION.ELECTRONICS:
            return allItems.filter((item) => {
                    return item.category === ACTION.ELECTRONICS;
            })
        default:
            return state;
    }
}

export default function Shop() {
    const [itemsDisplay, dispatch] = useReducer(reducerFilterShop, useItems());

    return (
        <section>
            <FilterShop filter={dispatch}/>
            <div className='grid grid-cols-2'>
                {itemsDisplay.map((item) => {
                    return <Card key={item.id} item={item} />
                })}
            </div>
        </section>
    )
}
