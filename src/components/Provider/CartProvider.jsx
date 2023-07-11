import React, { useContext } from 'react'

export const CartContext = React.createContext();
export const AddCartContext = React.createContext();

export function useCart() {
    return useContext(CartContext);
};

export function useAddItemToCart() {
    return useContext(AddCartContext);
}

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItemToCart(newItem) {
        function checkNewItemInCart(oldCart) {
            const ItemIsIn = oldCart.filter((item) => {
                                return item.id === newItem.id
                            });
            return ItemIsIn.length;
        }

        setCart(prev => {
            if (checkNewItemInCart(prev)) {
                return prev.map((item) => {
                    if (item.id === newItem.id) {
                        newItem.number += 1;
                        return newItem;
                    }
                    return item;
                })
            }
            return [...prev, newItem];
        })
    };

    return (
        <CartContext.Provider value={cart}>
            <AddCartContext.Provider value={addItemToCart}>
                { children }
            </AddCartContext.Provider>
        </CartContext.Provider>
    )
};
