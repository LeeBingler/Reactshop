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
        <div className={`absolute flex flex-col w-full overflow-scroll h-fit bg-white pl-2 border-x border-black
        md:top-14 md:left-2 md:w-48 lg:w-60 ${filteredData.length === 1 ? 'border-b' : null}`}>
            {filteredData.map((item) => {
                return (
                    <button
                        aria-label={`auto complete searchbar btn for ${item.title}`}
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

ListItems.propTypes = {
    valueSearchBar: PropTypes.string.isRequired,
    setValueSearchBar: PropTypes.func.isRequired
};

export default ListItems;
