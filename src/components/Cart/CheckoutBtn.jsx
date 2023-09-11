import axios from 'axios';
import { PropTypes } from 'prop-types';

function CheckoutBtn({ itemCart }) {
    async function handleClick() {
        await axios
            .post(`${import.meta.env.VITE_SERVER_URL}/create-checkout-session`, { items: itemCart })
            .then((res) => {
                if (res.statusText == 'OK') return JSON.parse(res.request.response);
                return res.json().then((json) => Promise.reject(json));
            })
            .then(({ url }) => {
                window.location = url;
            })
            .catch((e) => {
                console.error(e.message);
            });
    }

    return (
        <button
            onClick={handleClick}
            aria-label='checkout'
            className='rounded p-2 m-2 text-2xl w-[70%] bg-blue-400 text-white whitespace-nowrap hover:bg-blue-500'
        >
            Checkout
        </button>
    );
}

CheckoutBtn.propTypes = {
    itemCart: PropTypes.array.isRequired
};

export default CheckoutBtn;
