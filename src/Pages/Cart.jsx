import React from 'react';
import { useCart } from '../components/Provider/CartProvider';
import CartCard from '../components/Cart/CartCard';

export default function Cart() {
  const ItemCart = useCart();

    return (
      <div className='pt-20'>
        {ItemCart.map((item) => <CartCard item={item} /> )}
      </div>
    )
};
