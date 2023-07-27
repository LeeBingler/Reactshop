import React from 'react'
import { useItems } from '../../../Provider/ItemsProvider/Hook'
import { PropTypes } from 'prop-types';

function ListItems({ valueSearchBar }) {
    const ItemsShop = useItems();

    if (!valueSearchBar) {
        return;
    }

    return (
        <div className='absolute flex flex-row w-44 md:w-48 lg:w-60 bg-red-900'>
            {ItemsShop.map((item) => {
                return item.id
            })}
        </div>
    )
}

ListItems.proptypes = {
    valueSearchBar: PropTypes.string.isRequired
}

export default ListItems