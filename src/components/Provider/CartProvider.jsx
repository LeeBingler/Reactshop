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
        let numberIsNotZero = true;

        setCart(prev => {
            prev.map((item) => {
                if (item.id === ItemToRemove.id && ItemToRemove.number > 0) {
                    item.number -= 1;
                    numberIsNotZero = false;
                }
                return item;
            })

            if (numberIsNotZero) {
                prev.filter((item) => {
                    return item.id !== ItemToRemove.id;
                });
            }
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
