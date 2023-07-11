import React from 'react'
import { useCart } from '../Provider/CartProvider';
import CardCart from './CardCart';

export default function MenuCart({ showCart }) {
  const isHidden = showCart ? 'w-3/4' : 'w-0';
  const ItemCart = useCart();
  let priceTotal = 0;

  ItemCart.forEach(element => {
      priceTotal += element.price * element.number;
  });

  return (
    <section className={`menu-navbar right-0 border-l border-black ${isHidden}`}>
        {ItemCart.map((item) => {
          return <CardCart key={item.id * 1000} item={item} />
        })}
        <h2> {priceTotal !== 0 ? `Total: $${priceTotal}` : ''} </h2>
    </section>
  )
};
