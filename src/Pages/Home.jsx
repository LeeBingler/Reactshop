import React from 'react'
import Carousel from '../components/Home/Carousel';
import Shop from '../components/Home/Shop';
export default function Home() {

  return (
    <main>
        <div className='flex content-center justify-center'>
          <Carousel />
        </div>
        <section>
          <Shop />
        </section>
    </main>
  )
}
