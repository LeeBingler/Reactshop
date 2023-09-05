import { PropTypes } from 'prop-types';
import { useAddItemCart, useRemoveItemCart } from '../Provider/CartProvider/Hook';


/* Copie le pd: https://clone-6ae22.web.app/ */
function CartCard({ item }) {
    const handleClickRemove = useRemoveItemCart();
    const handleClickAdd = useAddItemCart();

    return (
        <div className='mt-10 lg:mt-14 flex'>
            <img className='h-20 w-28 px-6 lg:h-28' src={item.image} alt={item.title} />
            <div className='flex flex-col w-full max-w-4xl'>
                <div className='flex justify-between'>
                    <h1 className='text-xl lg:text-2xl'> {item.title} </h1>
                    <p className='pr-4'> x{item.number}</p>
                </div>
                <p className='lg:text-xl'> ${item.price} </p>
                <p className='text-gray-500 text-sm pt-2 lg:text-base'> {item.description} </p>
                <div className='flex gap-7 mt-4'>
                    <button
                    aria-label='remove one item'
                    className='border rounded border-black p-1 m-1'
                    onClick={() => handleClickRemove(item, item.number - 1)}
                    >
                        Remove One
                    </button>
                    <button
                    aria-label='add one item'
                    className='rounded text-white bg-black p-1 m-1'
                    onClick={() => handleClickAdd(item, item.number + 1)}
                    >
                        Add One
                    </button>
                </div>
            </div>
        </div>
    )
}

CartCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.any.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired
    })
}

export default CartCard;
