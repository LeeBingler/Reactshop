import React from 'react'

export default function MenuCart({showCart}) {
  const isHidden = showCart ? 'w-3/4' : 'w-0';

  return (
    <section className={`menu-navbar right-0 border-l border-black ${isHidden}`}>
        Menu Cart
    </section>
  )
}
