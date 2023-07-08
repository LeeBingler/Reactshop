import React, { useContext, useEffect, useState } from 'react';

export const ItemsContext = React.createContext();
export const GetItemByIdContext = React.createContext();

export function useItems() {
    return useContext(ItemsContext);
}

export function useGetItemById() {
    return useContext(GetItemByIdContext);
}

export default function ItemsProvider({ children }) {
    const [items, setItems] = useState([]);

    const fetchAllItems = async () => {
        await fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            })
    };

    function getItemById(id) {
        const Items = useItems();
        return Items.filter((item) => {
            return item.id === id;
        })
    };

    useEffect(() => {
        fetchAllItems();
    }, []);

    return (
        <ItemsContext.Provider value={items}>
            <GetItemByIdContext.Provider value={getItemById}>
                {children}
            </GetItemByIdContext.Provider>
        </ItemsContext.Provider>
    )
}
