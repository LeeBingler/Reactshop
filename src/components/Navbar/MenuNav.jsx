import React from 'react';
import InfoFooter from '../InfoFooter';
import { NavLink } from 'react-router-dom';

export default function MenuNav({ showMenu }) {
    const isHidden = showMenu ? 'w-3/4' : 'w-0';

    return (
        <div
        className={`menu-navbar border-r border-black ${isHidden}
            md:transition-none md:absolute md:top-1 md:h-12 md:flex-row md:border-none
            md:overflow-y-hidden md:w-[72%] md:left-40 md:overflow-x-visible
            md:justify-between `}>
            <div className='flex items-center'>
                <input
                className='block border p-2 m-4 border-black
                    md:py-1 md:w-48 md:text-lg md:h-8 md:mr-2 md:ml-5'
                placeholder='Type to search..'>
                </input>
                <button className='text-2xl border-2 p-2 m-4 rounded hover:text-blue-400
                    md:text-xl md:p-1'>
                    <i className='bx bx-search-alt'></i>
                </button>
            </div>
            <div className='flex flex-col
                md:flex-row md:justify-around md:pl-84 md:w-full'>
                <NavLink className='linknavbar' to='/home'>
                    Home
                </NavLink>
                <NavLink className='linknavbar' to='/about'>
                    About
                </NavLink>
                <NavLink className='linknavbar' to='/contact'>
                    Contact
                </NavLink>
            </div>
            <InfoFooter classProps={'pt-48 md:hidden'}/>
        </div>
    )
}
