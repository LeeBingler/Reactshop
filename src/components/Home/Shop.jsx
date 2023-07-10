import React, { useState } from 'react'
import { useItems } from '../ItemsProvider'
import Card from './Card';
import FilterShop from './FilterShop';

export default function Shop() {
    const [itemsDisplay, setItemsDisplay] = useState(useItems());

    return (
        <section>
            <FilterShop setItemsDisplay={setItemsDisplay}/>
            <div className='grid grid-cols-2'>
                {itemsDisplay.map((item) => {
                    return <Card key={item.id} item={item} />
                })}
            </div>
        </section>
    )
}
