import { useRemoveItemCart } from '../../../../Provider/CartProvider/Hook';
import { PropTypes } from 'prop-types';

function CardCart({ item }) {
    const onClickHandler = useRemoveItemCart();

    return (
        <div className='flex w-full justify-around items-center border-black border-b lg:text-xl'>
            <img className='h-20' src={item.image} alt={item.title} />
            <div className='flex flex-col w-1/3'>
                <h1 className='py-2 overflow-hidden text-ellipsis whitespace-nowrap'> {item.title} </h1>
                <p> ${item.price} </p>
                <p> x{item.number}</p>
            </div>
            <button
            aria-label='Remove item'
            className='rounded text-white bg-black p-1 h-10'
            onClick={() => {onClickHandler(item, item.number - 1)}}
            >
                Remove
            </button>
        </div>
    )
}

CardCart.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired
    })
}

export default CardCart;