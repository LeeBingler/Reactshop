import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();
export const AddCartContext = React.createContext();
export const RemoveCartContext = React.createContext();

export function useCart() {
    return useContext(CartContext);
};

export function useAddItemCart() {
    return useContext(AddCartContext);
};

export function useRemoveItemCart () {
    return useContext(RemoveCartContext);
}

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function removeItemCart(ItemToRemove) {
        let numberIsNotZero = 0;

        setCart(prev => {
            let newArray = [];
            newArray = prev.map((item) => {
                if (item.id === ItemToRemove.id && ItemToRemove.number > 0) {
                    item.number -= 1;
                    numberIsNotZero = item.number;
                }
                return item;
            })

            if (numberIsNotZero === 0) {
                newArray = newArray.filter((item) => {
                            return item.id !== ItemToRemove.id;
                        });
            }
            return newArray;
        });
    };

    function addItemCart(newItem) {
        function checkNewItemInCart(oldCart) {
            const ItemIsIn = oldCart.filter((item) => {
                                return item.id === newItem.id
                            });
            return ItemIsIn.length;
        };

        setCart(prev => {
            if (checkNewItemInCart(prev) !== 0) {
                return prev.map((item) => {
                    if (item.id === newItem.id) {
                        newItem.number += 1;
                        return newItem;
                    }
                    return item;
                })
            }
            return [...prev, newItem];
        });
    };

    return (
        <CartContext.Provider value={cart}>
            <AddCartContext.Provider value={addItemCart}>
                <RemoveCartContext.Provider value={removeItemCart} >
                    { children }
                </RemoveCartContext.Provider>
            </AddCartContext.Provider>
        </CartContext.Provider>
    )
};
