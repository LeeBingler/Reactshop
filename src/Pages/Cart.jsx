import React from 'react';
import { useCart, useTotalPriceCart } from '../components/Provider/CartProvider';
import CartCard from '../components/Cart/CartCard';

export default function Cart() {
  const ItemCart = useCart();
  const totalPrice = useTotalPriceCart();

    return (
      <section className='pt-20 bg-gray-200'>
        <div className='bg-white max-w-7xl'>
          <h1 className='font-logo text-6xl'> Your cart </h1>
          <hr />
          {ItemCart.map((item) => <CartCard item={item} /> )}
          <hr />
          <p className='text-right'>
            Total ({ItemCart.length} {ItemCart.length > 1 ? 'articles' : 'article'}): {totalPrice}$
          </p>
        </div>
      </section>
    )
};
