import React, { useState } from 'react'
import { useItems } from '../ItemsProvider'
import Card from './Card';

export default function Shop() {
    const [itemsDisplay, setItemsDisplay] = useState(useItems());

    return (
        <div>
            {itemsDisplay.map((item) => {
                return <Card key={item.id} item={item} />
            })}
        </div>
    )
}
