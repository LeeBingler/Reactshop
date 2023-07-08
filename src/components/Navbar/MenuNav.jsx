import React from 'react';
import InfoFooter from '../InfoFooter';
import { NavLink } from 'react-router-dom';

export default function MenuNav({ showMenu }) {
    const isHidden = showMenu ? 'w-3/4' : 'w-0';

    return (
        <div className={`menu-navbar border-r border-black ${isHidden}`}>
            <div className='flex'>
                <input className='block border p-2 m-4 border-black' placeholder='Type to search..'>
                </input>
                <button className='text-2xl border-2 p-2 m-4 rounded hover:text-blue-400'>
                    <i class='bx bx-search-alt'></i>
                </button>
            </div>
            <NavLink className='linknavbar' to='/home'>
                Home
            </NavLink>
            <NavLink className='linknavbar' to='/about'>
                About
            </NavLink>
            <NavLink className='linknavbar' to='/contact'>
                Contact
            </NavLink>
            <InfoFooter classProps={'pt-48 md:hidden'}/>
        </div>
    )
}
