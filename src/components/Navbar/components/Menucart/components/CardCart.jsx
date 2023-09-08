import { useRemoveItemCart } from '../../../../Provider/CartProvider/Hook';
import { PropTypes } from 'prop-types';

function CardCart({ item }) {
    const onClickHandler = useRemoveItemCart();

    return (
        <div className='flex w-full h-24 justify-around items-center border-black border-b lg:text-xl lg:h-28'>
            <div className='flex justify-center items-center h-[90%] w-24 lg:w-28 whitespace-nowrap'>
                <img className='h-min max-h-full inline align-top float-none clear-none' src={item.image} alt={item.title} />
            </div>

            <div className='flex flex-col w-1/3 py-1'>
                <h1 className='overflow-hidden text-ellipsis whitespace-nowrap'> {item.title} </h1>
                <p className='font-medium py-1'> ${item.price} </p>
                <p> x{item.number}</p>
            </div>

            <button
            aria-label='Remove item'
            className='rounded text-white bg-black p-1 h-10'
            onClick={() => {onClickHandler(item, 0)}}
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