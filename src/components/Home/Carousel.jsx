import { PropTypes } from 'prop-types';
import { useMemo } from 'react';

function Carousel({ children }) {
    const slides = useMemo(() => {
        if (children.length > 1) {
            let items = children.map((child, index) => (
                <li key={index * 8 + 2} className='slideCarousel'>
                    {child}
                </li>
            ));

            return [
                <li key={children.length + 1} className='slideCarousel'>
                    {children[children.length - 1]}
                </li>,
                ...items,
                <li key={children.length + 2} className='slideCarousel'>
                    {children[0]}
                </li>
            ];
        }

        return <li className='slideCarousel'> children[0] </li>;
    }, [children]);

    return (
        <section className='relative overflow-hidden'>
            <ul className='list-none flex'>
                {slides}
            </ul>
        </section>
    );
}

Carousel.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

export default Carousel;
