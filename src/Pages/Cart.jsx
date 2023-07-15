import React from 'react';
import { useCart } from '../components/Provider/CartProvider';

export default function Cart() {
  const ItemCart = useCart();

    return (
      <div>
        Cart
      </div>
    )
};
