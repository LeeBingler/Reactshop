import axios from 'axios';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

function CheckoutBtn({ itemCart }) {
    const [btn, setBtn] = useState({ message: 'Checkout', style: {} });

    async function handleClick(e) {
        setBtn({ message: 'Loading...', style: { disable: 'true' } });
        await axios
            .post(`${import.meta.env.VITE_SERVER_URL}/create-checkout-session`, { items: itemCart })
            .then((res) => {
                if (res.statusText == 'OK') return JSON.parse(res.request.response);
                return res.json().then((json) => Promise.reject(json));
            })
            .then(({ url }) => {
                setBtn({ message: 'Loading...', style: { disable: 'false' } });
                window.location = url;
            })
            .catch((e) => {
                console.error(e.message);
                setBtn({ message: 'Error', style: { disable: 'false' } });
            });
    }

    return (
        <button
            style={btn.style}
            onClick={handleClick}
            aria-label='checkout button'
            className='rounded p-2 m-2 text-2xl w-[70%] bg-blue-400 text-white whitespace-nowrap hover:bg-blue-500'
        >
            {btn.message}
        </button>
    );
}

CheckoutBtn.propTypes = {
    itemCart: PropTypes.array.isRequired
};

export default CheckoutBtn;
