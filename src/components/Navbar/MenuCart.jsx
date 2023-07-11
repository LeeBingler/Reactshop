import React from 'react'
import { useCart } from '../Provider/CartProvider';

export default function MenuCart({showCart}) {
  const isHidden = showCart ? 'w-3/4' : 'w-0';
  const ItemCart = useCart();

  return (
    <section className={`menu-navbar right-0 border-l border-black ${isHidden}`}>
        Menu Cart
    </section>
  )
}
