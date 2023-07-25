import InfoFooter from '../InfoFooter';
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function MenuNav({ showMenu }) {
    const isKeyboardOpen = useDetectKeyboardOpen();
    const isHidden = showMenu || isKeyboardOpen ? 'w-3/4' : 'w-0';

    return (
        <div
        className={`menu-navbar border-r border-black ${isHidden}
            md:transition-none md:absolute md:top-1 md:h-12 md:flex-row-reverse md:border-none
            md:overflow-y-hidden md:w-[70%] md:right-16 md:overflow-x-visible
            md:justify-between`}>
            <div className='flex items-center'>
                <input
                className='block border p-2 mt-4 border-black w-44
                    md:m-4 md:py-1 md:w-48 md:text-lg md:h-10 md:mr-0 md:ml-2
                    lg:w-60'
                placeholder='Type to search..'>
                </input>
                <button
                aria-label='search button'
                className='text-2xl p-2 mt-4 h-11 border border-black bg-black text-white hover:text-blue-400
                    md:m-4 md:text-xl md:p-1 md:mr-1 md:h-10 md:ml-0 md:w-10'>
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
            <InfoFooter classProps={'pt-48 flex flex-col gap-4 md:hidden'}/>
        </div>
    )
}

MenuNav.propTypes = {
    showMenu: PropTypes.bool.isRequired,
}

export default MenuNav;