import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetItemById } from '../components/Provider/ItemsProvider';
import { useAddItemCart } from '../components/Provider/CartProvider';

export default function Product() {
    const idProduct= useParams();
    const getItemId = useGetItemById();
    const item = getItemId(Number(idProduct.id))[0];
    const onClickHandler = useAddItemCart();

    return (
        <section className='mt-20 flex flex-col items-center lg:flex-row lg:justify-around lg:items-end w-full'>
            <div className='w-4/5 my-4 max-w-3xl'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-right pb-5 w-full font-semibold mr-5 md:mr-7 lg:mr-12'>
                        ⭐ {item.rating.rate}
                    </p>
                    <img className='max-h-64 w-60 px-4' src={item.image} alt={item.title} />
                </div>
                <div className='m-2 p-2'>
                    <h1 className='p-2 overflow-hidden text-ellipsis whitespace-nowrap text-center
                        text-xl'>
                        {item.title}
                    </h1>
                    <div className='border my-9 p-3'>
                        <h2 className='mb-4 mt-1 underline'> Description : </h2>
                        <p className='text-gray-600 text-justify md:text-xl md:p-4'>
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center text-xl gap-4 h-full'>
                    <p>
                        Price: ${item.price}
                    </p>
                    <button
                    className='md:text-base lg:text-lg border border-black rounded text-center align-middle px-[3px] mt-1 text-white bg-blue-400'
                    onClick={() => {onClickHandler(item, item.number + 1)}}
                    >
                        Add to Cart
                    </button>
            </div>
        </section>
    )
}
