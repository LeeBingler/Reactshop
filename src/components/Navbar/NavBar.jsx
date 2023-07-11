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

		if (screenSize.width > 765) {
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
        <header className='sticky top-0 bg-white z-50 shadow-lg'>
            <nav className='navbar'>
                <button className={`md:hidden btn-navBar ml-3 ${menuActive}`} onClick={handleClickMenu}>
                    <i className='bx bx-menu float-none inline text-3xl'></i>
                </button>
                <Link to='/home'>
                    <h1 className='font-logo'> React Shop </h1>
                </Link>
                <button className={`btn-navBar mr-3 ${showCart ? 'text-blue-400' : ''}`} onClick={handleClickCart}>
                    <i className='bx bxs-cart float-none inline text-3xl'></i>
                </button>
            </nav>

            <MenuNav showMenu={showMenu} />
            <MenuCart showCart={showCart} />
        </header>
    )
}
