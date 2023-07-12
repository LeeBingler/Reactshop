import React from 'react'
import { useCart, useTotalPriceCart } from '../Provider/CartProvider';
import CardCart from './CardCart';
import { Link } from 'react-router-dom';

export default function MenuCart({ showCart }) {
  const isHidden = showCart ? 'w-3/4 md:w-1/2 lg:w-1/3' : 'w-0';
  const ItemCart = useCart();
  const totalPrice = useTotalPriceCart();

  return (
    <section className={`menu-navbar right-0 border-l border-black ${isHidden}`}>
        {ItemCart.map((item) => {
          return <CardCart key={item.id * 1000} item={item} />
        })}
        <p className='my-2 text-2xl'> {`Total: $${totalPrice}`} </p>
        <button
        className='rounded border border-black p-[2px] text-blue-400 font-semibold text-2xl'
        >
          <Link to='/cart' >
            Go To Cart
          </Link>
        </button>
    </section>
  )
};
