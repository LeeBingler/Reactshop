import React from 'react';
import { useItems } from '../../../../Provider/ItemsProvider/Hook';
import { PropTypes } from 'prop-types';

function ListItems({ valueSearchBar, setValueSearchBar }) {
    const ItemsShop = useItems();
    const filteredData = ItemsShop.filter((item) => {
        if (valueSearchBar === '') {
            return item;
        }

        return item.title.toLowerCase().includes(valueSearchBar);
    });

    if (!valueSearchBar) {
        return;
    }

    return (
        <div className='absolute flex flex-col overflow-scroll h-fit w-44 md:w-48 lg:w-60 bg-white pl-2 border-b border-x border-black'>
            {filteredData.map((item) => {
                return (
                    <button
                        key={item.id * 7872}
                        className='overflow-hidden text-ellipsis whitespace-nowrap py-2'
                        onClick={() => setValueSearchBar(item.title)}
                    >
                        {item.title}
                    </button>
                );
            })}
        </div>
    );
}

ListItems.proptypes = {
    valueSearchBar: PropTypes.string.isRequired,
    setValueSearchBar: PropTypes.func.isRequired
};

export default ListItems;
