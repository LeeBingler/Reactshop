import React, { useReducer } from 'react'

const ACTION = {
    ALL: 'all',
}

function reducerFilterShop(state, action) {
    switch(action.filterType) {
        default:
            return state;
    }
}

export default function FilterShop({ setItemsDisplay }) {
    const [state, dispatch] = useReducer(reducerFilterShop, {filterType: 'all'})

    return (
        <div>
            FilterShop
        </div>
    )
}
