import React, { useContext } from 'react'

export const CartContext = React.createContext();

export function useCart() {
    return useContext(CartContext);
}

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addCartItem(newItem) {

        setCart(prev => {
            if (prev.includes(newItem)) {
                return prev.map((item) => {
                    if (item === newItem) {
                        newItem.number += 1;
                        return newItem
                    }
                        return item;
                })
            }
            return [...prev, newItem]
        })
    }

    return (
        <CartContext.Provider value={cart}>
            { children }
        </CartContext.Provider>
    )
}
