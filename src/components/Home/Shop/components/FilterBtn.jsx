import React from 'react';

function FilterBtn({ children, onClick, number, whichIsActive }) {
    return (
        <button
            aria-label={`filter button ${children}`}
            className={`basis-full whitespace-nowrap ${whichIsActive === number ? 'filter-active' : 'btn-filter'}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default FilterBtn;
