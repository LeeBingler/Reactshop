import React from 'react'
import { Link } from 'react-router-dom';

export default function LinkFooter() {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
       <Link to='/home'>
            <h1 className='font-logo md:ml-4'> React Shop </h1>
        </Link>
        <div className='flex justify-around w-[80%] mb-7'>
            <Link className='' to='/home'>
                Home
            </Link>
            <Link className='' to='/about'>
                About
            </Link>
            <Link className='' to='/contact'>
                Contact
            </Link>
        </div>
    </div>
  )
}
