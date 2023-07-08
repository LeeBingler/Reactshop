import React from 'react'

export default function MenuCart({showCart}) {
  const isHidden = showCart ? 'w-3/4' : 'w-0';

  return (
    <section className={`flex flex-col items-center absolute bg-white whitespace-nowrap overflow-hidden h-screen transition-all ease-out duration-400 ${isHidden}`}>
        Menu Cart
    </section>
  )
}
