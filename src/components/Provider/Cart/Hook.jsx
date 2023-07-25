import { useContext } from 'react';
import { CartContext, AddCartContext, RemoveCartContext, TotalPriceCartContext} from './CartProvider'

export function useCart() {
    return useContext(CartContext);
}

export function useAddItemCart() {
    return useContext(AddCartContext);
}

export function useRemoveItemCart () {
    return useContext(RemoveCartContext);
}

export function useTotalPriceCart () {
    return useContext(TotalPriceCartContext);
}