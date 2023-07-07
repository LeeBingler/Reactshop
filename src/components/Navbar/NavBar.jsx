import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuNav from './MenuNav';

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    function handleClickMenu() {
        setShowMenu(prev => !prev);
    }

    const rotateMenuButton = showMenu ? 'rotate-90' : 'rotate-0';

    return (
        <header className='sticky top-0 bg-white'>
            <nav className='navbar'>
                <button className='btn-navBar ml-3' onClick={handleClickMenu}>
                    <i className={`bx bx-menu float-none inline text-3xl ${rotateMenuButton}`}></i>
                </button>
                <Link to='/home'>
                    <h1 className='font-logo'> React Shop </h1>
                </Link>
                <button className='btn-navBar mr-3'>
                    <i className='bx bxs-cart float-none inline text-3xl'></i>
                </button>
            </nav>

            <MenuNav showMenu={showMenu} />
        </header>
    )
}
