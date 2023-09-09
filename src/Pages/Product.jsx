import { useNavigate, useParams } from 'react-router-dom';
import { useGetItemById, useItems } from '../components/Provider/ItemsProvider/Hook';
import { useAddItemCart } from '../components/Provider/CartProvider/Hook';
import LoadingScreen from './LoadingScreen';
import GoBackBtn from '../components/GoBackBtn';
import { useState } from 'react';

export default function Product() {
    const [numberOfItemToAdd, setnumberOfItemToAdd] = useState(1);
    const idProduct = Number(useParams().id);
    const getItemId = useGetItemById();
    const item = getItemId(idProduct)[0];
    const navigate = useNavigate();

    const onClickHandler = useAddItemCart();

    function handleOnClickBtnPlus() {
        setnumberOfItemToAdd((prev) => {
            if (prev < 10) {
                return prev + 1;
            }
            return prev;
        });
    }

    function handleOnClickBtnMinus() {
        setnumberOfItemToAdd((prev) => {
            if (prev > 1) {
                return prev - 1;
            }
            return prev;
        });
    }

    if (useItems().length === 0) return <LoadingScreen />;

    return (
        <section className='px-2 mt-28 flex flex-col items-center lg:flex-row lg:justify-around lg:items-start lg:mt-40 w-full'>
            <div className='flex flex-col justify-center items-center border p-10 w-4/5'>
                <img className='h-min max-h-full' src={item.image} alt={item.title} />
            </div>

            <div className='w-4/5 my-4 max-w-3xl lg:mb-0'>
                <h1 className='py-5 font-medium text-2xl lg:text-2xl'>{item.title}</h1>
                <div className='flex py-3 gap-6'>
                    <p className='font-semibold md:ml-4'>⭐ {item.rating.rate} </p>
                    <p className='text-blue-800'> {item.rating.count} ratings </p>
                </div>
                <div className='border-t border-b border-gray-400 my-4 py-6 lg:mb-0 lg:pb-0'>
                    <h2 className='mb-4 mt-1 text-xl font-medium'> About this item </h2>
                    <p className='text-gray-600 text-justify md:text-xl md:p-4'>
                        {item.description}
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-3 border-black border rounded py-4 px-8 mb-10 w-4/5 lg:pl-5 lg:py-8'>
                <div className='flex flex-col gap-3 items-center'>
                    <p className='text-xl md:text-2xl lg:text-3xl'>
                        Price : <span className='text-blue-900'> ${item.price} </span>
                    </p>
                    <div className='flex w-1/2 justify-between content-center items-center'>
                        <button
                            className='text-4xl border rounded border-black pb-1 px-4 align-middle text-center  hover:bg-gray-200  transition-all 0.5s'
                            onClick={handleOnClickBtnMinus}
                        >
                            -
                        </button>
                        <p className='text-2xl'> {numberOfItemToAdd} </p>
                        <button
                            className='text-4xl border rounded border-black pb-1 px-3 align-middle text-center  hover:bg-gray-200  transition-all 0.5s'
                            onClick={handleOnClickBtnPlus}
                        >
                            +
                        </button>
                    </div>
                </div>

                <button
                    aria-label='add this item to your cart'
                    className='btn-addToCart'
                    onClick={() => {
                        onClickHandler(item, item.number + numberOfItemToAdd);
                    }}
                >
                    Add to Cart
                </button>
                <button
                    className='bg-blue-900 rounded-md px-4 py-1 mt-2 text-white hover:bg-blue-950'
                    onClick={() => {
                        onClickHandler(item, item.number + 1);
                        navigate('/home/cart');
                    }}
                >
                    Buy Now
                </button>
                <div className='flex py-2 items-center gap-2'>
                    <i class='bx bxs-lock-alt'></i>
                    <p className='text-blue-700'> Secure transaction </p>
                </div>
                <div className='text-gray-800 text-sm'>
                    <div className='flex justify-between'>
                        <p> Ships from </p>
                        <p> Reactshop.com </p>
                    </div>
                    <div className='flex justify-between'>
                        <p> Sold by </p>
                        <p> Reactshop.com </p>
                    </div>
                </div>
            </div>

            <GoBackBtn />
        </section>
    );
}
