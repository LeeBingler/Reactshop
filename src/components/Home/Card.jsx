import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useAddItemCart } from '../Provider/CartProvider';

function Card({ item }) {
    const onClickHandler = useAddItemCart();

    return (
        <div className='flex flex-col justify-center bg-white border border-black rounded m-4 p-2 py-10 lg:hover:shadow-2xl lg:hover:scale-[1.02] transition-transform ease-linear duration-200'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-right pb-5 w-full font-semibold mr-5 md:mr-7 lg:mr-12'>
                    ⭐ {item.rating.rate}
                </p>
                <img className='max-h-64 w-60 px-4' src={item.image} alt={item.title} />
            </div>
            <h1 className='p-2 overflow-hidden text-ellipsis whitespace-nowrap text-gray-600 text-center
                md:text-xl'>
                {item.title}
            </h1>
            <div className='flex flex-col justify-center items-center md:text-xl'>
                <p>
                    ${item.price}
                </p>
                <div className='flex flex-col gap-2 md:flex-row'>
                    <button
                    aria-label='add this item to your cart'
                    className='md:text-base lg:text-lg border border-black rounded text-center align-middle px-[3px] mt-1 text-white bg-blue-400'
                    onClick={() => {onClickHandler(item, item.number + 1)}}
                    >
                        Add to Cart
                    </button>
                    <button
                    aria-label='see more detail item'
                    className='md:text-base lg:text-lg border border-black rounded text-center align-middle px-[3px] mt-1 text-white bg-blue-900'
                    >
                        <Link to={`/product/${item.id}`}>
                            See details
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number.isRequired
        })
    })
}

export default Card;