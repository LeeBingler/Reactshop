import { ACTION } from './Action';
import { useItems } from '../../../Provider/ItemsProvider/Hook';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

function FilterShop({ filterFunction }) {
    const [whichIsActive, setWhichIsActive] = useState(0);
    const AllItems = useItems();

    return (
        <section
            className='flex max-w-full justify-center border-black bg-white border-b border-t mt-4 py-2 sticky top-[4.7rem] z-10
                md:border-0 md:mt-0 md:h-16 md:w-[1000px] md:flex-wrap md:justify-normal md:pr-4 md:top-20 md:max-w-xs
                lg:w-1/2'
        >
            <button
                aria-label='filter All'
                className={`w-16 ${whichIsActive === 0 ? 'filter-active' : 'btn-filter'}`}
                onClick={() => {
                    filterFunction({ filterType: ACTION.ALL, Items: AllItems });
                    if (whichIsActive != 0) setWhichIsActive(0);
                }}
            >
                All
            </button>
            <button
                aria-label="filter Women's Clothing"
                className={`${whichIsActive === 1 ? 'filter-active' : 'btn-filter'}`}
                onClick={() => {
                    filterFunction({ filterType: ACTION.WOMEN, Items: AllItems });
                    if (whichIsActive != 1) setWhichIsActive(1);
                }}
            >
                Women&apos;s Clothing
            </button>
            <button
                aria-label="filter Men's Clothing"
                className={`${whichIsActive === 2 ? 'filter-active' : 'btn-filter'}`}
                onClick={() => {
                    filterFunction({ filterType: ACTION.MEN, Items: AllItems });
                    if (whichIsActive != 2) setWhichIsActive(2);
                }}
            >
                Men&apos;s Clothing
            </button>
            <button
                aria-label='filter Jewelery'
                className={`${whichIsActive === 3 ? 'filter-active' : 'btn-filter'}`}
                onClick={() => {
                    filterFunction({ filterType: ACTION.JEWELERY, Items: AllItems });
                    if (whichIsActive != 3) setWhichIsActive(3);
                }}
            >
                Jewelery
            </button>
            <button
                aria-label='filter Electronics'
                className={`${whichIsActive === 4 ? 'filter-active' : 'btn-filter'}`}
                onClick={() => {
                    filterFunction({ filterType: ACTION.ELECTRONICS, Items: AllItems });
                    if (whichIsActive != 4) setWhichIsActive(4);
                }}
            >
                Electronics
            </button>
        </section>
    );
}

FilterShop.propTypes = {
    filterFunction: PropTypes.func.isRequired
};

export default FilterShop;
