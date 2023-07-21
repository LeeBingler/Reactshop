import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuNav from './MenuNav';
import MenuCart from './MenuCart';

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension(){
        return {
              width: window.innerWidth,
              height: window.innerHeight
        }
    }

    /* Effect to know when the resize as occur */
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
    	window.addEventListener('resize', updateDimension);

		if (screenSize.width > 768) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }

    	return(() => {
        	window.removeEventListener('resize', updateDimension);
    	})
  	}, [screenSize]);

    function handleClickMenu() {
        setShowMenu(prev => !prev);
        if (showCart) {
            setShowCart(prev => !prev)
        }
    }

    function handleClickCart() {
        setShowCart(prev => !prev)
        if (showMenu) {
            setShowMenu(prev => !prev)
        }
    }

    const menuActive = showMenu ? 'text-blue-400' : 'text-black';

    return (
        <header className='fixed w-full top-0 bg-white z-50 h-14 md:shadow-lg'>
            <nav className='navbar'>
                <button className={`md:hidden btn-navBar ml-3 ${menuActive}`} onClick={handleClickMenu} aria-label='display menu'>
                    <i className='bx bx-menu float-none inline text-3xl'></i>
                </button>
                <Link to='/home'>
                    <h1 className='font-logo md:ml-4'> React Shop </h1>
                </Link>
                <button className={`btn-navBar mr-3 md:mr-4 ${showCart ? 'text-blue-400' : ''}`} onClick={handleClickCart} aria-label='display actual cart'>
                    <i className='bx bxs-cart float-none inline text-3xl'></i>
                </button>
            </nav>
            <MenuNav showMenu={showMenu} />
            <MenuCart showCart={showCart} hiddenCart={handleClickCart} />
        </header>
    )
}
