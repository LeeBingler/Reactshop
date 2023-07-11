import React, { useContext } from 'react'

export const CartContext = React.createContext();

export function useCart() {
    return useContext(CartContext);
}

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addCartItem(item) {
        setCart(prev => {
            if (prev)
            return [...prev, item]
        })
    }

    return (
        <CartContext.Provider value={cart}>
            { children }
        </CartContext.Provider>
    )
}
