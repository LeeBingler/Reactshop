import React from 'react';
import { useCart, useTotalPriceCart } from '../components/Provider/CartProvider';
import CartCard from '../components/Cart/CartCard';

export default function Cart() {
  const ItemCart = useCart();
  const totalPrice = useTotalPriceCart();

    return (
      <section className='flex flex-col pt-20 pb-7 lg:pt-32 lg:pb-20 bg-gray-200 lg:flex-row lg:justify-around'>
        <div className='bg-white max-w-7xl border border-black'>
          <h1 className='font-logo text-6xl ml-4 mt-4'> Your cart : </h1>
          <hr className='mx-14 mt-10'/>
          <div className='flex flex-col items-center'>
            {ItemCart.map((item) => <CartCard item={item} /> )}
          </div>
          <hr className='w-full mx-20 my-10' />
          <p className='text-right text-2xl mb-5 pr-4'>
            Total ({ItemCart.length} {ItemCart.length > 1 ? 'articles' : 'article'}): {totalPrice}$
          </p>
        </div>

        <div className='flex flex-col items-center border border-black bg-white m-4 p-2 h-fit gap-4'>
          <p className='text-right text-xl whitespace-nowrap'>
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
