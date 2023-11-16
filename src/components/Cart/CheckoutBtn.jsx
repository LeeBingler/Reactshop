import axios from 'axios';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import ReactLoading from 'react-loading';

function CheckoutBtn({ itemCart }) {
    const [loading, setLoading] = useState();

    async function handleClick() {
        setLoading(true);
        await axios
            .post(`${import.meta.env.VITE_SERVER_URL}/create-checkout-session`, { items: itemCart })
            .then((res) => {
                if (res.statusText == 'OK') return JSON.parse(res.request.response);
                return res.json().then((json) => Promise.reject(json));
            })
            .then(({ url }) => {
                setLoading(false);
                window.location = url;
            })
            .catch((e) => {
                console.error(e.message);
                setLoading(true);
            });
    }

    return !loading ? (
        <button
            onClick={handleClick}
            aria-label='checkout button'
            className='rounded m-2 text-2xl w-[70%] h-12 bg-blue-400 text-white whitespace-nowrap hover:bg-blue-500'
        >
            Checkout
        </button>
    ) : (
        <div className='rounded p-2 m-2 text-2xl w-[70%] h-12 bg-blue-500 flex items-center justify-center'>
            <ReactLoading type='bubbles' color='#FFFFFF'/>
        </div>
    );
}

CheckoutBtn.propTypes = {
    itemCart: PropTypes.array.isRequired
};

export default CheckoutBtn;
