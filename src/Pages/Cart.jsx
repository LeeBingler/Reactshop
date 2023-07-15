import React from 'react';
import { useCart, useTotalPriceCart } from '../components/Provider/CartProvider';
import CartCard from '../components/Cart/CartCard';

export default function Cart() {
  const ItemCart = useCart();
  const totalPrice = useTotalPriceCart();

    return (
      <section className='pt-20 bg-gray-200'>
        <div className='bg-white max-w-7xl border border-black'>
          <h1 className='font-logo text-6xl mb-4 ml-4 mt-4'> Your cart : </h1>
          <hr className='mx-14 mt-8'/>
          {ItemCart.map((item) => <CartCard item={item} /> )}
          <hr className='w-full mx-20' />
          <p className='text-right text-2xl'>
            Total ({ItemCart.length} {ItemCart.length > 1 ? 'articles' : 'article'}): {totalPrice}$
          </p>
        </div>
        <div className='flex flex-col items-center border border-black bg-white m-4 p-2'>
          <p className='text-right text-xl'>
            Total ({ItemCart.length} {ItemCart.length > 1 ? 'articles' : 'article'}): {totalPrice}$
          </p>
          <button
          className="rounded border border-black p-2 m-2 bg-blue-400 text-white whitespace-nowrap">
            Proceed to Checkout
          </button>
        </div>
      </section>
    )
};
