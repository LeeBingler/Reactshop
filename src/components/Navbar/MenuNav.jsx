import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuNav({ showMenu }) {
    const isHidden = showMenu ? 'w-0' : 'w-1/2';

    return (
        <div id='menuNavbar' className={`flex flex-col absolute bg-white overflow-hidden h-screen transition-all ease-out duration-200 ${isHidden}`}>
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
    )
}
