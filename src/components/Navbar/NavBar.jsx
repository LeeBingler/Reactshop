import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuNav from './components//MenuNav';
import MenuCart from './components/Menucart/MenuCart';
import BtnCart from './components/BtnCart';

function useScreenSizeShow(setShowMenu) {
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
    }, [screenSize, setShowMenu]);
}

function useCloseMenuLocationChange(setShowMenu) {
    const location = useLocation();

    /* Effect to know when the URL change and to close the menunavbar */
    useEffect(() => {
        setShowMenu(false);
    }, [location, setShowMenu])
}

function useCloseMenuNotClick (setShowMenu, setShowCart) {
    const navBarRef = useRef(null);

    /* Effect use to close menu if the use click outside of it */
    useEffect(() => {
        function handleClickOutsideNavBar(event) {
            if (navBarRef.current && !navBarRef.current.contains(event.target)) {
                setShowMenu(false);
                setShowCart(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutsideNavBar);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideNavBar);
        };
    }, [navBarRef, setShowMenu, setShowCart]);

    return navBarRef;
}

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const navBarRef = useCloseMenuNotClick(setShowMenu, setShowCart);

    useScreenSizeShow(setShowMenu);
    useCloseMenuLocationChange(setShowMenu);

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
        <header
        ref={navBarRef}
        className='fixed w-full top-0 bg-white z-50 h-14 md:shadow-lg'
        >
            <nav className='navbar'>
                <button className={`md:hidden btn-navBar ml-3 ${menuActive}`} onClick={handleClickMenu} aria-label='display menu'>
                    <i className='bx bx-menu float-none inline text-3xl'></i>
                </button>
                <Link to='/home'>
                    <h1 className='font-logo md:ml-4'> React Shop </h1>
                </Link>
                <BtnCart showCart={showCart} handleClickCart={handleClickCart}/>
            </nav>
            <MenuNav showMenu={showMenu} navBarRef={navBarRef} />
            <MenuCart showCart={showCart} hiddenCart={handleClickCart} />
        </header>
    )
}
