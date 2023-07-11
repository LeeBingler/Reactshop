import React from 'react'
import { useCart, useTotalPriceCart } from '../Provider/CartProvider';
import CardCart from './CardCart';
import { Link } from 'react-router-dom';

export default function MenuCart({ showCart }) {
  const isHidden = showCart ? 'w-3/4' : 'w-0';
  const ItemCart = useCart();
  const totalPrice = useTotalPriceCart();

  return (
    <section className={`menu-navbar right-0 border-l border-black ${isHidden}`}>
        {ItemCart.map((item) => {
          return <CardCart key={item.id * 1000} item={item} />
        })}
        <h2> {`Total: $${totalPrice}`} </h2>
        <button
        className='rounded border border-black p-[2px]'
        >
          <Link to='/cart' >
            Go To Cart
          </Link>
        </button>
    </section>
  )
};
