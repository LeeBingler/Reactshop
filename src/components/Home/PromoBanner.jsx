import { useState } from 'react';
import PropTypes from 'prop-types';

function PromoBanner({ children, className, classBtn }) {
    const [isOpen, setIsOpen] = useState(true);

    if (isOpen) {
        return (
            <div className={`${className || ''} absolute bottom-0 left-0`}>
                {children}
                <button className={classBtn} onClick={() => setIsOpen(false)}>
                    X
                </button>
            </div>
        );
    }

    return;
}

PromoBanner.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    classBtn: PropTypes.string
};

export default PromoBanner;
