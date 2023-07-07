import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuNav({ showMenu }) {
    const isHidden = showMenu ? 'w-3/4' : 'w-0';

    return (
        <div id='menuNavbar' className={`flex flex-col absolute bg-white whitespace-nowrap overflow-hidden h-screen transition-all ease-out duration-200 ${isHidden}`}>
            <input className='block border p-2 m-4 border-black' placeholder='Type to search..'>

            </input>
            <Link className='linknavbar' to='/home'>
                Home
            </Link>
            <Link className='linknavbar' to='/about'>
                About
            </Link>
            <Link className='linknavbar' to='/contact'>
                Contact
            </Link>
        </div>
    )
}
