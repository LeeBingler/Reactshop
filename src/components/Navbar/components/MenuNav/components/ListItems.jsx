import React from 'react';
import { useItems } from '../../../../Provider/ItemsProvider/Hook';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function ListItems({ valueSearchBar }) {
    const ItemsShop = useItems();
    const filteredData = ItemsShop.filter((item) => {
        if (valueSearchBar === '') {
            return item
        }

        return item.title.toLowerCase().includes(valueSearchBar);
    })

    if (!valueSearchBar) {
        return;
    }

    return (
        <div className='absolute flex flex-col overflow-scroll h-fit w-44 md:w-48 lg:w-60 bg-white pl-2 border-b border-x border-black'>
            {filteredData.map((item) => {
                return (
                    <>
                        <Link
                            className='overflow-hidden text-ellipsis whitespace-nowrap py-1'
                            to={`/product/${item.id}`}
                        >
                            {item.title}
                        </Link>
                        <hr />
                    </>
                );
            })}
        </div>
    );
}

ListItems.proptypes = {
    valueSearchBar: PropTypes.string.isRequired
};

export default ListItems;
